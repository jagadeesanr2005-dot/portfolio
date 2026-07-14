import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Circle,
} from "lucide-react";

const username = "jagadeesanr2005-dot";

export function GithubStats() {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    async function loadGithub() {
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${username}`
        );

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );

        const userData = await userRes.json();
        const repoData = await repoRes.json();

        setUser(userData);

        const stars = repoData.reduce(
          (sum: number, repo: any) => sum + repo.stargazers_count,
          0
        );

        setTotalStars(stars);

        const sortedRepos = [...repoData].sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );

        setRepos(sortedRepos);
      } catch (err) {
        console.log(err);
      }
    }

    loadGithub();
  }, []);

  return (
    <section id="github" className="py-20 sm:py-24 lg:py-28">
      <div className="section-container">

        <SectionHeading
          eyebrow="GitHub"
          title="Open Source Activity"
        />

        <Reveal>

          <div className="flex justify-center mb-8">

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 shadow-[0_0_28px_rgba(16,185,129,0.1)] transition hover:-translate-y-0.5 hover:bg-primary/15 hover:shadow-[0_14px_38px_rgba(16,185,129,0.16)]"
            >
              <Github size={18} />
              Visit My GitHub
            </a>

          </div>

        </Reveal>

        {/* Contribution Graph */}

        <Reveal>

          <Card className="overflow-hidden p-5 mb-10">

            <div className="flex items-center gap-2 text-muted mb-4">

              <Github size={16} />

              Contribution Activity

            </div>

            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=0B0F19&color=34D399&line=10B981&point=34D399`}
              alt="GitHub Activity"
              className="w-full rounded-xl"
            />

          </Card>

        </Reveal>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mb-12">

          {[
            {
              title: "Repositories",
              value: user?.public_repos ?? "-"
            },
            {
              title: "Stars",
              value: totalStars
            },
            {
              title: "Followers",
              value: user?.followers ?? "-"
            },
            {
              title: "Following",
              value: user?.following ?? "-"
            }
          ].map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08}>

              <Card className="p-8 text-center">

                <h2 className="text-5xl font-bold gradient-text">

                  {item.value}

                </h2>

                <p className="mt-3 text-muted">

                  {item.title}

                </p>

              </Card>

            </Reveal>

          ))}

        </div>

        {/* Top Repositories */}

        <Reveal>

          <h3 className="text-lg font-semibold mb-5">

            Featured Repositories

          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {repos.slice(0, 4).map((repo) => (

              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >

                <Card className="p-6 hover:border-primary/40 transition-all hover:-translate-y-1 cursor-pointer h-full">

                  <div className="flex justify-between items-center">

                    <h3 className="font-semibold text-lg">

                      {repo.name}

                    </h3>

                    <ExternalLink size={18} />

                  </div>

                  <p className="text-muted mt-3 min-h-[48px]">

                    {repo.description || "No description available."}

                  </p>

                  <div className="flex items-center gap-2 mt-4 text-sm text-secondary">

                    <Circle size={10} fill="currentColor" />

                    {repo.language || "Unknown"}

                  </div>

                  <div className="flex items-center gap-6 mt-5 text-sm">

                    <span className="flex items-center gap-1">

                      <Star size={14} />

                      {repo.stargazers_count}

                    </span>

                    <span className="flex items-center gap-1">

                      <GitFork size={14} />

                      {repo.forks_count}

                    </span>

                  </div>

                  <p className="text-xs text-muted mt-5">

                    Updated{" "}
                    {new Date(repo.updated_at).toLocaleDateString()}

                  </p>

                </Card>

              </a>

            ))}

          </div>

        </Reveal>

      </div>
    </section>
  );
}
