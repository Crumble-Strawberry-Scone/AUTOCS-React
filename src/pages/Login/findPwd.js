import './findPwd.css'
import img from './loginMain.png'
import {Link, Navigate} from "react-router-dom";
import React from "react";

const FindPwd = () => {

    // 로그인 상태일 시 페이지로 접근 방지
    const Token = localStorage.getItem('accessToken');
    if (Token) {
        return <Navigate to="/main" replace />;
    }

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>비밀번호 찾기</h1>
                    <div className="separator" style={{width: "35%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이름</h4>
                    <input className="lo" type="text" id="name" name="name" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>아이디</h4>
                    <input className="lo" type="text" id="id" name="id" required />

                    <h4 style={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>이메일</h4>
                    <input className="lo" type="text" id="email" name="email" required />

                    <Link to="/login/fPOk" type="button" className="find">비밀번호 찾기</Link>
                </main>
            </div>
        </div>
    )
}

export default FindPwd;