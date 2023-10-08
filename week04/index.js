import lodash from "lodash";

const arr = [1,1,1,2,2,1,1,4,4,3,2];
const uniqueArr = lodash.uniqBy(arr);

console.log(uniqueArr);

// 1.개별 불러오기
/*
import { PI, getArea, getCircumference } from "./circle.js";
console.log(PI, getArea(1), getCircumference(1));
*/

//2.전부 불러오기
/*
import * as circle from "./circle.js";
console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));
*/

// 3.기본값으로 불러오기
/*
import circle from "./circle.js"; //기본값으로 내보냈을 때 -> 중괄호를 이용해 이름 명시 안해도 됨
console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));
*/
