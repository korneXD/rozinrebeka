import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const images = [
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5akuIa2fEGhbAfaTlLZBRWvs08FdOeKtg4C6U",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5kMu8NJhjQXDvJeyCMV96spgmFhP5abR4loHk",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu53vlzi6W5LpfVjOloBU684GaX5PWF0wzYD71g",
];
