import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    tableau,
    bell,
    bsg,
    excel,
    python,
    gcp,
    sql,
    guelph,
    gpt,
    epl,
    olympicproject,
    ai_usage,
    connectfour,
    ecommerce
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact Me",
    },
    {
      id: "resume",
      title: "Resume",
      resumes:[
        {
          title: "Data Science Resume", href: "/src/assets/Akeem_Bello_Resume.pdf"
        },
        {
          title: "Software Engineering Resume", href: "/src/assets/Resume_AkeemBello.pdf"
        }
      ]
    }
  ];
  
  const services = [
    {
      title: "Data Engineer / Analyst",
      icon: web,
    },
    {
      title: "Front-End Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "GCP",
      icon: gcp,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Tableau",
      icon: tableau,
    }
  ];
  
  const experiences = [
    {
      title: "Production Engineer",
      company_name: "BSG",
      icon: bsg,
      iconBg: "#383E56",
      date: "Jul 2020 - Aug 2022",
      points: [
        "Pioneered quality assurance initiatives in production processes, implementing industrial solutions that reduced defects by 25" + "%" + " and substantially improved overall product quality.",
        "Led a cross-functional team to drive a 40% increase in production during the Covid-19 pandemic, effectively addressing supply chain disruptions and ensuring continuous operation",
        "Optimized inventory management through the implementation of Microsoft Dynamics AX, enhancing inventory tracking accuracy by 30% and minimizing stock discrepancies",
      ],
    },
    {
      title: "GIS and Data Software Specialist",
      company_name: "University of Guelph - Geomatics Department",
      icon: guelph,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Jul 2022",
      points: [
        "Collaborated with the team to build a web-based statistical modeling tool using ASP.NET, improving user interaction with predictive models and enhancing workflow automation for environmental project insights.",
        "Developed a Java-based interface for statistical models, streamlining trend forecasting processes, allowing users to interact with large datasets for real-time analysis.",
        "Devised statistical modeling approaches using Python for trend forecasting, delivering actionable insights that mitigated risk and aligned strategic planning with current environmental demands, positively impacting 3 major projects.",
        "Spearheaded the development of interactive Tableau dashboards and in-depth Excel analytics, enhancing data-driven decision-making for environmental projects and increasing project efficiency by 15%.",
      ],
    },
    {
      title: "AI and Data Engineer",
      company_name: "Bell Canada",
      icon: bell,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2024",
      points: [
        "Spearheaded the development of a real-time AI usage visualization dashboard in MicroStrategy, designing and implementing data pipelines from GCP to MicroStrategy, resulting in a 30% increase in decision-making speed and delivering actionable insights to over 200 stakeholders",
        "Developed and integrated machine learning models into real-time data pipelines, improving prediction accuracy by 20%, and implemented in production to support 5 key business operations",
        "Designed and implemented a scalable star schema data structure, optimizing SQL query performance by 30% and enabling the system to handle a 50% growth in data metrics.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Real-Time AI Tool Usage Visualization",
      description:
        "Developed a real-time visualization dashboard to analyze company-wide AI tool usage, leveraging Python, Google Cloud Platform (GCP), BigQuery, Dataflow, MicroStrategy, and SQL. Increased decision-making speed by 30% through instant insights provided to over 200 stakeholders. Engineered and optimized a data pipeline using BigQuery and Dataflow, reducing data processing latency by 40% and enabling real-time processing of over 1 million data points daily. Ensured data security and compliance by implementing encryption and access controls, achieving a 100% compliance rate with company policies.",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "GCP",
          color: "green-text-gradient",
        },
        {
          name: "Data Visualization",
          color: "pink-text-gradient",
        },
      ],
      image: ai_usage,
      source_code_link: "https://github.com/hakeem-cmd",
    },
    {
      name: "Comprehensive Azure-Based Data Pipeline for Olympic Data",
      description:
        "Developed a scalable data pipeline to process over 10GB of Olympic data, utilizing Azure Data Factory and Azure Databricks. Reduced data processing time by 45% and improved data accuracy by 30%. Leveraged Synapse Analytics and SQL to perform in-depth data analysis, uncovering key performance trends and delivering insightful reports on top Olympic athletes. Designed the pipeline to handle large-scale data efficiently, supporting comprehensive sports analytics.",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "Azure Databricks",
          color: "green-text-gradient",
        },
        {
          name: "Data Pipeline",
          color: "pink-text-gradient",
        },
      ],
      image: olympicproject,
      source_code_link: "https://github.com/hakeem-cmd",
    },
    {
      name: "Predictive Modeling for EPL Match Outcomes Using Machine Learning",
      description:
        "Built a predictive model to analyze English Premier League (EPL) match outcomes, using Random Forest and Logistic Regression algorithms with Pandas and Scikit-learn. Achieved a precision score of 67.5% by identifying key predictors such as venue and rolling averages. Enhanced model accuracy by 20% through advanced feature engineering, including the creation of new variables and iterative refinement, delivering actionable insights into match outcomes and team performance.",
      tags: [
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Scikit-Learn",
          color: "pink-text-gradient",
        },
      ],
      image: epl,
      source_code_link: "https://github.com/hakeem-cmd",
    },
    {
      name: "Full Stack E-commerce Platform (Server-Side Rendering, Responsive Design)",
      description:
        "Built a responsive e-commerce platform using Next.js for server-side rendering, reducing page load times by 25% and enhancing user experience. Styled the platform with Tailwind.css, optimizing for both mobile and desktop to achieve 100% responsiveness across 15+ devices and browsers. Integrated Prism for syntax highlighting, enabling seamless display of 500+ code snippets, and leveraged Node.js for scalable backend services to ensure reliable performance.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/hakeem-cmd",
    },
    {
      name: "AI Chat Application with GPT-3 (Natural Language Processing, Back-end Development)",
      description:
        "Developed a full-stack AI-powered chat application using OpenAI’s GPT-3 API, enabling real-time interactions with sophisticated language models. Implemented the backend with Node.js and Express, integrating with the OpenAI API for seamless communication and response generation. Utilized React.js to create a responsive front-end UI, delivering a dynamic user experience, and deployed the application on Vercel for scalable performance.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "Open AI API",
          color: "pink-text-gradient",
        },
      ],
      image: gpt,
      source_code_link: "https://github.com/hakeem-cmd",
    },
    {
      name: "Connect Four Game (Object-Oriented Programming, UI Design)",
      description:
        "Engineered a Connect Four game in Java, applying object-oriented principles such as encapsulation and inheritance to manage 100+ game instances efficiently. Wrote 50+ unit tests with JUnit to ensure code reliability and consistency, achieving 95% code coverage. Utilized Gradle and Git for continuous integration, streamlining development workflows and reducing deployment time by 20%.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "Junit",
          color: "green-text-gradient",
        },
        {
          name: "gradle",
          color: "pink-text-gradient",
        },
      ],
      image: connectfour,
      source_code_link: "https://github.com/hakeem-cmd",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };