
 export const mentorDashboardData = {
  summary: {
    totalEnrollments: 14,
    totalCourses: 8,
    totalEarnings: "$245"
  },
  latestEnrollments: [
    {
      id: 1,
      studentName: "Richard Sanford",
      courseTitle: "Build Text to Image SaaS App in React JS",
      date: "22 Aug, 2024",
      profileImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
    },
    {
      id: 2,
      studentName: "Enrique Murphy",
      courseTitle: "Build AI BG Removal SaaS App in React JS",
      date: "22 Aug, 2024",
      profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
    },
    {
      id: 3,
      studentName: "Alison Powell",
      courseTitle: "React Router Complete Course in One Video",
      date: "25 Sep, 2024",
      profileImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
    },
    {
      id: 4,
      studentName: "Richard Sanford",
      courseTitle: "Build Full Stack E-Commerce App in React JS",
      date: "15 Oct, 2024",
      profileImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    {
      id: 5,
      studentName: "Enrique Murphy",
      courseTitle: "Build AI BG Removal SaaS App in React JS",
      date: "22 Aug, 2024",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      id: 6,
      studentName: "Alison Powell",
      courseTitle: "React Router Complete Course in One Video",
      date: "25 Sep, 2024",
      profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
      id: 7,
      studentName: "Richard Sanford",
      courseTitle: "Build Full Stack E-Commerce App in React JS",
      date: "15 Oct, 2024",
      profileImage: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
    }
  ]
};





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



  {
    "id": "849889487",
    "courseTitle": "Ethical Hacking 101",
    "courseDescription": "Become a white-hat hacker and secure systems ethically.",
    "coursePrice": "5599",
    "isPublished": true,
    "mentor": "Mr. Robot",
    "thumbnail": "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=100&q=80",
    "enrolledStudents": [],
    "courseRatings": [
      { "userId": "user_70001", "rating": 4.6, "id": "rating_013" }
    ],
    "courseContent": [
      {
        "chId": "407",
        "chOrder": 1,
        "chTitle": "Intro to Hacking",
        "chContent": [
          {
            "lid": "513",
            "lTitle": "Hacking Basics",
            "duration": 20,
            "lectURL": "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "514",
            "lTitle": "Common Attacks",
            "duration": 20,
            "lectURL": "https://www.youtube.com/watch?v=UtjZGkYgr-Q",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      },
      {
        "chId": "408",
        "chOrder": 2,
        "chTitle": "Footprinting and Reconnaissance",
        "chContent": [
          {
            "lid": "515",
            "lTitle": "What is Footprinting?",
            "duration": 18,
            "lectURL": "https://www.youtube.com/watch?v=6fnDab2iRYE",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "516",
            "lTitle": "Reconnaissance Techniques",
            "duration": 20,
            "lectURL": "https://www.youtube.com/watch?v=nQ3pQx71zmw",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      },
      {
        "chId": "409",
        "chOrder": 3,
        "chTitle": "Network Hacking",
        "chContent": [
          {
            "lid": "517",
            "lTitle": "Understanding Networks",
            "duration": 20,
            "lectURL": "https://www.youtube.com/watch?v=FEpGFvjyGdM",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "518",
            "lTitle": "MITM (Man-in-the-Middle) Attacks",
            "duration": "30 mins",
            "lectURL": "https://www.youtube.com/watch?v=IRKLK8muE3M",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      },
      {
        "chId": "410",
        "chOrder": 4,
        "chTitle": "System Hacking and Malware",
        "chContent": [
          {
            "lid": "519",
            "lTitle": "System Exploits",
            "duration": 20,
            "lectURL": "https://www.youtube.com/watch?v=5vFjT_mBQhs",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "520",
            "lTitle": "Malware Analysis",
            "duration": "33 mins",
            "lectURL": "https://www.youtube.com/watch?v=vS0BoNRB99I",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      },
      {
        "chId": "411",
        "chOrder": 5,
        "chTitle": "Web Application Security",
        "chContent": [
          {
            "lid": "521",
            "lTitle": "Introduction to Web Security",
            "duration": "21 mins",
            "lectURL": "https://www.youtube.com/watch?v=3VNNfxt0ehg",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "522",
            "lTitle": "SQL Injection and XSS",
            "duration": "26 mins",
            "lectURL": "https://www.youtube.com/watch?v=29gAXQbwivk",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      }
    ]
  },
  
  {
    "id": "849889488",
    "courseTitle": "DevOps Masterclass",
    "courseDescription": "CI/CD pipelines, Docker, Kubernetes, and more.",
    "coursePrice": "6799",
    "isPublished": true,
    "mentor": "Angela White",
    "thumbnail": "https://images.unsplash.com/photo-1581091870627-3b5dcb6a45f1?auto=format&fit=crop&w=100&q=80",
    "enrolledStudents": [],
    "courseRatings": [
      { "userId": "user_80001", "rating": 4.7, "id": "rating_014" }
    ],
    "courseContent": [
      {
        "chId": "408",
        "chOrder": 1,
        "chTitle": "DevOps Essentials",
        "chContent": [
          {
            "lid": "515",
            "lTitle": "CI/CD Concepts",
            "duration": "22 mins",
            "lectURL": "https://www.youtube.com/watch?v=scEDHsr3APg",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "516",
            "lTitle": "Docker & Kubernetes",
            "duration": "28 mins",
            "lectURL": "https://www.youtube.com/watch?v=9zUHg7xjIqQ",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      },
      {
        "chId": "409",
        "chOrder": 2,
        "chTitle": "Advanced DevOps Techniques",
        "chContent": [
          {
            "lid": "517",
            "lTitle": "Docker Networking",
            "duration": "25 mins",
            "lectURL": "https://www.youtube.com/watch?v=X5EZUp7rfAY",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "518",
            "lTitle": "Kubernetes Clusters",
            "duration": "30 mins",
            "lectURL": "https://www.youtube.com/watch?v=1RlD9D4kPGM",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      },
      {
        "chId": "410",
        "chOrder": 3,
        "chTitle": "Continuous Integration and Deployment",
        "chContent": [
          {
            "lid": "519",
            "lTitle": "Setting up CI with Jenkins",
            "duration": "35 mins",
            "lectURL": "https://www.youtube.com/watch?v=VxyjJ9c5lTQ",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "520",
            "lTitle": "Continuous Deployment Pipelines",
            "duration": "40 mins",
            "lectURL": "https://www.youtube.com/watch?v=KhfbgFNjN2A",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      },
      {
        "chId": "411",
        "chOrder": 4,
        "chTitle": "Scaling and Monitoring",
        "chContent": [
          {
            "lid": "521",
            "lTitle": "Scaling Applications in Docker",
            "duration": "30 mins",
            "lectURL": "https://www.youtube.com/watch?v=7TxkFjbCXC0",
            "isPreviewFree": true,
            "lectOrder": 1
          },
          {
            "lid": "522",
            "lTitle": "Monitoring Kubernetes Clusters",
            "duration": "34 mins",
            "lectURL": "https://www.youtube.com/watch?v=F_VxKXgHWtM",
            "isPreviewFree": false,
            "lectOrder": 2
          }
        ]
      }
    ]
  }
,  
{
  "id": "849889489",
  "courseTitle": "Data Structures & Algorithms",
  "courseDescription": "Crack coding interviews with strong DSA concepts.",
  "coursePrice": "7499",
  "isPublished": true,
  "mentor": "Robert Langdon",
  "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCCQP1bgQsbocOoRMhe5be0WM2_vawSTHlg&s",
  "enrolledStudents": [],
  "courseRatings": [
    { "userId": "user_90001", "rating": 5.0, "id": "rating_015" }
  ],
  "courseContent": [
    {
      "chId": "409",
      "chOrder": 1,
      "chTitle": "Intro to DSA",
      "chContent": [
        {
          "lid": "517",
          "lTitle": "Arrays & Linked Lists",
          "duration": "19 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "518",
          "lTitle": "Stacks & Queues",
          "duration": "21 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "410",
      "chOrder": 2,
      "chTitle": "Trees & Graphs",
      "chContent": [
        {
          "lid": "519",
          "lTitle": "Binary Trees",
          "duration": "25 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "520",
          "lTitle": "Graph Traversal",
          "duration": "30 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "411",
      "chOrder": 3,
      "chTitle": "Sorting & Searching Algorithms",
      "chContent": [
        {
          "lid": "521",
          "lTitle": "Quick Sort & Merge Sort",
          "duration": "35 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "522",
          "lTitle": "Binary Search Algorithm",
          "duration": "28 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "412",
      "chOrder": 4,
      "chTitle": "Dynamic Programming",
      "chContent": [
        {
          "lid": "523",
          "lTitle": "Intro to Dynamic Programming",
          "duration": "40 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "524",
          "lTitle": "Knapsack Problem",
          "duration": "38 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    }
  ]
}

,
{
  "id": "849889478",
  "courseTitle": "Mastering Java",
  "courseDescription": "Learn Java from scratch and build real-world applications.",
  "coursePrice": "4999",
  "isPublished": true,
  "mentor": "John Doe",
  "thumbnail": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "enrolledStudents": ["user_123456789", "user_987654321", "user_567890123"],
  "courseRatings": [
    {
      "userId": "user_789001",
      "rating": 4.5,
      "id": "rating_001"
    },
    {
      "userId": "user_789002",
      "rating": 4.8,
      "id": "rating_002"
    }
  ],
  "courseContent": [
    {
      "chId": "101",
      "chOrder": 1,
      "chTitle": "Introduction to Java",
      "chContent": [
        {
          "lid": "201",
          "lTitle": "Java Basics",
          "duration": "15 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "202",
          "lTitle": "Setting up Java Environment",
          "duration": "20 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "102",
      "chOrder": 2,
      "chTitle": "Core Java Concepts",
      "chContent": [
        {
          "lid": "203",
          "lTitle": "Data Types and Variables",
          "duration": "18 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "204",
          "lTitle": "Control Structures",
          "duration": "22 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "103",
      "chOrder": 3,
      "chTitle": "Object-Oriented Programming",
      "chContent": [
        {
          "lid": "205",
          "lTitle": "Classes and Objects",
          "duration": "25 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "206",
          "lTitle": "Inheritance and Polymorphism",
          "duration": "30 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "104",
      "chOrder": 4,
      "chTitle": "Java Collections Framework",
      "chContent": [
        {
          "lid": "207",
          "lTitle": "Lists and Sets",
          "duration": "32 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "208",
          "lTitle": "Maps and Queues",
          "duration": "28 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    }
  ]
}
,
{
  "id": "849889479",
  "courseTitle": "JavaScript for Beginners",
  "courseDescription": "Learn JavaScript step-by-step with practical examples.",
  "coursePrice": "3999",
  "isPublished": true,
  "mentor": "Jane Smith",
  "thumbnail": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "enrolledStudents": ["user_782786892209", "user_782786892289"],
  "courseRatings": [
    {
      "userId": "user_123123",
      "rating": 5.0,
      "id": "rating_003"
    }
  ],
  "courseContent": [
    {
      "chId": "201",
      "chOrder": 1,
      "chTitle": "Introduction to JavaScript",
      "chContent": [
        {
          "lid": "301",
          "lTitle": "JavaScript Basics",
          "duration": "18 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "302",
          "lTitle": "Data Types & Operators",
          "duration": "22 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "202",
      "chOrder": 2,
      "chTitle": "Control Flow in JavaScript",
      "chContent": [
        {
          "lid": "303",
          "lTitle": "Conditional Statements (if, else, switch)",
          "duration": "20 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "304",
          "lTitle": "Loops (for, while, do-while)",
          "duration": "25 mins",
          "lectURL": "https://youtu.be/NBnuqq10zoo?si=sJjGGbkRI6UjOERR",   
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "203",
      "chOrder": 3,
      "chTitle": "Functions & Objects",
      "chContent": [
        {
          "lid": "305",
          "lTitle": "Functions in JavaScript",
          "duration": "24 mins",
          "lectURL": "https://www.youtube.com/watch?v=f6O8p5O2fCg",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "306",
          "lTitle": "Objects and Arrays",
          "duration": "26 mins",
          "lectURL": "https://www.youtube.com/watch?v=eG9hdnoZCCY",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "204",
      "chOrder": 4,
      "chTitle": "DOM Manipulation",
      "chContent": [
        {
          "lid": "307",
          "lTitle": "Introduction to DOM",
          "duration": "23 mins",
          "lectURL": "https://www.youtube.com/watch?v=0ik6X4DJKCc",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "308",
          "lTitle": "Manipulating HTML Elements",
          "duration": "28 mins",
          "lectURL": "https://www.youtube.com/watch?v=IZKxJcMOcug",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    }
  ]
}
,
{
  "id": "849889480",
  "courseTitle": "Python for Data Science",
  "courseDescription": "Learn Python programming for data analysis, visualization, and ML.",
  "coursePrice": "5999",
  "isPublished": true,
  "mentor": "Alex Johnson",
  "thumbnail": "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg",
  "enrolledStudents": ["user_908234567", "user_112233445"],
  "courseRatings": [
    {
      "userId": "user_112233",
      "rating": 4.9,
      "id": "rating_004"
    },
    {
      "userId": "user_445566",
      "rating": 4.7,
      "id": "rating_005"
    }
  ],
  "courseContent": [
    {
      "chId": "301",
      "chOrder": 1,
      "chTitle": "Introduction to Python",
      "chContent": [
        {
          "lid": "401",
          "lTitle": "Python Basics",
          "duration": "20 mins",
          "lectURL": "https://www.youtube.com/watch?v=rfscVS0vtbw",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "402",
          "lTitle": "Control Flow & Functions",
          "duration": "25 mins",
          "lectURL": "https://www.youtube.com/watch?v=t8pPdKYpowI",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "302",
      "chOrder": 2,
      "chTitle": "Data Structures in Python",
      "chContent": [
        {
          "lid": "403",
          "lTitle": "Lists and Tuples",
          "duration": "18 mins",
          "lectURL": "https://www.youtube.com/watch?v=ohCDWZgNIU0",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "404",
          "lTitle": "Dictionaries and Sets",
          "duration": "22 mins",
          "lectURL": "https://www.youtube.com/watch?v=daefaLgNkw0",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "303",
      "chOrder": 3,
      "chTitle": "Introduction to Data Science",
      "chContent": [
        {
          "lid": "405",
          "lTitle": "Introduction to NumPy",
          "duration": "20 mins",
          "lectURL": "https://www.youtube.com/watch?v=QUT1VHiLmmI",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "406",
          "lTitle": "Data Visualization with Matplotlib",
          "duration": "25 mins",
          "lectURL": "https://www.youtube.com/watch?v=3Xc3CA655Y4",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    },
    {
      "chId": "304",
      "chOrder": 4,
      "chTitle": "Machine Learning with Python",
      "chContent": [
        {
          "lid": "407",
          "lTitle": "Introduction to Scikit-Learn",
          "duration": "22 mins",
          "lectURL": "https://www.youtube.com/watch?v=0Lt9P-rw6mA",
          "isPreviewFree": true,
          "lectOrder": 1
        },
        {
          "lid": "408",
          "lTitle": "Building a Simple ML Model",
          "duration": "28 mins",
          "lectURL": "https://www.youtube.com/watch?v=LHBE6Q9XlzI",
          "isPreviewFree": false,
          "lectOrder": 2
        }
      ]
    }
  ]
}



];
