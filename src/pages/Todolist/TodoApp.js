import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {useCallback, useRef, useState, useContext, useEffect} from "react";
import React from "react";
import styles from "./TodoApp.module.css"
import {callGetEmployeeAPI} from "../../apis/MemberAPICalls";
import { useSelector, useDispatch } from 'react-redux';


const TodoApp = ({ todoModal , setTodoModal } ) => {


    const dispatch = useDispatch();
    const [todos, setTodos ] = useState([
    // 초기값.
        {
            id:1,
            text:'내일 까지 보고 하기 ',
            checked: true,
        },
        {
            id:2,
            text:'8월 30일 까지 제안서 제출',
            checked: true,
        },
        {
            id:3,
            text:'영업부에 내용전달',
            checked: false,
        },
    ]);


    // useEffect(() => {
    //     // 컴포넌트가 마운트되었을 때 사원 목록을 가져오도록 API 호출
    //     // callGetEmployeeAPI(dispatch);
    //     dispatch(callGetEmployeeAPI());
    // }, []);

    // 고유 아이디 붙여주기
    const nextId = useRef(4);

    // 입력 값 전달.
    const onInsert = useCallback(   // 값을 보낼때는 useCallback을 사용하여 성능 향상
        text => {
            const todo = {
                id:nextId.current,
                text,
                checked: false,
            };
            setTodos(todos => todos.concat(todo)); // 객체 추가
            nextId.current += 1; // id에 1씩 더하기
        }

    );

    //  할일 지우기 함수 filter 사용
    const onRemove = useCallback(
        id => {
            setTodos(todos => todos.filter(todo => todo.id !== id));
        },[],
    );

    // 할일 체크 함수
    const onToggle = useCallback(
        id => {
            setTodos(todos=>
                todos.map(todo =>
                todo.id === id? { ...todo, checked: !todo.checked} : todo,
                ),
            );
        },[],
    );

    // 더블클릭시 내용 수정 함수
    const onUpdate = useCallback(
        id => {


            const todoToEdit = todos.find(todo => todo.id === id);
            const editedText = prompt('수정할 내용을 입력하세요', todoToEdit.text);

            if (editedText !== null) {
                const modifiedTodos = todos.map(todo =>
                    todo.id === id ? { ...todo, text: editedText || todo.text } : todo
                );
                setTodos(modifiedTodos);
            }
        },
        [todos]
    );

    return(
        <div className="popup" style={{opacity:"1", transform:"scaleX(1)"}}>
            <TodoTemplate todos={todos} >
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={ onRemove } onToggle={onToggle} onUpdate={onUpdate}/>
            </TodoTemplate>
        </div>
    )

}

export default TodoApp;