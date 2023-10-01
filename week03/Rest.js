function func(param, ...rest){   // 매개변수로 사용할 변수 이름 앞에 ... 붙이기
    console.log(param);          // 1 출력
    console.log(rest);           // [2,3,4] 출력
}
func(1,2,3,4); 