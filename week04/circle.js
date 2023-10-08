const PI = 3.141592;

function getArea(radius){  // 원의 넓이
    return PI * radius * radius; 
} 

function getCircumference(radius){ // 원의 둘레
    return 2 * PI * radius;
}

// export { PI, getArea, getCircumference }; -> 한번에 여러값 보내기
export default {
    PI,
    getArea, 
    getCircumference, 
};