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
  "MLOPS Enthusiast",
  "Gen AI Engineer"
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
      "Processed images with OpenCV and deployed a YOLOv8 model for real-time gourd detection, achieving mAP50 of 0.87-0.99 and mAP50-95 of 0.73-0.94.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Roboflow"],
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&crop=center",
    github: `https://www.kaggle.com/code/soban1103/notebook12a19e10d1`,
    demo: "https://drive.google.com/file/d/158bk52Gu4TLKu3mJsxNr67QtwLZ8us0s/view?usp=drive_link",
    impact: "95% accuracy in real-time detection",
    gradient: "from-green-400 to-blue-500",
  },
  {
    title: "Power-CO Churn Analysis",
    category: "Machine Learning",
    description:
      "Cleaned customer data and ovesampled the dataset using SMOTE, developed a Random Forest Classifier for churn prediction achieving 95% accuracy with hyperparameter tuning and feature engineering.",
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
      "Cleaned and transformed loan data using Python, visualized key patterns and created interactive dashboards with Power BI, and built SVM and Logistic Regression Models achieving 86.7% accuracy in default prediction.",
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
    title: "Automated Tracksheet Generation For Integrity Solutions",
    category: "Automation - Freelance",
    description:
      "Developed an automated tracksheet generation tool using Python and Streamlit, streamlining data entry and reporting processes, saving 20 hours of manual work monthly.",
    tech: ["Python", "Streamlit", "Pandas", "Ms-Excel"],
    image:
      "/automation.jpeg",
    github: `${CONTACT_INFO.github}/Automate_Tracksheet`,
    demo: "https://automatetracksheet-soban.streamlit.app/",
    impact: "Real-time processing on mobile devices",
    gradient: "from-orange-400 to-pink-500",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Data Scientist",
    company: "Hitech Digital Solutions",
    period: "September 2025 - Present",
    location: "Ahmedabad (Onsite)",
    description:
      "Architecting scalable multi-modal AI pipelines, vision-language systems, and automated document intelligence workflows for high-volume enterprise production environments.",
    achievements: [
      "Eris: Developed an end-to-end, scalable data extraction pipeline to process 1 million historical telephone directory images (≈ 2 TB) using PaddleOCR and regex-based text classification, achieving 85% field-level accuracy.",
      "Autopix: Automated ghost mannequin image editing by leveraging Gemini prompt engineering, background removal, and batch processing pipelines, reducing manual image editing effort by 80%.",
      "Orderbot: Developed an end-to-end cabinet detection and cost estimation pipeline for architectural drawings using a custom-trained YOLOv8 model and Qwen vision-language model, reducing false positives by 82% while achieving 98.52% recall and 98.77% precision.",
    ],
    technologies: [
      "Python",
      "PaddleOCR",
      "Gemini API",
      "YOLOv8",
      "Qwen VLM",
      "Computer Vision",
      "Regex",
      "Batch Processing",
      "AWS",
    ],
    companyLogo: "🏢",
    current: true,
    roleType: "Full-Time",
  },
  {
    title: "Data Analyst Intern",
    company: "Medkart Pharmacy",
    period: "January 2025 - July 2025",
    location: "Ahmedabad (Onsite)",
    description:
      "Spearheaded data-driven initiatives that revolutionized operational efficiency and cost optimization through advanced analytics and automation.",
    achievements: [
      "Migrated the Redshift data warehouse to AWS S3 by creating a robust ETL pipeline with fault tolerance, saving up to 1.5 GB in computational memory.",
      "Revamped Power BI dashboards to Apache Superset, saving Rs 3-4 Lakhs per annum in reporting expenses.",
      "Enabled AWS Athena based querying for faster data retrieval and analysis, reducing query response times significantly.",
      "Collaborated with cross-functional teams to deliver transformed data via reports and Excel files, reducing manual effort by 70–80%.",
    ],
    technologies: ["Python", "PostgreSQL", "AWS S3", "AWS Athena", "Apache Superset", "Polars", "Redis Cache", "Git/Github"],
    companyLogo: "🏥",
    roleType: "Internship",
  },
  {
    title: "AI Intern",
    company: "BMV System Integrations",
    period: "May 2024 - July 2024",
    location: "Ahmedabad (Onsite)",
    description:
      "Developed cutting-edge AI solutions and Deep Learning models for real-time data processing and predictive analytics.",
    achievements: [
      "Performed EDA and conducted an Augmented Dickey-Fuller test to check for seasonality in glucose level data.",
      "Built time-series forecasting models including ARMA, ARIMA, and a CNN-based deep learning model to predict glucose levels in Type 2 diabetic patients.",
      "Implemented a deep learning model with a combination of Bidirectional LSTM and Convolutional Layers to forecast glucose levels with 63.65 RMSE.",
      "Deployed model prototypes with Streamlit for real-time inference and managed experiments with DVC.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Time-Series Forecasting", "Deep Learning", "Streamlit", "DVC"],
    companyLogo: "🔧",
    roleType: "Internship",
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

export const RESUME_CONSTANS = {
  // FILE_ID: "13TZV8_A0XpYt3u3z-tbo0WOhTUH1iejt"
  FILE_ID: "1YpJZ-6mAYyY9fWL22__XviVsKC8uaWxC"
};