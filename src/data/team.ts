export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string | null;
  avatar_url: string | null;
  linkedin_url: string | null;
  github_url: string | null;
  published: boolean;
}

// Data team - Edit array ini untuk menambah/mengubah anggota tim
export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Reza Pratama",
    position: "Lead Developer",
    bio: "Full-stack developer dengan 8+ tahun pengalaman. Spesialis dalam React, Node.js, dan cloud architecture. Passionate tentang clean code dan best practices.",
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza",
    linkedin_url: "https://linkedin.com",
    github_url: "https://github.com",
    published: true
  },
  {
    id: "2",
    name: "Sarah Angelina",
    position: "UI/UX Designer",
    bio: "Creative designer dengan fokus pada user experience. 5+ tahun pengalaman dalam web dan mobile design. Ahli dalam Figma, Adobe XD, dan design systems.",
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    linkedin_url: "https://linkedin.com",
    github_url: null,
    published: true
  },
  {
    id: "3",
    name: "David Kurniawan",
    position: "Project Manager",
    bio: "Berpengalaman mengelola 100+ project digital. Memastikan setiap project selesai tepat waktu dengan kualitas terbaik. Fokus pada client satisfaction.",
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    linkedin_url: "https://linkedin.com",
    github_url: null,
    published: true
  }
];

// Filter hanya team member yang published
export const getPublishedTeam = () => {
  return teamData.filter(member => member.published);
};
