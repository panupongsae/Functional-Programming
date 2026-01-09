const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Mouse', price: 20 },
  { id: 3, name: 'Keyboard', price: 50 },
  { id: 4, name: 'Monitor', price: 150 }
];

const totalValue = products
  .filter(product => product.price >= 100) // 1. เก็บเฉพาะ Laptop(800) กับ Monitor(150)
  .map(product => product.price * 2)       // 2. คูณราคาเป็น 2 เท่า -> Laptop(1600), Monitor(300)
  .reduce((sum, price) => sum + price, 0); // 3. รวมผลลัพธ์ -> 1600 + 300

console.log('3. Total Value:', totalValue);
// ผลลัพธ์: 1900