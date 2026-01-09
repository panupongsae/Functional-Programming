const numbers = [5, 10, 15, 20, 25];

// a. ใช้ map() สร้าง array ใหม่ที่สมาชิกแต่ละตัวยกกำลังสอง
const squaredNumbers = numbers.map(num => num * num);
console.log('1a. Squared:', squaredNumbers); 
// ผลลัพธ์: [25, 100, 225, 400, 625]

// b. ใช้ filter() สร้าง array ใหม่ที่มีเฉพาะเลขคู่ (หาร 2 ลงตัว)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('1b. Even Numbers:', evenNumbers); 
// ผลลัพธ์: [10, 20]

// c. ใช้ reduce() หาผลรวมของตัวเลขทั้งหมด
const sumNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('1c. Sum:', sumNumbers); 
// ผลลัพธ์: 75