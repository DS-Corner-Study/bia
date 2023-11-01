import { useRef, useState } from "react"; // useFef 추가

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef(); //Ref 객체 생성

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        if (text.length < 5){
            textRef.current.focus();
        } else {
            alert(text);
            setText("");
        } 
    };

    return ( 
        <div> 
            <input ref={textRef} value={text} onChange={handleOnChange} /> 
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}
export default Body;