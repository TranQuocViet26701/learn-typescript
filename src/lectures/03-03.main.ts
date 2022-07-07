/* Function typescript */

// ts: function sayHello(): void
function sayHello() {
  console.log('Hello');
}

// Explicit return type
function sum(a: number, b: number): number {
  return a + b;
}

// Optional and default parameter
// function getLength(numberList: number[] | undefined) : number
function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// default parameters
function getLengthDefaultParams(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// function overload

// Other type: void and never
// function noop(): void
function noop() {
  return;
}

// function noop2(): void
function noop2() {}

// never type - represents values which never observed,
// in return type => function throw exception or terminate execution of programs
type newType = number & string; // never

function fail(msg: string): never {
  throw new Error(msg);
}

function fn(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    x; // never
  }
}

// Destructoring parameters
function createStudent({ id, name, age }: Student) {
  console.log({ id, name, age });
}

// Type compatible table
