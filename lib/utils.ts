import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { TOTAL_PIECES} from "../lib/constants/constants";

export function generateUniqueRandomNumbers(
    count: number,
    exclude: Set<number>,
    selected: Set<number>
): number[] {
    const numbers: number[] = [];
    const availableNumbers: number[] = [];

    for (let i = 0; i < TOTAL_PIECES; i++) {
        if (!exclude.has(i) && !selected.has(i)) {
            availableNumbers.push(i);
        }
    }

    for (let i = availableNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableNumbers[i], availableNumbers[j]] = [availableNumbers[j], availableNumbers[i]];
    }

    for (let i = 0; i < count && i < availableNumbers.length; i++) {
        numbers.push(availableNumbers[i]);
        selected.add(availableNumbers[i]);
    }

    return numbers;
}