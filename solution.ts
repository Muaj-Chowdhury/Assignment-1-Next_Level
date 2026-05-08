//solution-1
const filterEvenNumbers = (nums:number[]): number[] =>{
    return nums.filter(num => num % 2 === 0)
}


//solution-2
const reverseString = (str: string): string =>{
   const arrayStr = str.split("")
   let reverse = []
   for(let i = arrayStr.length-1 ; i >= 0 ; i--){
       reverse.push(arrayStr[i])
   }
   return reverse.join('')
}



//solution-3
type stringOrNumber = string | number; 

function checkType(input: stringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}


// solution-4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}




//solution-5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book): Book & {isRead: boolean}{
    return{
        ...book,
        isRead : true
    }
}


//solution-6
class Person{
    name:string;
    age:number;
    constructor(name: string, age: number){
        this.name= name;
        this.age= age;
    }
}
class Student extends Person{
    grade: string;
    constructor(name: string , age: number , grade: string){
        super(name, age)
        this.grade = grade
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}


//solution-7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(n => set2.has(n)))];
}

