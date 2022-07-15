// 1
// mes = "hello";  // mes is a property of global object it's not anymore any local variable
// console.log(mes);

// const -> let 
// var 

// let , const // varible declaration are like local scope if declared inside any block scope exist only in that block 
// var // not for it's global 

// ternary operators





//   2
// const obj = {
//     'name':'avengers',
//     'title':'infinity war movie'
// }

// const conv = (nm) => {

//     return `${v.charAt(0).toUpperCase()}${v.slice(1)} `};

// function greet(nm,t,cb) {
//     return cb(conv(nm),conv(t));
// }

// const val = greet(obj['name'], obj['title'], (nam,t) => `hello there, ${nam}${t}`);

// console.log(val);





// 3
// object property

// const obj = {
//     name: '',
//     username: '',
//     email: '',
//     password: ''
// }

// const aobj = {
//     name: 'shubham',
//     username: 'shubh',
//     password: 'avengers'
// }

// const cret = {...obj, ...aobj};
// console.log(cret);
// console.log(obj);




// 4
// map in array

const temp = [
    {de: 78, istemp: false},
    {de: 69, istemp: true},
    {de: 80, istemp: true},
    {de: 74, istemp: false}
]

temp.map((a) => {
    const { de } = a;  // destructuring property of object 
    return de > 75? {...a,ishigh:true}:a;
}).forEach(b => {

    const { ishigh } = b;
    if(ishigh){
        console.log(b.de);
    }
})


// console.log(vl);