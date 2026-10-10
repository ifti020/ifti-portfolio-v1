export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string; // CUSTOMIZE_HERE: add deployed link when ready
    reportUrl?: string; // CUSTOMIZE_HERE: add presentation/report link (e.g. PDF in public folder)
    image?: string; // UPLOAD_YOUR_IMAGE_HERE: e.g., "/images/projects/boisync.png"
}

export const projectsData: Project[] = [
    {
        id: "boisync",
        title: "BoiSync (Online Library Platform)",
        description: "An online library platform with book browsing, search, category filtering, pagination, and availability tracking. Implemented 4 REST API endpoints, Keycloak with Spring Security for JWT authentication.",
        technologies: ["Java", "Spring Boot", "Spring Security", "Keycloak", "Spring Data JPA", "React", "TypeScript", "MySQL"],
        githubUrl: "https://github.com/ifti020/Library-App",
        liveUrl: "", // CUSTOMIZE_HERE: e.g., "https://my-boisync.vercel.app"
        reportUrl: ""
    },
    {
        id: "trip-connect",
        title: "BAUST Trip Connect",
        description: "A campus bus tracking system with 32 REST API endpoints covering users, buses, routes, and location tracking. Role-based access control for USER, STAFF, and ADMIN.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Vue.js", "Spring Security", "JWT"],
        githubUrl: "https://github.com/ifti020/baust_trip_connect_v2",
        liveUrl: "",
        reportUrl: ""
    },
    {
        id: "hsms",
        title: "High School Management System",
        description: "A web-based school management system with 4 user roles for managing attendance, routines, assignments, and notices.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        githubUrl: "https://github.com/ifti020/High-School-Management-System--DBMS-Sessional",
        liveUrl: ""
    }
    // CUSTOMIZE_HERE: Add more projects here in the future following the same structure
];