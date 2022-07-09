
// const fs = require('fs')
// const path = require('path')


//  demo = async ()=>{
//   await fs.readFile(path.resolve(__dirname, './Readme.md'),'utf-8', (err,data)=>{
//     console.log(data);
//   })
//   return 456
// }

// // console.log(demo().then(res=>{console.log(res);}));
// demo().then(res=>{
//   console.log(res, 'res');
// })

async function async1(){
  console.log('1');
  await async2();
  console.log('2');
}
async function async2(){
  console.log('3');
}
console.log('4')
setTimeout(function(){
  console.log('5')
}, 0);

async1();

new Promise(function(resolve){
  console.log('6');
  resolve();
}).then(function(){
  console.log('7')
});
console.log('8')



//  main 4
//  宏任务 
// 微任务 1

// 413