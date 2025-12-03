import { skillsByCategory } from "@/src/data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-b border-zinc-200 bg-zinc-50/70 px-4 py-16 text-zinc-900 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Skills
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              데이터사이언스 실무를 위해 다뤄본 언어, 라이브러리, 도구들을
              카테고리별로 정리했습니다.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillsByCategory.map((category) => (
            <div
              key={category.name}
              className="group rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-zinc-200/80 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:ring-blue-300 dark:bg-zinc-900/80 dark:ring-zinc-700 dark:hover:bg-zinc-900"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {category.name}
                </h3>
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 group-hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 dark:group-hover:bg-blue-900">
                  {category.level}
                </span>
              </div>
              <p className="mb-3 text-xs text-zinc-600 dark:text-zinc-400">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-800 transition group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:group-hover:border-blue-500/60 dark:group-hover:bg-blue-950 dark:group-hover:text-blue-100"
                  >
                    <span
                      className={
                        skill.emphasis ? "font-semibold" : "font-normal"
                      }
                    >
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


