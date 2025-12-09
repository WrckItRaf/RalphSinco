/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ralph Sinco",
  title: "Hi all, I'm Ralph",
  subTitle: emoji(
    "I am a qualified and professional web developer 🚀 with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail."
  ),
  resumeLink:
    "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/WrckItRaf",
  linkedin: "https://www.linkedin.com/in/rafael-renz-sinco-409b732a9//",
  gmail: "rsinco20@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/rafaelrenz.sinco/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
    //  {
    //   skillName: "n8n",
    //   fontAwesomeClassname: "fab fa-n8n"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Access Computer College",
      logo: require("./assets/images/accesslogo.c124974dd8e89cef9074.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2013 - 2017",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Quirino High School",
      logo: require("./assets/images/download (2).jpg"),
      // subHeader: "Bachelor of Science in Computer Science",
      duration: "2005 - 2010",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Balibago Waterworks System Inc.",
      companylogo: require("./assets/images/image 2.png"),
      date: "2024 – Present",
      desc: "Develop and maintain software applications used by the company.",
      descBullets: [
        "Create tools and features to improve internal workflows and system efficiency.",
        "Collaborate with team members to design, test, and deploy new system functionalities."
      ]
    },
    {
      role: "Junior / Senior ICT Developer",
      company: "University of the Philippines",
      companylogo: require("./assets/images/up.2cbb64656e4d63355158.png"),
      date: "2021 – 2024",
      desc: "Develop a centralized holistic online database for the College of Science.",
      descBullets: [
        "Develop a data mining program to obtain subsets of the centralized online database for the CS.",
        "Provides technical support in the development of analysis tools/systems."
      ]
    },
    {
      role: "IT Officer",
      company: "LEARN UP",
      companylogo: require("./assets/images/download.png"),
      date: "2019 – 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Maintenance and Integration in all company website.",
        "Troubleshooting and solving computer software/hardware faults.",
        "Installing and configuring computer hardware, software and networks."
      ]
    },
    {
      role: "Technical Support Specialist",
      company: "Lyceum of the Philippines",
      companylogo: require("./assets/images/lpulogo.472c8dcdfd3066238156.png"),
      date: "2017-2019",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Primary responsibility is to provide student support and customer service.",
        "Be present, visible, and available to students requiring technical assistance.",
        "Installing and configuring computer hardware, software and networks."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR WEB APPLICATION WEBSITES",
  projects: [
    {
      image: require("./assets/images/CS Logo 2022.png"),
      projectName: "CS ONLINE ACCESS PORTAL",
      projectDesc: "Below are the Projects I worked under the University of the Philippines College of Science",
      footerLink: [
        {
          name: "Online Science Portal",
          url: "https://online.science.upd.edu.ph/CSCentralizedPortal/index.php"
        },
        {
          name: "Limited Access Module",
          url: "https://www.canva.com/design/DAF7oYSZRkk/xk2v9EsvSHlOyRf7gTq6Iw/view?utm_content=DAF7oYSZRkk&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
          name: "ODP Module",
          url: ""
        },
        {
          name: "Faculty Academic Prodile Module",
          url: ""
        },
        {
          name: "Procurement Information Module",
          url: ""
        },
        {
          name: "Graduate Student Module",
          url: ""
        },
        {
          name: "Pursuit",
          url: ""
        },
        {
          name: "MOU/MOA",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/download.png"),
      projectName: "AHEAD Review & Tutorial Center",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Ahead Tutorial & Review",
          url: "https://www.ahead.edu.ph/"
        },
        {
          name: "Ahead Pro",
          url: "https://www.pro.ahead.edu.ph/"
        },
        {
          name: "Ahead Junior",
          url: "https://www.junior.ahead.edu.ph/"
        },
        {
          name: "Ahead Alpha",
          url: "https://www.alpha.ahead.edu.ph/"
        },
        {
          name: "Ahead Online",
          url: "https://www.online.ahead.edu.ph/"
        }
      ]
    },
    {
      image: require("./assets/images/image 2.png"),
      projectName: "Balibago Waterworks",
      projectDesc: "Below are the Projects I worked under the Balibago waterworks System Inc. (BWSI)",
      footerLink: [
        {
          name: "Performance Evaluation v2",
          url: "#"
        },
        {
          name: "Revenue Center Information System (RCIS)",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MTA: Security Fundamental - Certified 2019",
      subtitle:
        "Earners of the MTA: Security Fundamentals certification have demonstrated fundamental security knowledge and skills. The MTA program provides an appropriate entry point to a future career in technology.",
      image: require("./assets/images/MTA-Security-Fundamentals-2019.4afd2e2a77a5c1006885.png"),
      imageAlt: "MTA 2019",
      footerLink: [
        {
          name: "Credly Certification",
          url: "https://www.credly.com/badges/2c25c097-4def-47f4-9a4c-b12352acb0fb/public_url"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Course belt - Wordpress and Marketing Course - 2020",
      subtitle:
        "Wordpress and Marketing Course Seminar attended year 2020.",
      image: require("./assets/images/wordpress.51915fb37b9e76913fc4.webp"),
      imageAlt: "Course belt wordpress 2020",
      footerLink: [
        {
          name: "Wordpress & Marketing Course",
          url: "https://drive.google.com/file/d/1Z45WWYBA_JyYym6dEiPrPutghKz7XWXh/view"
        }
      ]
    },
    {
      title: "STEP UP: Computer System Servicing - Nov 2023",
      subtitle: "Rendered 40 hours of training in Skills Trainings and Enhancement Program for UP Diliman Employees (STEP UP) on Computer Systems Servicing",
      image: require("./assets/images/HRDO l&d logo_2023.66cf241ba2d998ad7d27.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "STEP UP: Computer System Servicing", url: "https://drive.google.com/file/d/12G4wVphpwjJt23GMVb98zNEGXy-KXAPP/view"},
        {
          name: "UPHRDO: SWOT Analysis Workshop",
          url: "https://drive.google.com/file/d/1pxpCJ8dTABkA5Ui-x9YTb1ZmD1kqAHj1/view"
        },
        {
          name: "UPHRDO: Security and Privacy of Personal Information",
          url: "https://drive.google.com/file/d/1x_vsKs90lnK0HwNh-a0m8RzxYP8LxvXU/view"
        },
        {
          name: "UPHRDO: Introduction to Workplace Safety and Health",
          url: "https://drive.google.com/file/d/110E97ALNa9ShADjU-HiZNgntNycU3o9h/view"
        },
        {
          name: "UPHRDO: The UPPO Certification Program",
          url: "https://drive.google.com/file/d/1e_l7fWkUhb6wA5ZTZR2vU0ynu05xR8se/view"
        }
      ]
    },
    {
      title: "SOFTCON 2025",
      subtitle: "Agentic Ignition: Powering the future of software",
      image: require("./assets/images/SOFTCON-Logo.png"),
      imageAlt: "Softcon Logo",
      footerLink: [
        {name: "Certificate of Attendance", url: "https://drive.google.com/file/d/1OqdMigyOQJ7QZb6r7vc977XV3BhWWRtG/view?usp=sharing"}
      ]
    },
    {
      title: "UDEMY",
      subtitle: "AI Automation: Build LLM Apps & AI-agents with n8n & API's",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {name: "Certificate of Completion", url: "https://www.udemy.com/certificate/UC-0181ae23-b180-46d3-a8c8-58eb6307b94d/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "rsinco20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
