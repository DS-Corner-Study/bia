//배열 - 차이점
let arrA = [1,2,3];
let arrB = [arrA,4,5,6];     // [[1,2,3],4,5,6] 저장
let arrC = [...arrA,4,5,6];  // [1,2,3,4,5,6] 저장

//객체
let objA = {
    a:1,
    b:2
};
let objB = {      
    ...objA,
    c:3,
    d:4
};

//함수
function func(a,b,c){
    console.log(a,b,c);  // 1,2,3 출력
}
let arr= [1,2,3];
func(...arr);