//import 라이브러리

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import '../../css/user.css';


const LoginForm = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const navigate = useNavigate();

    /*---일반 변수--------------------------------*/
    const token = localStorage.getItem('token');

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    //아이디
    const handleId = (e) => {
        setId(e.target.value);
    };
    //비번
    const handlePw = (e) => {
        setPw(e.target.value);
    };


    //전송
    const handleLogin = (e)=>{

        e.preventDefault();
        console.log("전송");

        const userVo = {
            id: id,
            password: pw
    
        }
        console.log(userVo);


        axios({

            method: 'post',// put, post, delete
            url: `${process.env.REACT_APP_API_URL}/api/users/login`,//get delete

            headers: { "Content-Type": "application/json; charset=utf-8" }, // post put

            //params: userVo, // get delete 쿼리스트링(파라미터)
            data: userVo, // put, post, JSON(자동변환됨)

 
            responseType: 'json' //수신타입

        }).then(response => {

            console.log(response); //수신데이타

            if (response.data.result === 'fail') {
                alert('로그인 실패 ' + response.data.message );
            } else {
                console.log(response.data);
                alert('로그인 성공');

                //헤더에서 토큰 꺼내기
                const token = response.headers['authorization'].split(' ')[1];
                console.log(token);

                //로컬스토리지에 토큰 저장
                localStorage.setItem("token", token);
                //로컬스토리지에 authUser 저장
                localStorage.setItem("authUser", JSON.stringify(response.data.apiData));

                navigate('/');

            }

        }).catch(error => {

            console.log(error);

        });



    };


    //로그아웃 로직
    const handleLogout  = ()=>{
        console.log('로그아웃');

        //로컬 스토리지에 token 삭제
        localStorage.removeItem('token');
        //로컬 스토리지에 authUser 삭제
        localStorage.removeItem('authUser');

        //회면 변경을 위한 상태값 변경
        
        setAuthUser(null);


    };











    return (

        <>

            <div id="wrap">

            <div id="header" className="clearfix">
                <h1>
                    <Link to="/" rel="noreferrer noopener">MySite</Link>
                </h1>

                {
                    (token != null)? (

                        <ul>
                            <li>{authUser.name} 님 안녕하세요^^</li>
                            <li><button className="btn_s" onClick={handleLogout} >로그아웃</button></li>
                            <li><Link to="/user/modifyform" className="btn_s">회원정보수정</Link></li>
                        </ul>

                    ) : (

                        <ul>
                            <li><Link to="/user/loginform" className="btn_s" rel="noreferrer noopener">로그인</Link></li>
                            <li><Link to="/user/joinform" className="btn_s" rel="noreferrer noopener">회원가입</Link></li>
                        </ul>
                        
                    ) 
                
                }
                
            </div>
            {/* //header */}

            <div id="nav">
                <ul className="clearfix">
                    <li><Link to="" rel="noreferrer noopener">입사지원서</Link></li>
                    <li><Link to="" rel="noreferrer noopener">게시판</Link></li>
                    <li><Link to="" rel="noreferrer noopener">갤러리</Link></li>
                    <li><Link to="" rel="noreferrer noopener">방명록</Link></li>
                </ul>
            </div>
            {/* //nav */}

            <div id="container" className="clearfix">
                <div id="aside">
                    <h2>회원</h2>
                    <ul>
                        <li>회원정보</li>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                </div>
                {/* //aside */}

                <div id="content">
                
                    <div id="content-head">
                        <h3>로그인</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>회원</li>
                                <li className="last">로그인</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* //content-head */}

                    <div id="user">
                        <div id="loginForm">
                            <form action="" method="" onSubmit={handleLogin} >

                                {/* 아이디 */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-uid">아이디</label> 
                                    <input type="text" id="input-uid" name="" value={id} onChange={handleId} placeholder="아이디를 입력하세요" />
                                </div>

                                {/* 비밀번호 */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-pass">비밀번호</label> 
                                    <input type="text" id="input-pass" name="" value={pw} onChange={handlePw} placeholder="비밀번호를 입력하세요"	/>
                                </div>

                                
                                {/* 버튼영역 */}
                                <div className="button-area">
                                    <button type="submit" id="btn-submit">로그인</button>
                                </div>
                                
                            </form>
                        </div>
                        {/* //loginForm */}
                    </div>
                    {/* //user */}
                </div>
                {/* //content  */}
                
            </div>
            {/* //container  */}

            <div id="footer">
                Copyright ⓒ 2020 황일영. All right reserved
            </div>
            {/* //footer */}

            </div>
            {/* //wrap */}

        </>

    );

}

export default LoginForm;