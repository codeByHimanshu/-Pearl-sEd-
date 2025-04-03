export const dummyCourses = [
    {
        id: "849889478",
        courseTitle: "Mastering Java",
        courseDescription: `
            <h2>Java Programming Masterclass</h2>
            <p>Learn Java from scratch and build real-world applications.</p>
            <ul>
                <li>Core Java Fundamentals</li>
                <li>Object-Oriented Programming</li>
                <li>Advanced Java Concepts</li>
            </ul>`,
        coursePrice: "4999",
        isPublished: true,
        mentor: "9856473821",
        enrolledStudents: [
            "user_123456789",
            "user_987654321",
            "user_567890123"
        ],
        courseratings: [
            {
                userId: "user_789001",
                ratings: "4.5",
                id: "rating_001"
            },
            {
                userId: "user_789002",
                ratings: "4.8",
                id: "rating_002"
            }
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
                        lectURL: "https://example.com/java-basics",
                        isPreviewFree: true,
                        lectOrder: 1
                    },
                    {
                        lid: "202",
                        lTitle: "Setting up Java Environment",
                        duration: "20 mins",
                        lectURL: "https://example.com/java-setup",
                        isPreviewFree: false,
                        lectOrder: 2
                    }
                ]
            },
            {
                chId: "102",
                chOrder: 2,
                chTitle: "OOP in Java",
                chContent: [
                    {
                        lid: "203",
                        lTitle: "Classes and Objects",
                        duration: "25 mins",
                        lectURL: "https://example.com/java-oop",
                        isPreviewFree: true,
                        lectOrder: 1
                    }
                ]
            }
        ]
    },
    {
        id: "849889479",
        courseTitle: "JavaScript for Beginners",
        courseDescription: `
            <h2>Master JavaScript</h2>
            <p>Learn JavaScript step-by-step with practical examples.</p>
            <ul>
                <li>Variables and Data Types</li>
                <li>Functions and Scope</li>
                <li>DOM Manipulation</li>
            </ul>`,
        coursePrice: "3999",
        isPublished: true,
        mentor: "8948704343",
        enrolledStudents: [
            "user_782786892209",
            "user_782786892289",
            "user_782786892299",
            "user_782786892219"
        ],
        courseratings: [
            {
                userId: "7898932789237897890",
                ratings: "5",
                id: "789348ruy8were"
            }
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
                        lectURL: "https://example.com/js-basics",
                        isPreviewFree: true,
                        lectOrder: 1
                    },
                    {
                        lid: "302",
                        lTitle: "Data Types & Operators",
                        duration: "22 mins",
                        lectURL: "https://example.com/js-data-types",
                        isPreviewFree: false,
                        lectOrder: 2
                    }
                ]
            },
            {
                chId: "202",
                chOrder: 2,
                chTitle: "Advanced JavaScript",
                chContent: [
                    {
                        lid: "303",
                        lTitle: "Asynchronous JavaScript",
                        duration: "30 mins",
                        lectURL: "https://example.com/js-async",
                        isPreviewFree: true,
                        lectOrder: 1
                    }
                ]
            }
        ]
    },
    {
        id: "849889480",
        courseTitle: "Python for Data Science",
        courseDescription: `
            <h2>Python for Data Science</h2>
            <p>Learn Python programming for data analysis, visualization, and machine learning.</p>
            <ul>
                <li>Pandas & NumPy</li>
                <li>Data Visualization with Matplotlib</li>
                <li>Introduction to Machine Learning</li>
            </ul>`,
        coursePrice: "5999",
        isPublished: true,
        mentor: "7856453987",
        enrolledStudents: [
            "user_908234567",
            "user_112233445",
            "user_556677889"
        ],
        courseratings: [
            {
                userId: "user_112233",
                ratings: "4.9",
                id: "rating_003"
            },
            {
                userId: "user_445566",
                ratings: "4.7",
                id: "rating_004"
            }
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
                        lectURL: "https://example.com/python-basics",
                        isPreviewFree: true,
                        lectOrder: 1
                    },
                    {
                        lid: "402",
                        lTitle: "Control Flow & Functions",
                        duration: "25 mins",
                        lectURL: "https://example.com/python-control-flow",
                        isPreviewFree: false,
                        lectOrder: 2
                    }
                ]
            },
            {
                chId: "302",
                chOrder: 2,
                chTitle: "Data Science with Python",
                chContent: [
                    {
                        lid: "403",
                        lTitle: "Data Analysis with Pandas",
                        duration: "35 mins",
                        lectURL: "https://example.com/python-pandas",
                        isPreviewFree: true,
                        lectOrder: 1
                    }
                ]
            }
        ]
    }
];
