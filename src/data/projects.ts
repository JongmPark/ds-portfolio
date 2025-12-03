export type Project = {
  title: string;
  description: string;
  techStack: string[];
  result: string;
  githubUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
  {
    title: "한국 데이터 자격증 트렌드 분석",
    description: "채용 공고에서 자주 요구되는 데이터 자격증 분석",
    techStack: ["Python", "pandas", "KoNLPy", "matplotlib"],
    result: "상위 자격증 5개 도출, 직군별 선호도 파악",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
  {
    title: "개인 재무/저축 최적화 대시보드",
    description: "Streamlit으로 만든 월별 저축 현황 분석 도구",
    techStack: ["Python", "Streamlit", "matplotlib", "Plotly"],
    result: "월별 저축율 시각화, 목표 달성도 추적",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
  {
    title: "Kaggle 타이타닉 생존자 예측",
    description: "XGBoost를 활용한 분류 모델 + 피처 엔지니어링",
    techStack: ["Python", "scikit-learn", "XGBoost", "pandas"],
    result: "AUC 0.85 달성, Feature Importance 분석",
    githubUrl: "https://github.com",
    demoUrl: "#",
  },
];

