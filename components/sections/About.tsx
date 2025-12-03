const timeline = [
  {
    period: "2025.11",
    title: "Google Data Analytics Certificate 수료",
    description: "데이터 분석 프로세스 전반(문제정의-수집-정제-분석-공유)을 체계적으로 학습",
  },
  {
    period: "2025.10",
    title: "첫 Kaggle EDA 프로젝트 완성",
    description: "금융 데이터셋을 활용한 탐색적 데이터 분석 및 인사이트 도출",
  },
  {
    period: "2025.09",
    title: "Python/pandas/SQL 기초 마스터",
    description: "데이터 전처리, 조인, 집계, 윈도우 함수 등 분석에 필요한 핵심 문법 정리",
  },
  {
    period: "2025.08",
    title: "데이터 자격증 트렌드 분석 프로젝트",
    description: "공공 데이터를 활용해 연도별/직군별 데이터 자격증 수요 변화 시각화",
  },
  {
    period: "2025.07",
    title: "matplotlib/seaborn 시각화 학습",
    description: "기본 차트부터 통계적 시각화까지 다양한 그래프 패턴 실습",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="border-b border-zinc-200 bg-white/80 px-4 py-16 text-zinc-900 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-start">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <div className="relative h-36 w-36 overflow-hidden rounded-3xl bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 shadow-lg ring-2 ring-blue-200 dark:ring-blue-500/50">
              <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-wide text-white/85">
                Profile
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                데이터 사이언스로 커리어를 전환 중입니다
              </h2>
              <p className="whitespace-pre-line text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
                공군 기술개발관리 경험을 바탕으로 데이터 사이언스 분야로 전환 중입니다.

                ADsP/SQLD 자격증 준비 + Kaggle 실전 프로젝트 3개 완성.

                금융/저축 데이터 분석에 특별히 관심 있습니다.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Timeline
            </h3>
            <ol className="space-y-4 border-l border-zinc-200 pl-4 dark:border-zinc-700 sm:pl-6">
              {timeline.map((item) => (
                <li key={item.period} className="relative">
                  <div className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full border border-blue-500 bg-blue-500/90 shadow-sm dark:border-blue-300 dark:bg-blue-300" />
                  <div className="rounded-xl bg-zinc-50/80 p-3 shadow-sm ring-1 ring-zinc-200/70 transition hover:-translate-y-1 hover:bg-white hover:shadow-md dark:bg-zinc-900/80 dark:ring-zinc-700 dark:hover:bg-zinc-900">
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-300">
                      {item.period}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


