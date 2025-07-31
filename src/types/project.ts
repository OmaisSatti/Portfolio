export interface Project {
    id: number;
    title: string;
    image: string;
    techStack: { name: string; icon: string }[];
    overview?: string;
    deployment?: {
      ios?: string;
      android?: string;
      web?: string;
    };
  }
  