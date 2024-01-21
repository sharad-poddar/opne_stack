// the most popular way to do transpiling is by using Babel
const x=5; // fixed value
let y=1; // value can be change
console.log(x,y);
y+=10;  // 11
console.log(x,y);
y='sometext' // sometext
console.log(x,y);
//x=4; // gives an error
console.log(x,y);


const t=[1,-1,6];
console.log(t);
t.push(5);
console.log(t);
// length is special keyword for array
console.log(t.length);
t.forEach((e)=>{
    console.log(e);  // 1, -1, 6, 5
})
// map -> return
// forEach -> each element, used for traversing array
// find -> return searched one(condition)

// concat makes the new array instead of changes in old one
const t1 = [1,2,3];
const t2 = t1.concat(5);
console.log(t1);
console.log(t2);

const t3 = [1,2,3]
const m1 = t3.map((e)=>{
    return e*2;
})
console.log(m1);

let m2 = [1,2,3]
m2 = m2.map((e)=>{
    return e*2;
})
console.log(m2);

// destrucing
const des = [1,2,3,4,5];
const [first, second, ...rest] = des;
console.log(first, second, rest);  // 1 2 [ 3, 4, 5 ]


// objects 
const object1 = {
    name: 'sharad',
    age: 20,
    grades: [1,2,3,4,5],
}
console.log(object1);
console.log(object1['age']);
// making new field in object
object1.address = 'bangalore'
console.log(object1);
// another way of adding slot
object1['drink']='water';
console.log(object1)


