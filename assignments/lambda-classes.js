// CODE here for your Lambda Classes
class Person {
  constructor(baseClass) {
    this.name = baseClass.name;
    this.age = baseClass.age;
    this.location = baseClass.location;
    this.gender - baseClass.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I an from ${this.location}.`);
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
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(student) {
    super(student);
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
}

class ProjectManager extends Instructor {
  constructor(pm) {
    super(pm);
    this.gradClassName = pm.gradClassName;
    this.favInstructor = pm.favInstructor;
  }
  standUp(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel}, @channel standup times!`
    );
  }
  debugsCode(studentObject, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
