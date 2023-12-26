import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState, useMemo } from "react"; 

const TodoList = ({ todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState(""); //state변수 search 생성
    const onChangeSearch = (e) => { //검색폼의 이벤트 핸들러 onChangeSearch 만듦
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === "" 
            ? todo  //검색어인 search가 빈문자열이면 todo그대로 반환
            : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase())); // 그렇지 않으면 search 내용과 일치하는 아이템만 필터링해 반환
    }

    const analyzeTodo = useMemo(() => {
        const totalCount = todo.length;
        const doneCount = todo.filter((it)=> it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todo]);

    const { totalCount, doneCount, notDoneCount } = analyzeTodo;

    return (
        <div className="TodoList">
            <h4>Todo List🌱</h4>
            <div>
                <div>총개수: {totalCount}</div>
                <div>완료된 할 일: {doneCount}</div>
                <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
            </div>
            <input
                value={search}  //value로 state변수 search설정
                onChange={onChangeSearch} //검색폼의 onChange 이벤트 핸들러를 onChangeSearch로 만듦
                className="searchbar"
                placeholder="검색어를 입력하세요"
            />
            <div className="list_wrapper">
                {getSearchResult().map((it) => (  //getSearchResult의 결과를 map을 이용하여 리스트로 렌더링
                    <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    )

};

export default TodoList;