import Link from "next/link";

const timeline = [
  {
    period: "2025.11",
    title: "Google Data Analytics Certificate 수료",
  },
  {
    period: "2025.10",
    title: "첫 Kaggle EDA 프로젝트 완성",
  },
  {
    period: "2025.09",
    title: "Python/pandas/SQL 기초 마스터",
  },
  {
    period: "2025.08",
    title: "데이터 자격증 트렌드 분석 프로젝트",
  },
  {
    period: "2025.07",
    title: "matplotlib/seaborn 시각화 학습",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-10 px-4 pt-20 pb-6 text-left sm:px-6 md:flex-row md:items-start md:gap-16 lg:px-8">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-100">
            Data Science Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span>데이터사이언스</span>
            <span className="block whitespace-nowrap sm:inline-block">
              {" "}
              박종민
            </span>
          </h1>
          <p className="max-w-xl text-base text-blue-50 sm:text-lg">
            공군 기술개발관리 경험을 바탕으로 데이터 사이언스 분야로 전환 중인
            주니어 데이터사이언티스트입니다. 금융/저축 데이터를 중심으로
            분석·모델링하며, 실험 가능한 코드와 재현 가능한 파이프라인을
            지향합니다.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-md transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg"
            >
              프로젝트 바로가기
            </Link>
          </div>
        </div>

        {/* Timeline moved from About */}
        <div className="mt-4 flex flex-1 justify-center md:mt-0">
          <div className="w-full max-w-md rounded-3xl bg-white/10 p-4 shadow-2xl ring-1 ring-white/30 backdrop-blur">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
              Recent Journey
            </h2>
            <ol className="space-y-4 border-l border-blue-200/70 pl-4">
              {timeline.map((item) => (
                <li key={item.period} className="relative">
                  <div className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full border border-blue-200 bg-blue-400 shadow-sm" />
                  <div className="rounded-xl bg-white/5 p-3 text-left shadow-sm ring-1 ring-white/10">
                    <p className="text-xs font-semibold text-blue-100">
                      {item.period}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.title}
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

export default Hero;


