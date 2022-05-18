// let arr = [1, 2, 3];
// let newArr = [...arr, 4, 5];   // spread 사용
// console.log(newArr);

// let [a, b, c, d, e] = newArr;

// let [first, second, ...tmp] = newArr; // rest 사용
// console.log(tmp);

interface IPerson2 {
  name: {
    first: string;
    last: string;
  };
  getName: () => string;
}

let person2: IPerson2 = {
  name: {
    first: "John",
    last: "Park",
  },
  getName: function () {
    return this.name.first + " " + this.name.last;
  },
};

console.log(person2);

interface IPerson3 extends IPerson2 {
  setFirstName: (firstName: string) => void;
}

// 이전에 javascript에서는 덮어씌우기
// typescript 그런걸 방지하기 위해 나온 방식이라
// 새로운 interface에 새로운 변수를 선언
let person3: IPerson3 = {
  ...person2,
  setFirstName: function (firstName) {
    this.name.first = firstName;
  },
};

// ...args : [string, number]
// 메소드 오버로딩
// VSCode 문법검사를 할때, typescript 지원 X
function abc(name: string): void;
function abc(name: string, age: number): void;
function abc(...args: any) {
  let name = "";
  let age = 0;

  if (args.length == 1) {
    name = args[0];
  }
  if (args.length == 2) {
    name = args[0];
    age = args[1];
  }
}
abc("a");
abc("a", 1);

person3.setFirstName("Lambo");
console.log(person3.getName());

interface IPerson4 extends IPerson3 {
  setName: (name: string) => void;
}

let person4: IPerson4 = {
  ...person3,
  setName: function (name: string) {
    this.name.first = name;
  },
};

person4.setName("A");
console.log(person4.getName());

interface IState {
  isDownload: boolean;
  a: boolean;
  b: boolean;
}

let state2: IState = {
  isDownload: false,
  a: true,
  b: true,
};

console.log(state2);

state2 = {
  ...state2,
  isDownload: true,
};

console.log(state2);
