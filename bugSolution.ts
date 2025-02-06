function printString(str: string | number): void {
  console.log(str);
}

function usePrintString(): void {
  const num: number = 10;
  printString(num); // No error
}

//Alternative solution
function printString2(str: string): void {
  console.log(String(str));
}

function usePrintString2(): void {
  const num: number = 10;
  printString2(num.toString()); // No error
}