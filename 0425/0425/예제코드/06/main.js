let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];   // spread 사용
console.log(newArr);

let [first, ...rest] = newArr; // rest 사용
console.log(first);

let person = {
	name: {
        first: "John",
        last: "Park"
    },
    getName: function () {
        return this.name.first + " " + this.name.last;
    }
}

person = {
    ...person,
    setFirstName: function (firstName) {
        this.name.first = firstName
    }
}

person.setFirstName("Lambo");
console.log(person.getName());

person = {
    ...person,
    setName: function (...name) {
        if (name.length == 1) {
            this.name.first = name[0]
        } else if (name.length == 2) {
            this.name.first = name[0]
            this.name.last = name[1]
        }
    }
}

person.setName("A");
console.log(person.getName());

person.setName("B", "C");
console.log(person.getName());