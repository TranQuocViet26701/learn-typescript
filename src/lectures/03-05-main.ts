/* Generics Typescript */

interface List<T> {
  length: number;
  [index: number]: T;
}

const numberList: List<number> = [1, 2, 4, 5];
const wordList: List<string> = ['a', 'b', 'test'];
const studentList: List<Student> = [
  { id: 1, name: 'viet' },
  { id: 2, name: 'tran', age: 21 },
];

// keyof operator
type StudentKeys = keyof Student;

const keys: StudentKeys = 'name'; // or id, or age

// type operator

// Mapped types
// cannot use as interface
type MappedTypeStudent = {
  [key in keyof Student]: boolean;
};


type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
}

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
}

type FeatureOptions = OptionsFlags<FeatureFlags>;
