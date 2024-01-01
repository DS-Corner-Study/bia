import { TodoDispatchContext } from "../App";
import "./TodoItem.css"; 
import React, { useContext } from "react";

const TodoItem = ({id, content, isDone, createDate }) => {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id); 
    }

    return (
        <div className="TodoItem">
                <div className="checkbox_col">
                    <input checked={isDone} type="checkbox" onChange={onChangeCheckbox}/>
                </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};

export default React.memo(TodoItem); 