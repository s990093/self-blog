import { Project, ProjType } from "@/app/interface/base";

export const selfprojects: Project[] = [
  {
    name: "Personal Blog",
    projTypes: [ProjType.Web],
    githubUrl: "https://github.com/s990093/self-blog",
    shortDescription:
      "A personal blog developed using Next.js, Django, Docker, and Nginx.",
    projectImages: ["/test/self/proj/personal-blog.png"],
    startTime: new Date("2024-09-07"),
    inProgress: true,
    technologiesUsed: [
      {
        name: "Next.js",
        icon: "nextjs",
        description:
          "React framework for building server-rendered applications",
      },
      {
        name: "Django",
        icon: "django",
        description: "Python web framework for building robust backend systems",
      },
      {
        name: "Docker",
        icon: "docker",
        description:
          "Platform for containerizing applications and their dependencies",
      },
      {
        name: "Nginx",
        icon: "nginx",
        description:
          "Web server and reverse proxy for managing and serving web applications",
      },
    ],
    time: "2024",
  },
  {
    name: "Student Task Manager",
    projTypes: [ProjType.Web],
    githubUrl: "https://github.com/s990093/todolist",
    shortDescription:
      "A to-do list application specifically designed for students. It uses AI to automatically classify tasks based on their content using BERT technology, and is built with Django and Next.js for a modern, full-stack approach.",
    projectImages: ["/test/self/proj/todolist.png"],
    technologiesUsed: [
      {
        name: "Django",
        icon: "django",
      },
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "BERT",
        icon: "BERT",
      },
    ],
    time: "2 months", // Replace with actual time spent
  },
  {
    name: "Tea Leaf Water Conservation System",
    projTypes: [ProjType.System],
    projectImages: ["/test/self/proj/tea-water-con.png"], // Replace with actual image paths
    githubUrl: "https://github.com/s990093/MAKERTHON-2023",
    shortDescription:
      "A system designed to optimize water usage in tea leaf cultivation by monitoring and controlling irrigation efficiently.",
    technologiesUsed: [
      {
        name: "SwiftUi",
        icon: "swiftui", // Replace with actual icon path
      },
      {
        name: "IoT Sensors",
        icon: "iot", // Replace with actual icon path
      },
      {
        name: "Webscoket",
        icon: "websocket", // Replace with actual icon path
      },
      {
        name: "Django",
        icon: "django", // Replace with actual icon path
      },
    ],
    time: "3 months", // Replace with actual time spent
  },
  {
    name: "Wind Power Educational Kit",
    projTypes: [ProjType.System],
    githubUrl: "https://github.com/s990093/MAKERTHON_2024",
    projectImages: ["/test/self/proj/wind-power-edu.png"], // Replace with actual image paths
    shortDescription:
      "An educational kit for teaching wind power concepts. It includes interactive components for demonstrating wind energy principles.",
    technologiesUsed: [
      {
        name: "Arduino",
        icon: "arduino", // Replace with actual icon path
      },
      {
        name: "Webscoket",
        icon: "websocket", // Replace with actual icon path
      },
      {
        name: "Next.js",
        icon: "nextjs",
        description:
          "React framework for building server-rendered applications",
      },
    ],
    time: "2 months", // Replace with actual time spent
  },
  {
    name: "Low Power Node for Mountain Climbing",
    projTypes: [ProjType.System, ProjType.Mobile],
    projectImages: ["/test/self/proj/low-power-mountain.png"], // Replace with actual image paths
    shortDescription:
      "A low power consumption node system designed for tracking and communication in mountain climbing scenarios.",
    technologiesUsed: [
      {
        name: "Arduino",
        icon: "arduino", // Replace with actual icon path
      },
      {
        name: "Webscoket",
        icon: "websocket", // Replace with actual icon path
      },
      {
        name: "GPS Modules",
        icon: "loRa", // Replace with actual icon path
      },
      {
        name: "Next.js",
        icon: "nextjs",
        description:
          "React framework for building server-rendered applications",
      },
    ],
    time: "4 months", // Replace with actual time spent
  },
  {
    name: "Psychological Testing App with Robot Integration",
    projTypes: [ProjType.System, ProjType.Mobile, ProjType.Embedded],
    projectImages: [
      "/test/self/proj/psychological-robot.png",
      "/test/self/proj/psychological-robot-2.png",
    ], // Replace with actual image paths
    shortDescription:
      "An Android app for psychological testing that interacts with a robot to assess individual psychological conditions, providing initial evaluations for doctors.",
    technologiesUsed: [
      {
        name: "Java",
        icon: "java", // Replace with actual icon path
      },
      {
        name: "HTML",
        icon: "html", // Replace with actual icon path
      },
      {
        name: "CSS",
        icon: "css", // Replace with actual icon path
      },
    ],
    time: "5 months", // Replace with actual time spent
  },
  {
    name: "Campus Irrigation System",
    githubUrl: "https://github.com/s990093/MAKERTHON-2023",
    projTypes: [ProjType.Web, ProjType.Embedded],
    projectImages: ["/test/self/proj/irrigation-sys.png"],
    shortDescription:
      "A low-power irrigation system for campus use that leverages solar energy and body detection to optimize water usage and energy efficiency, particularly during hot summer months.",
    technologiesUsed: [
      {
        name: "Django",
        icon: "django",
      },
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "arduino",
        icon: "arduino",
      },
      {
        name: "Webscoket",
        icon: "websocket", // Replace with actual icon path
      },
      {
        name: "Yolo",
        icon: "yolo",
      },
    ],
    time: "4 months", // Replace with actual time spent
  },
  {
    name: "Campus Pre-Order Meal System",
    projTypes: [
      ProjType.Web,
      ProjType.Server,
      ProjType.Embedded,
      ProjType.System,
    ],

    projectImages: ["/test/self/proj/cpop.png"],
    shortDescription:
      "An online pre-order system for campus meal services that allows students to order and pay for their meals in advance, improving convenience and reducing wait times.",
    technologiesUsed: [
      {
        name: "Django",
        icon: "django",
      },
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "Docker",
        icon: "docker",
      },
      {
        name: "React native",
        icon: "react", // Replace with actual icon path
      },
    ],
    time: "3 months", // Replace with actual time spent
  },
  {
    name: "Iriver",
    projTypes: [ProjType.Web, ProjType.Server, ProjType.Mobile],
    projectImages: [
      "/test/self/proj/iriver.png",
      "/test/self/proj/iriver-2.png",
    ],
    shortDescription:
      "A music system that uses a backend crawler to fetch songs and provides both a web interface and a mobile app for users to explore and play music.",
    technologiesUsed: [
      {
        name: "Django",
        icon: "django",
      },
      {
        name: "React",
        icon: "react",
      },
      {
        name: "Selenium",
        icon: "selenium", // Replace with actual icon path
      },
      {
        name: "Android",
        icon: "android", // Replace with actual icon path
      },
      {
        name: "Figma",
        icon: "figma",
      },
    ],
    time: "6 months", // Replace with actual time spent
  },
  {
    name: "Second-Generation Campus Administration System",
    projTypes: [ProjType.Mobile],
    projectImages: ["/test/self/proj/campus-academic.png"],
    shortDescription:
      "An upgraded campus administration system built with Flutter, where all static screens have been transformed into dynamic, interactive interfaces for a better user experience.",
    technologiesUsed: [
      {
        name: "Flutter",
        icon: "flutter", // Replace with actual icon path
      },
      {
        name: "Dart",
        icon: "dart", // Replace with actual icon path
      },
      {
        name: "Figma",
        icon: "figma", // Replace with actual icon path
      },
    ],
    time: "5 months", // Replace with actual time spent
  },
  {
    name: "AIoT Home Automation System  勝群盃19屆",
    projTypes: [ProjType.Embedded, ProjType.System],
    projectImages: ["/test/self/proj/Smart-home-holtek19.png"],
    shortDescription:
      "A cutting-edge AIoT home automation system developed, leveraging new chip technology to control various home devices seamlessly.",
    inProgress: true,
    technologiesUsed: [
      {
        name: "C++",
        icon: "c++",
      },
      {
        name: "Django",
        icon: "django",
      },
    ],
    time: "6 months", // Replace with actual time spent
  },
  {
    name: "Item Donation Website",
    projTypes: [ProjType.Web],
    githubUrl: "https://github.com/s990093/ItemDonation",
    projectImages: ["/test/self/proj/ItemDonation.png"],
    shortDescription:
      "A self-made website that allows users to donate items easily. The platform connects donors with those in need, providing a streamlined and user-friendly experience.",
    technologiesUsed: [
      {
        name: "Next.js",
        icon: "nextjs",
        description:
          "React framework for building server-rendered applications",
      },
      {
        name: "Django",
        icon: "django",
        description: "Python web framework for building robust backend systems",
      },
    ],
    time: "0.5 day", // Replace with actual time spent
  },
];
