import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(path: string) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL;
  if (path.startsWith('/')) return `${base}${path.slice(1)}`;
  return `${base}${path}`;
}
