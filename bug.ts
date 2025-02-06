function printString(str: string): void {
  console.log(str);
}

function usePrintString(): void {
  const num: number = 10;
  printString(num); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
}