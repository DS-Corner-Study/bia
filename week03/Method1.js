//추가 및 삭제 메서드

let food = ["짜장면", "피자", "치킨"];

const newlength1 = food.push("탕수육"); // 탕수육 추가 후 길이 4 반환
const removedItem1 = food.pop();       // 치킨 반환
const removedItem2 = food.shift();     // 짜장면 반환
const newlength2 = food.unshift("갈비찜"); // 갈비찜 추가 후 길이 4 반환


const arr1 = [1,2,3];
const sliced = arr1.slice(0,2); // [1,2] 반환

let arrA = [1,2];
let arrB = [3,4];
let arrC = arrA.concat(arrB);  // [1,2,3,4] 반환


//순회 메서드
function cb(item,idx){
    console.log(`${idx}번째 요소: ${item}`);    
}
const arr2 = [1,2,3];
arr.forEach(cb);     

// 0번째 요소 : 1
// 1번째 요소 : 2
// 2번째 요소 : 3 출력