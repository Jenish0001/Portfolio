import { useEffect, useState, useMemo } from "react";
import { getRepos, type Repo } from "../api/getRepos";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Projects.css";

const USERNAME = "jenish0001";

const HIDDEN_REPOS = new Set([
  "NyayshreeeBrown",
  "NyayashreeGolden",
  "LawFirm",
]);

// Curated priority: described, finished repos should lead the vault.
const FEATURED_ORDER = [
  "AI-Powered-FlashCard-App",
  "Guess_Who",
  "Portfolio",
  "React-30",
];

function deriveCategory(repo: Repo): string {
  if (repo.language) return repo.language;
  const name = repo.name.toLowerCase();
  if (name.includes("lms") || name.includes("web")) return "HTML";
  if (name.includes("futsal") || name.includes("portfolio")) return "CSS";
  return "JavaScript";
}

// Curate: drop hidden draft repos, then sort so described/featured repos lead.
function curateRepos(repos: Repo[]): Repo[] {
  const visible = repos.filter((r) => !HIDDEN_REPOS.has(r.name));
  return visible.sort((a, b) => {
    const idxA = FEATURED_ORDER.indexOf(a.name);
    const idxB = FEATURED_ORDER.indexOf(b.name);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    // described first, then alphabetical
    const descDiff = Number(Boolean(b.description)) - Number(Boolean(a.description));
    if (descDiff !== 0) return descDiff;
    return a.name.localeCompare(b.name);
  });
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getRepos(USERNAME)
      .then((data) => {
        if (!cancelled) {
          setRepos(curateRepos(data));
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load");
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(repos.map(deriveCategory));
    return ["All", ...Array.from(cats).sort()];
  }, [repos]);

  const filteredRepos = useMemo(
    () =>
      selectedCategory === "All"
        ? repos
        : repos.filter((r) => deriveCategory(r) === selectedCategory),
    [repos, selectedCategory]
  );

  const selectedRepo =
    filteredRepos[selectedIdx] ?? filteredRepos[0] ?? null;

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedIdx(0);
  };

  const handlePrev = () =>
    setSelectedIdx((i) =>
      i === 0 ? filteredRepos.length - 1 : i - 1
    );

  const handleNext = () =>
    setSelectedIdx((i) =>
      i >= filteredRepos.length - 1 ? 0 : i + 1
    );

  return (
    <section id="vault" className="vault section">
      <div className="container">
        {/* ---- Header ---- */}
        <p className="section-label">vault</p>
        <h2 className="section-title">
          The Vault<em>.</em>
        </h2>
        <p className="section-intro">
          Every repo in one place — filters are derived from real language
          data in the GitHub API. Click to view.
        </p>

        {/* ---- Loading ---- */}
        {loading && (
          <div className="vault-skeleton">
            {[1, 2, 3, 4].map((n) => (
              <div className="skeleton-card" key={n}>
                <div className="skeleton-line w40" />
                <div className="skeleton-line w80" />
                <div className="skeleton-line w60" />
              </div>
            ))}
          </div>
        )}

        {/* ---- Error ---- */}
        {error && !loading && (
          <div className="vault-error">
            <p>{error}</p>
            <button className="btn btn-ghost" onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* ---- Filter chips (schema-tag style) ---- */}
            <div className="vault-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`vault-chip ${
                    selectedCategory === cat ? "vault-chip-active" : ""
                  }`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  <span className="vault-chip-hash">#</span>
                  {cat}
                </button>
              ))}
              <span className="vault-count data-label">
                <strong>{filteredRepos.length}</strong> repos
              </span>
            </div>

            {/* ---- Featured viewer ---- */}
            <AnimatePresence mode="wait">
              {selectedRepo && (
                <motion.div
                  key={selectedRepo.id}
                  className="vault-featured"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="vault-featured-info">
                    <span className="vault-featured-lang data-label">
                      {selectedRepo.language ?? "unknown"}
                    </span>
                    <h3 className="vault-featured-name">
                      {selectedRepo.name}
                    </h3>
                    <p className="vault-featured-desc">
                      {selectedRepo.description ?? "No description yet"}
                    </p>
                    <a
                      href={selectedRepo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vault-featured-link"
                    >
                      View Repo →
                    </a>
                  </div>
                  <div className="vault-featured-nav">
                    <button className="vault-nav-btn" onClick={handlePrev} aria-label="Previous repo">
                      ←
                    </button>
                    <span className="data-label vault-nav-counter">
                      {selectedIdx + 1}/{filteredRepos.length}
                    </span>
                    <button className="vault-nav-btn" onClick={handleNext} aria-label="Next repo">
                      →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ---- Index grid ---- */}
            <motion.div className="vault-grid" layout>
              <AnimatePresence>
                {filteredRepos.map((repo, i) => (
                  <motion.button
                    key={repo.id}
                    className={`vault-entry ${
                      selectedRepo?.id === repo.id ? "vault-entry-active" : ""
                    }`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      layout: { type: "spring", stiffness: 400, damping: 30 },
                      delay: i * 0.03,
                    }}
                    onClick={() => setSelectedIdx(i)}
                  >
                    <span className="vault-entry-num data-label">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="vault-entry-body">
                      <span className="vault-entry-name">{repo.name}</span>
                      <span className="vault-entry-lang data-label">
                        {repo.language ?? "—"}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}