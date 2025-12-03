export type SkillItem = {
  name: string;
  emphasis?: boolean;
};

export type SkillCategory = {
  name: string;
  level: "Junior" | "Intermediate" | "Advanced";
  description: string;
  skills: SkillItem[];
};

export const skillsByCategory: SkillCategory[] = [
  {
    name: "Programming",
    level: "Intermediate",
    description:
      "데이터 분석과 모델링에 필요한 전처리, ETL, 간단한 백엔드 개발까지 경험이 있습니다.",
    skills: [
      { name: "Python", emphasis: true },
      { name: "SQL", emphasis: true },
      { name: "R" },
      { name: "Git", emphasis: true },
      { name: "Linux" },
      { name: "JavaScript/TypeScript" },
    ],
  },
  {
    name: "Data / ML",
    level: "Intermediate",
    description:
      "지도·비지도 학습 모델링, 피처 엔지니어링, 모델 평가 및 하이퍼파라미터 튜닝 경험이 있습니다.",
    skills: [
      { name: "Pandas", emphasis: true },
      { name: "NumPy" },
      { name: "scikit-learn", emphasis: true },
      { name: "XGBoost" },
      { name: "LightGBM" },
      { name: "PyTorch" },
      { name: "Statsmodels" },
    ],
  },
  {
    name: "Visualization",
    level: "Intermediate",
    description:
      "데이터 스토리텔링과 의사결정을 돕는 시각화 및 대시보드 제작 경험이 있습니다.",
    skills: [
      { name: "Matplotlib" },
      { name: "Seaborn", emphasis: true },
      { name: "Plotly" },
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Looker Studio" },
    ],
  },
  {
    name: "Cloud / Tools",
    level: "Junior",
    description:
      "클라우드 환경에서 데이터 파이프라인과 모델 서빙을 위한 기본 인프라를 다뤄본 경험이 있습니다.",
    skills: [
      { name: "AWS (S3, EC2, Lambda)" },
      { name: "GCP (BigQuery, Cloud Run)" },
      { name: "Docker", emphasis: true },
      { name: "Airflow" },
      { name: "MLflow" },
      { name: "GitHub Actions" },
    ],
  },
];


