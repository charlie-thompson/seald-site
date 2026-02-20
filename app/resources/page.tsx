'use client';

import { useState, useEffect } from "react";
import Container from "@/app/components/Container";
import GatedContentModal from "@/app/components/GatedContentModal";

const resources = [
  {
    id: "compliance-vs-security-2026",
    title: "Compliance vs. Security in Healthcare",
    description:
      "Why HIPAA compliance is not enough and why data-layer security is required. Featuring verified breach data from HIPAA Journal, IBM, and HHS.",
    type: "White Paper",
    date: "February 2026",
    gated: true,
    thumbnail: null,
    pdfUrl:
      "https://244915777.fs1.hubspotusercontent-na2.net/hubfs/244915777/Seald-Healthcare-Whitepaper-Compliance-vs-Security-2026.pdf",
  },
];

type Resource = (typeof resources)[number];

const filterTabs = ["All", "White Papers", "Articles", "Blogs", "Videos"];

function typeMatchesFilter(type: string, filter: string) {
  if (filter === "All") return true;
  if (filter === "White Papers") return type === "White Paper";
  if (filter === "Articles") return type === "Article";
  if (filter === "Blogs") return type === "Blog";
  if (filter === "Videos") return type === "Video";
  return false;
}

function getUnlockedIds(): string[] {
  try {
    const raw = sessionStorage.getItem("seald_unlocked_resources");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  useEffect(() => {
    setUnlockedIds(getUnlockedIds());
  }, []);

  const filtered = resources.filter((r) => {
    if (!typeMatchesFilter(r.type, activeFilter)) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCardClick = (resource: Resource) => {
    if (!resource.gated || unlockedIds.includes(resource.id)) {
      window.open(resource.pdfUrl, "_blank");
    } else {
      setSelectedResource(resource);
      setModalOpen(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-8 pt-20 md:pt-24">
        <div className="glow-shape glow-blue -top-20 left-[20%] h-[28rem] w-[28rem]" />
        <div className="glow-shape glow-cyan right-[5%] bottom-0 h-[20rem] w-[20rem]" />
        <Container className="relative max-w-4xl">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#22D3EE] to-[#1677FF] bg-clip-text text-transparent whitespace-nowrap">
            Explore Resources
          </h1>
          <p className="mt-4 text-center text-lg text-gray-600">
            Insights, research, and guides on healthcare data security
          </p>

          {/* Search */}
          <div className="mt-10 relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-[#0B1F3B] text-sm focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Tabs */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === tab
                    ? "bg-[#1677FF] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Resource Cards */}
      <section className="relative pb-16">
        <Container className="max-w-6xl">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((resource) => {
                const isUnlocked =
                  !resource.gated || unlockedIds.includes(resource.id);
                return (
                  <div
                    key={resource.id}
                    onClick={() => handleCardClick(resource)}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className="h-48 bg-gradient-to-br from-[#0B1F3B] to-[#1677FF] flex items-center justify-center">
                      <svg
                        className="h-16 w-16 text-white/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14,2 14,8 20,8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[#1677FF] bg-blue-50 rounded-full px-3 py-1">
                        {resource.type}
                      </span>
                      <h3 className="mt-3 font-bold text-lg text-[#0B1F3B]">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                        {resource.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {resource.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[#1677FF] font-semibold text-sm">
                          {resource.gated && !isUnlocked ? (
                            <>
                              {/* Lock icon */}
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <rect
                                  x="3"
                                  y="11"
                                  width="18"
                                  height="11"
                                  rx="2"
                                />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                              </svg>
                              Unlock &amp; Download
                            </>
                          ) : (
                            <>
                              {/* Unlocked icon */}
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <rect
                                  x="3"
                                  y="11"
                                  width="18"
                                  height="11"
                                  rx="2"
                                />
                                <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                              </svg>
                              Download
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg
                className="h-16 w-16 text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" strokeLinecap="round" />
              </svg>
              <p className="text-gray-500 text-lg">
                No resources found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#F6FAFF] py-4">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-[#22D3EE] via-[#1677FF] to-[#0B5CFF] px-8 py-16 text-center shadow-lg md:px-16">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Ready to Be Secure — Not Just Compliant?
            </h2>
            <p className="mt-4 text-white/80">
              Seamlessly encrypt and remove plaintext PHI
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-[#0B5CFF] transition hover:bg-white/90"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </Container>
      </section>

      {selectedResource && (
        <GatedContentModal
          isOpen={modalOpen}
          onClose={() => { setModalOpen(false); setSelectedResource(null); }}
          resourceId={selectedResource.id}
          resourceTitle={selectedResource.title}
          pdfUrl={selectedResource.pdfUrl}
          onSuccess={(id) => { setUnlockedIds((prev) => [...prev, id]); }}
        />
      )}
    </>
  );
}
