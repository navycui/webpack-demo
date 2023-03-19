import {sum} from './js/math'
// import {priceFormat} from './js/format'
import "./js/element";

if (module.hot) {
    module.hot.accept("./js/element",()=>{
        console.log("async call boack api ........")
    })
}


const {priceFormat} = require("./js/format");
const message = "hello world";
const names = ["abx","fsdf","24342"];

names.forEach(item => console.log(item))

console.log(sum(23,34))
console.log(priceFormat())
