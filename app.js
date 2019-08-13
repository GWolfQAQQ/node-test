// console.log("hello world");
// const test=require("./test");
// console.log(test.a);
const path=require("path");
const fs=require("fs");
const less=require("less");
// for(let i=1;i<=10;i++){
//     fs.writeFile(path.join("D:","a.txt"),i+"\n",()=>{
//         console.log("写入成功!");
//     })
// }
// for(let i=1;i<=10;i++){
//     fs.writeFileSync(path.join("E:","a.txt"),i+"\n",{flag:"a"});
// }
// for(let i=1;i<=10;i++){
//     fs.writeFile(path.join("temp","hello-"+i+".json"),'{\n"title":"标题'+i+'"\n}',()=>{
//                 console.log("写入成功!");
//             });
//     }

// for(let i=1;i<=10;i++){
//     let json={
//         title:`标题${i}`
//     }
//     json=JSON.stringify(json);
//     fs.writeFileSync(path.resolve("temp",`hello-${i}.json`),json,{flag:"w"});
// }
// for(let i=1;i<=10;i++){
// let json=fs.readFileSync(path.resolve("temp",`hello-${i}.json`), 'utf8');
// json=JSON.parse(json);
// // console.log(json.title);
// fs.mkdirSync(path.resolve("temp",json.title));
// }

let lessContent=fs.readFileSync(path.resolve("styles","main.less"), 'utf8');
let promise=less.render(lessContent);
promise.then((output)=>{
    fs.writeFileSync(path.resolve("styles","main.css"),output.css,{flag:"w"});
}
)