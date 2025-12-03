import Link from "next/link";
import { projects } from "@/src/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b border-zinc-200 bg-white/80 px-4 py-16 text-zinc-900 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Projects
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              데이터 자격증, 개인 재무, Kaggle 대회 관련 프로젝트를 정리했습니다.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-zinc-50/80 shadow-sm ring-1 ring-zinc-200/80 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-blue-300 dark:bg-zinc-900/80 dark:ring-zinc-700 dark:hover:bg-zinc-900"
            >
              {/* 썸네일 placeholder */}
              <div className="h-24 w-full bg-gradient-to-r from-sky-500/70 via-blue-500/70 to-indigo-600/70 opacity-80 transition group-hover:opacity-100" />

              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="mb-3 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                  {project.description}
                </p>

                {/* 기술 스택 */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-700 transition group-hover:bg-blue-50 group-hover:text-blue-800 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-blue-950 dark:group-hover:text-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 결과 요약 */}
                <p className="mb-4 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {project.result}
                </p>

                {/* 링크 영역 */}
                <div className="mt-auto flex items-center justify-between pt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    GitHub
                    <span aria-hidden>↗</span>
                  </Link>
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1 font-medium text-zinc-600 transition hover:text-blue-700 dark:text-zinc-300 dark:hover:text-blue-200"
                  >
                    Demo
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


