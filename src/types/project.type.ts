export interface TProject {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  liveUrl?: string;
  technologies: string;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
}

export const CATEGORY_OPTIONS = ["frontend", "backend", "fullstack","wordpress"] as const;

export const categoryOptions = CATEGORY_OPTIONS.map((cat) => ({
  value: cat,
  label: cat,
}));