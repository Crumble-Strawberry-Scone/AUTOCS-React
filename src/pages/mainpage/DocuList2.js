
import React, {useEffect} from 'react';
import TableCSS from '../Mypage/Table.module.css';
import {Link, NavLink} from "react-router-dom";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {callGetBoardAllAPI} from "../../apis/BoardAPICalls";
import mainstyle from "./MainContent.module.css";
import Spinner from "./Spinner-1s-200px.gif";

function DocuList2() {
    // 사원의 자유 게시판



    const dispatch = useDispatch();
    const board = useSelector(state => state.boardReducer);
    const boardList = board.data;
    console.log("boardList : " + boardList)

    // categoryNo가 6인 항목만 필터링
    const filteredBoardData = Array.isArray(boardList) ? boardList.filter(item => item.refCategoryNo === 6) : [];

    useEffect(() => {
        // 컴포넌트가 마운트되었을 때 목록을 가져오도록 API 호출
        dispatch(callGetBoardAllAPI());
    }, []);

    // boardList 아직 로드되지 않은 경우 로딩 중 메시지 표시
    if (!boardList) {
        return <div className={mainstyle.loading}>
            Loading...
            <img src={Spinner} alt="로딩중" width="5%" />
        </div>;
    }

    return (
        <div className={TableCSS.container}>
            <div className={TableCSS.section}>
                <figcaption className={TableCSS.docuList}>
                    {/*<u style={{margin:"auto 0"}}><h3><NavLink to="/board/notieE">공지</NavLink></h3></u>*/}
                    <span className={TableCSS.line}></span>
                    <ul>
                        <NavLink to="/board/freeE"><li>자유 게시판</li></NavLink><strong className={TableCSS.strong}>{filteredBoardData.length}</strong>
                        <NavLink to="/board/freeE"><MdKeyboardDoubleArrowRight/></NavLink>
                    </ul>
                </figcaption>
                <div style={{marginTop: "0%"}}  className={TableCSS.docuContent}>
                    <table className={TableCSS.docuContent}>
                        <tr>
                            <th>NO</th>

                            <th>제목</th>
                            <th>날짜</th>
                            <th>작성자</th>
                        </tr>
                        {filteredBoardData.slice(0, 2).map((item, index) => (
                            <tr ey={index} className={TableCSS.content} >
                                <td>{index + 1}</td>
                                {/*<td style={{width:"20%", height:"10%"}}><strong><button>{item.department} </button></strong></td>*/}
                                <td> <Link to={`/board/detail/${item.boardNo}`}>{item.title}</Link></td>
                                <td>{item.regist}</td>
                                <td>{item.anonymity === 'N' ? `${item.employeeName} ${item.position}` : '익명'}</td>
                            </tr>
                        ))}


                    </table>
                </div>
            </div>
        </div>
    );
}

export default DocuList2;


