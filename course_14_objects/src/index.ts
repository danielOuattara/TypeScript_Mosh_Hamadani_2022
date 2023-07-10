export {};

// objects

let employee_1 = { id: 1 };
// employee_1.name = "John"; // Incorrect : Property 'name' does not exist on type '{ id: number; }'.ts(2339)
console.log(employee_1);

//------------------------------------------------

let employee_2: {
  id: number;
  name: string;
} = { id: 1, name: "John Doe" };
console.log(employee_2);

//------------------------------------------------

let employee_3: {
  readonly id: number;
  name: string;
} = { id: 1, name: "John Doe" };
console.log(employee_3);

//------------------------------------------------

let employee_4: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "John Doe",
  retire: (date) => console.log(date),
};

console.log(employee_4);
