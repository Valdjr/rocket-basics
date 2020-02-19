// const arr = [1,2,3,4,5];

// const n = arr.map(function(a) {
//     return a*2;
// })

// console.log(n);

// const sum = arr.reduce(function(total, next) {
//     return total+next;
// });

// console.log(sum);

// const filter = arr.filter(function(a) {
//     return a % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(a) {
//     return a === 2;
// });

// console.log(find);



// //ARROW FUNC

// const find1 = arr.filter(a => a % 2 === 1);

// console.log(find1);

// const teste = () => ({nome:"a"});

// console.log(teste());



// //PARAMETRO COM PADRAO

// function soma(a = 3, b = 4) {
//     return a + b;
// }

// console.log(soma());

// const user = {
//     nome: 'a',
//     idade: 12,
//     end: {
//         cid: 'asdsa'
//     }
// }

// const {nome, idade, end: { cid }} = user;

// console.log(nome, idade, cid);


// const obj = {
//     nome: 'vadir',
//     idade: 20,
//     cidade: 'bg'
// }

// const obj2 = {...obj, nome:"junior"};

// console.log(obj2);

import { soma, sub } from './funcoes';

console.log(soma(1,2));
console.log(sub(1,2));