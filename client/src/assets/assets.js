export const dataTestimonial = [
  {
    name: "Donald Jackman",
    role: "SWE 1 @ Amazon",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Aisha Verma",
    role: "UI/UX Designer @ Microsoft",
    image:  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 4,
    feedback:
      "The smooth interface and smart features make Imagify a go-to for all my design projects. It saves me hours every week!",
  },
  {
    name: "Carlos Mendoza",
    role: "Content Creator @ YouTube",
    image:  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    feedback:
      "Imagify is a lifesaver! From thumbnails to social posts, it's my creative secret weapon. Highly recommended!",
  },
  {
    name: "Linda Zhao",
    role: "Marketing Manager @ HubSpot",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 4,
    feedback:
      "Imagify helped our marketing team level up our brand visuals without needing to hire a designer every time.",
  },
 
];

export const dummyCourses = [
  // ... existing 3 courses (unchanged) ...

{
  id: "849889481",
  courseTitle: "React Fundamentals",
  courseDescription: "Build interactive UIs with React.js from scratch.",
  coursePrice: "4499",
  isPublished: true,
  mentor: "Sara Lee",
  thumbnail: "https://images.unsplash.com/photo-1584697964154-588e026f4b45?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: ["user_98372912"],
  courseRatings: [
    { userId: "user_10001", rating: 4.6, id: "rating_006" },
    { userId: "user_10002", rating: 4.7, id: "rating_007" }
  ],
  courseContent: [
    {
      chId: "401",
      chOrder: 1,
      chTitle: "Getting Started with React",
      chContent: [
        {
          lid: "501",
          lTitle: "Introduction to React",
          duration: "16 mins",
          lectURL: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "502",
          lTitle: "JSX and Components",
          duration: "20 mins",
          lectURL: "https://www.youtube.com/watch?v=Oe421EPjeBE",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
},
{
  id: "849889482",
  courseTitle: "Node.js & Express Bootcamp",
  courseDescription: "Create robust backend APIs using Node and Express.",
  coursePrice: "5299",
  isPublished: true,
  mentor: "Daniel Craig",
  thumbnail: "https://images.unsplash.com/photo-1629904853893-9a6c2a0c6c63?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: ["user_node101"],
  courseRatings: [
    { userId: "user_20001", rating: 4.8, id: "rating_008" }
  ],
  courseContent: [
    {
      chId: "402",
      chOrder: 1,
      chTitle: "Basics of Node.js",
      chContent: [
        {
          lid: "503",
          lTitle: "What is Node.js?",
          duration: "18 mins",
          lectURL: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "504",
          lTitle: "Intro to Express.js",
          duration: "22 mins",
          lectURL: "https://www.youtube.com/watch?v=L72fhGm1tfE",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
},
{
  id: "849889483",
  courseTitle: "UI/UX Design Essentials",
  courseDescription: "Master user interface and user experience design principles.",
  coursePrice: "5999",
  isPublished: true,
  mentor: "Emily Carter",
  thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: ["user_uiux101"],
  courseRatings: [
    { userId: "user_30001", rating: 4.9, id: "rating_009" }
  ],
  courseContent: [
    {
      chId: "403",
      chOrder: 1,
      chTitle: "Introduction to UI/UX",
      chContent: [
        {
          lid: "505",
          lTitle: "Understanding UX",
          duration: "17 mins",
          lectURL: "https://www.youtube.com/watch?v=Ovj4hFxko7c",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "506",
          lTitle: "UI Basics",
          duration: "19 mins",
          lectURL: "https://www.youtube.com/watch?v=3YjIYhjSKqA",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
},
{
  id: "849889484",
  courseTitle: "Full Stack Web Development",
  courseDescription: "Learn to build full-stack apps using MERN stack.",
  coursePrice: "8999",
  isPublished: true,
  mentor: "Kevin Durant",
  thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: ["user_5566778899"],
  courseRatings: [
    { userId: "user_40001", rating: 4.5, id: "rating_010" }
  ],
  courseContent: [
    {
      chId: "404",
      chOrder: 1,
      chTitle: "MERN Overview",
      chContent: [
        {
          lid: "507",
          lTitle: "Intro to Full Stack",
          duration: "21 mins",
          lectURL: "https://www.youtube.com/watch?v=4yqu8YF29cU",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "508",
          lTitle: "Setting Up the Environment",
          duration: "23 mins",
          lectURL: "https://www.youtube.com/watch?v=UdeG5a6uAEk",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
},
{
  id: "849889485",
  courseTitle: "Machine Learning with Python",
  courseDescription: "A complete guide to machine learning with practical projects.",
  coursePrice: "6499",
  isPublished: true,
  mentor: "Rachel Green",
  thumbnail: "https://images.unsplash.com/photo-1581091012184-7c12f08b2a5f?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: [],
  courseRatings: [
    { userId: "user_50001", rating: 4.8, id: "rating_011" }
  ],
  courseContent: [
    {
      chId: "405",
      chOrder: 1,
      chTitle: "ML Basics",
      chContent: [
        {
          lid: "509",
          lTitle: "What is ML?",
          duration: "19 mins",
          lectURL: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "510",
          lTitle: "Supervised vs Unsupervised Learning",
          duration: "24 mins",
          lectURL: "https://www.youtube.com/watch?v=3ZWuPVWq7p4",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
},
{
  id: "849889486",
  courseTitle: "Cloud Computing Fundamentals",
  courseDescription: "Learn the basics of AWS, Azure, and Google Cloud.",
  coursePrice: "4999",
  isPublished: true,
  mentor: "Thomas Shelby",
  thumbnail: "https://images.unsplash.com/photo-1611926653458-09294a9c34d8?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: [],
  courseRatings: [
    { userId: "user_60001", rating: 4.3, id: "rating_012" }
  ],
  courseContent: [
    {
      chId: "406",
      chOrder: 1,
      chTitle: "Cloud Introduction",
      chContent: [
        {
          lid: "511",
          lTitle: "Cloud Basics",
          duration: "18 mins",
          lectURL: "https://www.youtube.com/watch?v=2LaAJq1lB1Q",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "512",
          lTitle: "AWS vs Azure vs GCP",
          duration: "21 mins",
          lectURL: "https://www.youtube.com/watch?v=ulprqHHWlng",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
},
{
  id: "849889487",
  courseTitle: "Ethical Hacking 101",
  courseDescription: "Become a white-hat hacker and secure systems ethically.",
  coursePrice: "5599",
  isPublished: true,
  mentor: "Mr. Robot",
  thumbnail: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: [],
  courseRatings: [
    { userId: "user_70001", rating: 4.6, id: "rating_013" }
  ],
  courseContent: [
    {
      chId: "407",
      chOrder: 1,
      chTitle: "Intro to Hacking",
      chContent: [
        {
          lid: "513",
          lTitle: "Hacking Basics",
          duration: "20 mins",
          lectURL: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "514",
          lTitle: "Common Attacks",
          duration: "25 mins",
          lectURL: "https://www.youtube.com/watch?v=UtjZGkYgr-Q",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
},
{
  id: "849889488",
  courseTitle: "DevOps Masterclass",
  courseDescription: "CI/CD pipelines, Docker, Kubernetes, and more.",
  coursePrice: "6799",
  isPublished: true,
  mentor: "Angela White",
  thumbnail: "https://images.unsplash.com/photo-1581091870627-3b5dcb6a45f1?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: [],
  courseRatings: [
    { userId: "user_80001", rating: 4.7, id: "rating_014" }
  ],
  courseContent: [
    {
      chId: "408",
      chOrder: 1,
      chTitle: "DevOps Essentials",
      chContent: [
        {
          lid: "515",
          lTitle: "CI/CD Concepts",
          duration: "22 mins",
          lectURL: "https://www.youtube.com/watch?v=scEDHsr3APg",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "516",
          lTitle: "Docker & Kubernetes",
          duration: "28 mins",
          lectURL: "https://www.youtube.com/watch?v=9zUHg7xjIqQ",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
},
{
  id: "849889489",
  courseTitle: "Data Structures & Algorithms",
  courseDescription: "Crack coding interviews with strong DSA concepts.",
  coursePrice: "7499",
  isPublished: true,
  mentor: "Robert Langdon",
  thumbnail: "https://images.unsplash.com/photo-1537432376769-00a492f3b63e?auto=format&fit=crop&w=100&q=80",
  enrolledStudents: [],
  courseRatings: [
    { userId: "user_90001", rating: 5.0, id: "rating_015" }
  ],
  courseContent: [
    {
      chId: "409",
      chOrder: 1,
      chTitle: "Intro to DSA",
      chContent: [
        {
          lid: "517",
          lTitle: "Arrays & Linked Lists",
          duration: "19 mins",
          lectURL: "https://www.youtube.com/watch?v=W8xlhZlR4n4",
          isPreviewFree: true,
          lectOrder: 1,
        },
        {
          lid: "518",
          lTitle: "Stacks & Queues",
          duration: "21 mins",
          lectURL: "https://www.youtube.com/watch?v=wnYIHZ_5d8w",
          isPreviewFree: false,
          lectOrder: 2,
        },
      ],
    },
  ],
}
,
  {
    id: "849889478",
    courseTitle: "Mastering Java",
    courseDescription:
      "Learn Java from scratch and build real-world applications.",
    coursePrice: "4999",
    isPublished: true,
    mentor: "John Doe",
    thumbnail: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    enrolledStudents: ["user_123456789", "user_987654321", "user_567890123"],
    courseRatings: [
      {
        userId: "user_789001",
        rating: 4.5,
        id: "rating_001",
      },
      {
        userId: "user_789002",
        rating: 4.8,
        id: "rating_002",
      },
    ],
    courseContent: [
      {
        chId: "101",
        chOrder: 1,
        chTitle: "Introduction to Java",
        chContent: [
          {
            lid: "201",
            lTitle: "Java Basics",
            duration: "15 mins",
            lectURL: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
            isPreviewFree: true,
            lectOrder: 1,
          },
          {
            lid: "202",
            lTitle: "Setting up Java Environment",
            duration: "20 mins",
            lectURL: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
            isPreviewFree: false,
            lectOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "849889479",
    courseTitle: "JavaScript for Beginners",
    courseDescription: "Learn JavaScript step-by-step with practical examples.",
    coursePrice: "3999",
    isPublished: true,
    mentor: "Jane Smith",
    thumbnail: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    enrolledStudents: ["user_782786892209", "user_782786892289"],
    courseRatings: [
      {
        userId: "user_123123",
        rating: 5.0,
        id: "rating_003",
      },
    ],
    courseContent: [
      {
        chId: "201",
        chOrder: 1,
        chTitle: "Introduction to JavaScript",
        chContent: [
          {
            lid: "301",
            lTitle: "JavaScript Basics",
            duration: "18 mins",
            lectURL: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
            isPreviewFree: true,
            lectOrder: 1,
          },
          {
            lid: "302",
            lTitle: "Data Types & Operators",
            duration: "22 mins",
            lectURL: "https://www.youtube.com/watch?v=upDLs1sn7g4",
            isPreviewFree: false,
            lectOrder: 2,
          },
        ],
      },
    ],
  },
  {
    id: "849889480",
    courseTitle: "Python for Data Science",
    courseDescription:
      "Learn Python programming for data analysis, visualization, and ML.",
    coursePrice: "5999",
    isPublished: true,
    mentor: "Alex Johnson",
    thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg",
    enrolledStudents: ["user_908234567", "user_112233445"],
    courseRatings: [
      {
        userId: "user_112233",
        rating: 4.9,
        id: "rating_004",
      },
      {
        userId: "user_445566",
        rating: 4.7,
        id: "rating_005",
      },
    ],
    courseContent: [
      {
        chId: "301",
        chOrder: 1,
        chTitle: "Introduction to Python",
        chContent: [
          {
            lid: "401",
            lTitle: "Python Basics",
            duration: "20 mins",
            lectURL: "https://www.youtube.com/watch?v=rfscVS0vtbw",
            isPreviewFree: true,
            lectOrder: 1,
          },
          {
            lid: "402",
            lTitle: "Control Flow & Functions",
            duration: "25 mins",
            lectURL: "https://www.youtube.com/watch?v=t8pPdKYpowI",
            isPreviewFree: false,
            lectOrder: 2,
          },
        ],
      },
    ],
  },

];
