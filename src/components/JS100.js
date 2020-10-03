/** Cách viết tắt và ghi đè sử dụng toán tử 3 chấm */
var b1={
  num:[1,2,3],
  status: true,
  name:'Cung'
}
console.log(b1)
//ghi đè bình thường
var b2={...b1}
b2.status=false

console.log(b2)

//ghi đè tắt: muốn ghi đè thuộc tính nào thì phảy rồi ghi tên thuộc tính đó ra
var b3={...b1, name:'Selena Gomez'}
console.log(b3)

//thêm một phần tử vào dãy cách bình thưởng
var b4={...b1}
b4.num[3]=100
console.log(b4)

//thêm một phần tử vào dãy viết tắt
var b5={...b1, num:[...b1.num, 200]}
console.log(b5)