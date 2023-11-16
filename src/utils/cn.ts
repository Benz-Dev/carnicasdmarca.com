import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Funcion para concatenar classnames
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}