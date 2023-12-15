let obj = {
    name: "Hari",
    age: "28",
    place: "Bangalore",
    details(){
        return `Name of student is ${this.name},age is ${this.age}`
    }
}

console.log(obj.details());