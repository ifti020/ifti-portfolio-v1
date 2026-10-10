export interface Extracurricular {
    role: string;
    organization: string;
    duration: string;
    description: string;
    link?: string;
}

export const extracurricularData: Extracurricular[] = [
    {
        role: "Vice President",
        organization: "BAUST Computer Club",
        duration: "Feb 2025 - Dec 2025",
        description: "Organized programming contests, technical workshops, and seminars while coordinating teams to deliver club activities.",
        link: "https://www.facebook.com/share/1B28pTA5Hi/"
    },
    {
        role: "Event Management Team Member",
        organization: "BAUST Mathematics Club",
        duration: "Nov 2025",
        description: "Worked with volunteers on venue setup, decoration, exam hall invigilation, and food distribution for the Math Olympiad (Rangpur Regional) at BAUST.",
        link: "https://www.facebook.com/profile.php?id=61583239928681"
    }
];