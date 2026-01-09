const students = [
  { id: 1, name: 'Alice', grade: 85 },
  { id: 2, name: 'Bob', grade: 75 },
  { id: 3, name: 'Charlie', grade: 95 },
  { id: 4, name: 'David', grade: 60 }
];

// a. ใช้ map() ดึงเฉพาะชื่อนักเรียนออกมา
const studentNames = students.map(student => student.name);
console.log('2a. Names:', studentNames); 
// ผลลัพธ์: ['Alice', 'Bob', 'Charlie', 'David']

// b. ใช้ filter() คัดเฉพาะคนที่สอบผ่าน (เกรด >= 70)
const passedStudents = students.filter(student => student.grade >= 70);
console.log('2b. Passed:', passedStudents);
// ผลลัพธ์: Object ของ Alice, Bob, Charlie

// c. ใช้ reduce() หา "ค่าเฉลี่ย" ของเกรดทั้งหมด
const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
const averageGrade = totalGrade / students.length;
console.log('2c. Average Grade:', averageGrade);
// ผลลัพธ์: 78.75 (คิดจาก 315 / 4)