namespace StringUtility {
    export function toCapital(str: string): string {
        return str.toUpperCase();
    }

    export function subString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }
}

namespace Calculator {
    export function add(num1: number, num2: number): number {
        return num1 + num2;
    }
}