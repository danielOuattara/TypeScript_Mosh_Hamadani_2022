export {};

// type aliases

let employee_1: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "John Doe",
  retire: (date) => console.log(date),
};

console.log(employee_1);

//--------------------------------------------------

type EmployeeType = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee_2: EmployeeType = {
  id: 2,
  name: "John Snow",
  retire(date) {
    console.log(date);
  },
};

console.log(employee_2);
