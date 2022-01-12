var student1 = {
  name: "abc",
  rollno: 135,
  mark: 90,
};

for (var prop in student1) {
  console.log(prop, student1[prop]);
}

var keys = Object.keys(student1);

var key = Object.getOwnPropertyNames(student1);

