// CODE here for your Lambda Classes
class Person {
  constructor(baseClass) {
    this.name = baseClass.name;
    this.age = baseClass.age;
    this.location = baseClass.location;
    this.gender - baseClass.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(instruct) {
    super(instruct);
    this.specialty = instruct.specialty;
    this.favLanguage = instruct.favLanguage;
    this.catchPhrase = instruct.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student} receives a perfect score on ${subject}.`);
  }
  gradeRandom(studentGrade) {
    let random = Math.floor(Math.random() * 20);
    console.log(studentGrade + random);
  }
}

class Student extends Person {
  constructor(student) {
    super(student);
    this.grade = student.grade;
    this.previousBackground = student.previousBackground;
    this.className = student.className;
    this.favSubjects = student.favSubjects;
  }
  listsSubjects() {
    console.log(this.favSubjects);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  graduate(studentGrade) {
    if (studentGrade > 70) {
      console.log("Ready to graduate Lambda School!");
    } else {
      console.log("We have a little more work to do!");
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pm) {
    super(pm);
    this.gradClassName = pm.gradClassName;
    this.favInstructor = pm.favInstructor;
  }
  standUp(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel} @channel standup times!`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student}'s code on ${subject}`);
  }
}

// Objects to be tested

//Students
const leslie_t = new Student({
  name: "Leslie Thompson",
  age: 31,
  location: "San Francisco, CA",
  gender: "F",
  previousBackground: "Retail Management",
  className: "Web18",
  grade: 80,
  favSubjects: ["CSS", "JavaScript", "Cooking", "Biology"]
});

const christian_ipanaque = new Student({
  name: "Christian Ipanaque",
  age: 32,
  gender: "Male",
  location: "Seattle, WA",
  previousBackground: "Server Hardware Technician",
  className: "WEB18",
  favSubjects: [
    "Computer Science",
    "Redux",
    "Algorithms",
    "Data Structures",
    "Computer Architecture"
  ]
});

const tracy_pilcher = new Student({
  name: "Tracy Pilcher",
  age: 58,
  gender: "Female",
  location: "Hamtramck, MI",
  previousBackground: "LAMP Web Developer",
  className: "WEB18",
  favSubjects: ["PHP", "MySQL", "Permaculture Gardening"]
});

// Instructors
const chantal = new Instructor({
  name: "Chantal",
  age: 38,
  location: "Brooklyn, NY",
  gender: "F",
  specialty: "JavaScript",
  favLanguage: "CSS",
  catchPhrase: "You got this!"
});

const joshz = new Instructor({
  name: "Josh Zieger",
  age: 35,
  gender: "Male",
  location: "Scranton, PA",
  previousBackground: "Food Safety Manager , Commercial Hydroponic Grower",
  className: "WEB15",
  favSubjects: ["CSS", "React", "Spaaaace!", "early american history"]
});

// Project Managers
const renee = new ProjectManager({
  name: "Renee",
  age: 26,
  location: "Philadelphia, PA",
  gender: "M",
  specialty: "HTML",
  favLanguage: "Ruby",
  catchPhrase: "Do you need some help?",
  gradClassName: "Web 16",
  favInstructor: "Josh Knell"
});

const liz_B = new ProjectManager({
  name: "Lizzy B",
  age: 27,
  gender: "Female",
  location: "Portland, OR",
  previousBackground: "Biology/Health Science grad",
  className: "WEB12",
  favSubjects: ["CSS", "React", "Ternaries", "SQL", "Node"]
});

//Calling

console.log(renee.catchPhrase);
console.log(leslie_t.name); // Leslie
console.log(chantal.specialty); //JavaScript
console.log(leslie_t.grade);
console.log(christian_ipanaque.favSubjects);
renee.speak(); //Hello, My name is Renee, I am from Philadelphia,PA.
chantal.grade("Leslie", "HTML");
chantal.demo("CS");
renee.debugsCode(leslie_t.name, "css");
joshz.gradeRandom(leslie_t.grade);
leslie_t.graduate(leslie_t.grade);
liz_B.standUp("Web 18");
leslie_t.listsSubjects();
