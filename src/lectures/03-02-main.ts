/* Type Alias vs Interface */

// Primitive type
type StudentName = string;
type Studentage = number;
type IsTopStudent = boolean;

// Object type
type Student = {
  readonly id: number;
  name: string;
  age?: number; // optional
};

interface StudentProps {
  readonly id: number;
  name: string;
  age?: number;
}

// Union type
type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;

interface StudentUnion {
  readonly id: string | number;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D';
}

// Intersection type
interface Indetity {
  id: string;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface BusinessPartner {
  name: string;
  credit: number;
}

type Employee = Indetity & Contact;
type Customer = BusinessPartner & Contact;

// interface way
interface EmployeeInterface extends Indetity, Contact {}
interface CustomerInterface extends BusinessPartner, Contact {}

// Declaration merging - abled to add new props to Interface, but not Type Alias

interface StudentM {
  id: string; 
  name: string;
}

interface StudentM {  // it's worked
  age?: number;
}


