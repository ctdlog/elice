/* 
  Class 정의
*/

class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getName() {
    return this.first + " " + this.last;
  }
  setName(first, last) {
    this.first = first;
    this.last = last;
  }
}

const bob = new User("Bob", "Park");
bob.setName("John", "Kim");
console.log(bob.getName());

/* 
  Class 상속 (Elice)
*/

class Elice extends User {
  constructor(first, last, id) {
    super(first, last);
    this.id = id;
  }
  getID() {
    return this.id + "(" + this.getName() + ")";
  }
  setID(id) {
    this.id = id;
  }
}

const john = new Elice("John", "Park", "mimi");
console.log(john.getName());
console.log(john.getID());

/* 
  Class 상속 (Naver)
*/

class Naver extends User {
  constructor(first, last, email) {
    super(first, last);
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }
}

const james = new Naver("James", "Lee", "gugu@naver.com");
console.log(james.getName());
console.log(james.getEmail());
