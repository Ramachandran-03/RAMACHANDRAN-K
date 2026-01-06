import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Lawyer {
  name: string;
  qualification: string;
  role?: string;
  focus?: string;
  image?: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}