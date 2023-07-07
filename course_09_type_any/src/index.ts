// variables annotations
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// variables auto inferred
let sales_2 = 123_456_789;
let course_2 = "TypeScript";
let is_published_2 = true;

let something; // type = any

something = 1;
something = "a";

function render(document: any) {
  console.log(document);
}

// avoid any type !!!
