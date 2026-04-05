import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Plan {
  name: string;
  price: string;
  times: string;
  recommended?: boolean;
  features: string[];
}

export interface Review {
  role: string;
  name: string;
  content: string;
  tags: string[];
}

export interface Question {
  q: string;
  a: string;
}