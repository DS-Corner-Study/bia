//탐색 메서드
let arr1 = [1,3,5,7,1];
arr1.indexOf(3,0);        // 1 반환
arr1.includes(8);         // false 반환

//findIndex
function determin(item, idx, arr2) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let arr2 = [1,3,5,6,8];
arr2.findIndex(determine); // 3 반환


//변형 메서드
let arr3 = [1,2,3,4];
let newArr1 = arr3.map((item) => item * 3);  // [3,6,9,12] 반환

let arr4 = ["b", "a", "c"];
arr4.sort();            //["a", "b", "c"] 반환