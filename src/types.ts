export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  image: string;
}

export interface JobPosition {
  id: string;
  title: string;
  description: string;
  requirements: string[];
}

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}