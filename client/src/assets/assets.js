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
