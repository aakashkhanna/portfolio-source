/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aakash's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Aakash Khanna Portfolio",
    type: "website",
    url: "http://AakashKhanna.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Aakash Khanna",
  logo_name: "AakashKhanna",
  nickname: "aakashkh",
  subTitle:
    "A Real-Life problem solver who is inspired by how things work around us to build software patterns based on that.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/aakashkhanna/portfolio-source",
  githubProfile: "https://github.com/aakashkhanna",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/aakashkhanna",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/AakashKh/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:AakashKh13@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Have had the opportunity to develop several applications using patterns like Rest APIs, Console Applications, Kafka Consumers, Nuget packages and Python Fast APIs, Typer CLI Tools, Poetry scripts, and Wheel packages.",
        "⚡ Developed highly scalable and highly available Rest APIs using Dotnet Core 3.1 and Python FastAPI",
        "⚡ Extensive experience writing libraries and templates that help implement common functionality such as SFTP, Kafka, Logging, Metrics, and AWS S3.",
      ],
      softwareSkills: [
        {
          skillName: "DotNet Core 3.1",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "file-icons:c-script",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "akar-icons:python-fill",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Poetry CLI",
          fontAwesomeClassname: "simple-icons:poetry",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Nuget",
          fontAwesomeClassname: "file-icons:nuget",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Microservices and Containerization",
      fileName: "FullStackImg",
      skills: [
        "⚡ Responsible for development, documentation, enhancements, and maintenance of more than 25 microservice applications which acted as integration between various financial applications",
        "⚡ Enhanced Microservices by adding contextualized logging, metrics, alerts, and dashboards for reducing troubleshooting time with the help of tools like DataDog, Splunk, and Pagerduty.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Microservices",
          fontAwesomeClassname: "carbon:microservices-1",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos:kafka",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Technologies",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Developed cloud deployment strategy for AWS services such as AWS ECS, AWS EKS and AWS Lambda.",
        "⚡ Hosted and maintained APIs on containers along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Oracle Cloud",
          fontAwesomeClassname: "fontisto:oracle",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    {
      title: "Database",
      fileName: "DesignImg",
      skills: ["⚡ Database Highlights"],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "cib:mysql",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "logos:snowflake",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Flyway",
          fontAwesomeClassname: "simple-icons:flyway",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Masters of Computer Application - Software Engineering",
      subtitle:
        "University Institute of Information, Communication and Technology - Guru Gobind Singh Indraprastha University",
      logo_path: "usict.png",
      alt_name: "USICT, GGSIPU",
      duration: "2017 - 2020",
      descriptions: [],
      website_link: "http://www.ipu.ac.in/usict/",
    },
    {
      title: "Bachelors of Science (Hons.) - Computer Science ",
      subtitle:
        "Sri Guru Gobind Singh College of Commerce - University of Delhi",
      logo_path: "sggscc.png",
      alt_name: "USICT, GGSIPU",
      duration: "2014 - 2017",
      descriptions: [],
      website_link: "https://www.sggscc.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "- Amazon Web Services",
      logo_path: "solutions.png",
      certificate_link:
        "https://www.credly.com/badges/b0e67877-1275-4f98-8947-c05e82db3583/public_url",
      alt_name: "AWS Cloud Architecting",
      color_code: "#8C151599",
    },
    {
      title: "AWS Certified Developer – Associate",
      subtitle: "- Amazon Web Services",
      logo_path: "develop.png",
      certificate_link:
        "https://www.credly.com/badges/0bff83d2-e3c3-4a10-82fa-ec9781e4f2fb/public_url",
      alt_name: "AWS Cloud Architecting",
      color_code: "#8C151599",
    },
    {
      title: "AWS Cloud Architecting",
      subtitle: "- AWS Academy",
      logo_path: "architecting.png",
      certificate_link:
        "https://www.credly.com/badges/101a6854-9dce-4508-847c-45b9d66c3561/public_url",
      alt_name: "AWS Cloud Architecting",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "A Software Engineer with more than 2.5 years of experience developing software using .Net Core and Python. Expertise with Microservices, Docker, AWS Services, and Serverless architecture. Have had the opportunity to develop several applications using technologies such as .Net Core 3.1 APIs, Console Applications, Kafka Consumers, Nuget packages and Python Fast APIs, Typer CLI Tools, Poetry scripts, and Wheel packages",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Project Engineer",
          company: "Blackstone Center of Excellence – Wipro Limited",
          company_url: "https://www.blackstone.com/",
          logo_path: "wirp.jpg",
          duration: "June 2022 - Present",
          location: "Gurgaon, India",
          description:
            "Worked on the firm's effort to migrate Oracle from on-prem to cloud. Was Responsible for development, documentation, enhancements, and maintenance of more than 25 microservice applications which acted as integration between various financial applications. The cloud migration project aided in resetting how this system’s code base and deployment were managed. Migration to a cloud platform also allows utilization of new functions and features of the software on a more frequent basis as opposed to relying on big upgrades.",
          color: "#0879bf",
        },
        {
          title: "Project Engineer",
          company: "Blackstone Center of Excellence – Wipro Limited",
          company_url: "https://www.blackstone.com/",
          logo_path: "wirp.jpg",
          duration: "July 2020 - June 2022",
          location: "Gurgaon, India",
          description:
            "Worked on the firm's effort to migrate Oracle from on-prem to cloud. Was Responsible for development, documentation, enhancements, and maintenance of more than 25 microservice applications which acted as integration between various financial applications. The cloud migration project aided in resetting how this system’s code base and deployment were managed. Migration to a cloud platform also allows utilization of new functions and features of the software on a more frequent basis as opposed to relying on big upgrades.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Development Intern",
          company:
            "Blackstone Center of Excellence - Thoughtfocus Technologies",
          company_url: "https://www.blackstone.com/",
          logo_path: "tf.jpg",
          duration: "January 2020 - July 2020",
          location: "Gurgaon, India",
          description:
            "Designed the architecture and developed a set of foreign exchange rate microservices, which was the team’s first set of microservices. Contributed in creation of templates for .Net Core and Python applications using Cookie cutter tool, This template assisted in increasing developer efficiency and was used as boilerplate code for more than 120 microservices.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create containerized services and deploy them to using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "feelingProud.svg",
    description:
      "You can message me and I will reply within 24 hours. I can help you with Docker, .Net Core 3.1, FastAPI, Python, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "City",
    subtitle: "New Delhi - 110027",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/12iv4b7nrDxyK6sr6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91-9958056678",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
