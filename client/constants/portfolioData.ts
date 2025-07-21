import { ContactInfo, Skill, Project, Experience, Certification } from '../types/portfolio';
// import the image from the public folder



export const CONTACT_INFO: ContactInfo = {
  email: "soban1103@gmail.com",
  phone: "+917016710790",
  linkedin: "https://linkedin.com/in/soban1103",
  github: "https://github.com/Mohammad-Soban",
};

export const ROLES = [
  "Data Scientist",
  "Data Analyst",
  "AI Engineer",
  "ML Engineer",
  "Backend Developer",
  "MLOPS Enthusiast",
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 95, category: "core", icon: "🐍" },
  { name: "Data Science", level: 92, category: "core", icon: "📊" },
  { name: "Data Analysis", level: 90, category: "core", icon: "📈" },
  { name: "Machine Learning", level: 90, category: "core", icon: "🤖" },
  { name: "Deep Learning", level: 85, category: "core", icon: "🧠" },
  { name: "Pandas", level: 95, category: "library", icon: "🐼" },
  { name: "Scikit-learn", level: 90, category: "library", icon: "🔬" },
  { name: "TensorFlow", level: 85, category: "library", icon: "⚡" },
  { name: "OpenCV", level: 85, category: "library", icon: "👁️" },
  { name: "Polars & Pyspark", level: 80, category: "library", icon: "🐻" },
  { name: "Power BI", level: 88, category: "tool", icon: "📈" },
  { name: "AWS", level: 75, category: "tool", icon: "☁️" },
  { name: "Apache Superset", level: 82, category: "tool", icon: "📊" },
  { name: "DVC", level: 78, category: "tool", icon: "📦" },
  { name: "GitHub", level: 90, category: "tool", icon: "🐙" },
];

export const PROJECTS: Project[] = [
  {
    title: "Gourd Detection using YOLOv8",
    category: "Computer Vision",
    description:
      "Advanced object detection system for agricultural automation using state-of-the-art YOLOv8 architecture with real-time inference capabilities.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "CUDA"],
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&crop=center",
    github: `https://www.kaggle.com/code/soban1103/notebook12a19e10d1`,
    demo: "#",
    impact: "95% accuracy in real-time detection",
    gradient: "from-green-400 to-blue-500",
  },
  {
    title: "Power-CO Churn Analysis",
    category: "Machine Learning",
    description:
      "Predictive modeling system for customer churn using advanced Random Forest Classifier with comprehensive feature engineering and hyperparameter tuning.",
    tech: ["Python", "Random Forest", "Scikit-Learn", "Pandas", "Numpy"],
    image: '/churn_prediction.jpeg',
    github: `${CONTACT_INFO.github}/Power_Co_Analysis`,
    demo: "#",
    impact: "Accurate churn prediction",
    gradient: "from-pink-400 to-red-500",
  },
  {
    title: "Loan Default Prediction",
    category: "Data Science",
    description:
      "Comprehensive ML pipeline with interactive dashboards for financial risk assessment and loan default prediction using ensemble methods.",
    tech: [
      "Python",
      "Scikit-learn",
      "Power BI",
      "SVM",
      "Feature Engineering",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    github: `${CONTACT_INFO.github}/Fintech_loan_repayment`,
    demo: "#",
    impact: "Reduced risk assessment time by 75%",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    title: "Neural Style Transfer App",
    category: "Deep Learning",
    description:
      "Real-time artistic style transfer application using convolutional neural networks with optimized mobile deployment.",
    tech: ["TensorFlow", "Python", "React", "WebGL", "Mobile Optimization"],
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&crop=center",
    github: `${CONTACT_INFO.github}/neural-style-transfer`,
    demo: "#",
    impact: "Real-time processing on mobile devices",
    gradient: "from-orange-400 to-pink-500",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Data Analyst Intern",
    company: "Medkart Pharmacy",
    period: "January 2025 - July 2025",
    location: "Ahmedabad (Onsite)",
    description:
      "Spearheaded data-driven initiatives that revolutionized operational efficiency and cost optimization through advanced analytics and automation.",
    achievements: [
      "Migrated the Redshift data warehouse to AWS S3 by creating a robust ETL pipeline with fault tolerance.",
      "Revamped the Business Intelligence from Power BI To Apache Superset for enhanced data visualization.",
      "Enabled AWS Athena based querying for faster data retrieval and analysis reducing query time by 50%.",
      "Reduced the data processing time by 30% through optimized SQL queries and indexing and saved 3-4 LPA annually by using AWS S3 and Apahche Superset."
    ],
    technologies: ["Python", "PostgreSQL", "S3 & Athena", "Apache Superset", "Redis Cache", "Polars", "Git/Github"],
    companyLogo: "🏥",
  },
  {
    title: "AI Intern",
    company: "BMV System Integrations",
    period: "May 2024 - July 2024",
    location: "Ahmedabad (Onsite)",
    description:
      "Developed cutting-edge AI solutions and Deep Learning models for real-time data processing and predictive analytics.",
    achievements: [
      "Worked on Time-Series forecasting models achieving 85% accuracy",
      "Developed a Glucose Level Prediction model using Bi-Directional LSTM and CNN Layers",
      "Deployed the model as a streamlit app for real-time glucose level prediction",
      "Designed and implemented a comprehensive data pipeline for model training and evaluation using DVC",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Time-Series Forecasting", "Deep Learning", "Streamlit", "DVC"],
    companyLogo: "🔧",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    year: "2023",
    credentialId: "DS-2023-IBM-001",
    skills: ["Data Science", "Machine Learning", "Python"],
    logo: "🎓",
  },
  {
    name: "BCG Data Science & Analytics",
    issuer: "Boston Consulting Group",
    year: "2024",
    credentialId: "BCG-DS-2023",
    skills: ["Business Analytics", "Strategic Consulting"],
    logo: "🏆",
  },
  {
    name: "Git And Github for Developers",
    issuer: "Geeks For Geeks",
    year: "2023",
    credentialId: "",
    skills: ["Git", "Github"],
    logo: "🎯",
  },
  {
    name: "Introducing Gen-AI With AWS",
    issuer: "Udacity",
    year: "2025",
    credentialId: "AWS-ML-2023",
    skills: ["Cloud ML", "SageMaker", "MLOps"],
    logo: "☁️",
  },
];

export const ANIMATION_DELAYS = {
  ROLE_CYCLE: 2000,
  STAGGER: 200,
  CARD: 300,
};
