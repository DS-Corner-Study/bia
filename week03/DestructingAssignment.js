//구조분해할당 - 배열
let arr = [1,2,3];
let [one, two, three] = arr; //arr 배열의 값을 순서대로 변수에 할당

console.log(one,two,three);

//구조분해할당 - 객체
let person1 = {
    name:"이정환",
    age : 25,
    location: "경기도"
};
let {name, age, location} = person1;

console.log(name,age,location);

//함수의 매개변수가 객체일 때
function func({name:n, age:a, location:l}){
    console.log(n,a,l);
}

let person2 = {
    name:"이정환",
    age : 25,
    location: "경기도"
};

func(person2);