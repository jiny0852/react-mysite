//import 라이브러리

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/user.css';


const JoinForm = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [agree, setAgree] = useState();

    const navigate = useNavigate();


    /*---일반 변수--------------------------------*/

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
    //이름
    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };
    //성별
    const handleGender = (e) => {
        console.log(e.target.value);
        setGender(e.target.value);
    };
    //약관
    const handleAgree = (e) => {
        console.log(e.target.value);
        setAgree(e.target.value);
    };


    //전송
    const handleJoin = (e)=>{

        e.preventDefault();
        console.log("전송");

        if (agree !== 'checked') {
            alert('약관에 동의하지 않았습니다');
        } else {

            const userVo = {
                id: id,
                password: pw,
                name: name,
                gender: gender
        
            }
            console.log(userVo);
    
    
            axios({
    
                method: 'post',// put, post, delete
                url: `${process.env.REACT_APP_API_URL}/api/users`,//get delete
    
                headers: { "Content-Type": "application/json; charset=utf-8" }, // post put
    
                data: userVo, // put, post, JSON(자동변환됨)
    
    
                responseType: 'json' //수신타입
    
            }).then(response => {
    
                console.log(response); //수신데이타

                if(response.data.apiData === 1){
                    navigate('/user/joinOk');
                }else{
                    alert("회원가입실패")
                }
    
            }).catch(error => {
    
                console.log(error);
    
            });



        }

        

    };





    return (

        <>

            <div id="wrap">

            <div id="header" className="clearfix">
                <h1>
                    <Link to="" rel="noreferrer noopener">MySite</Link>
                </h1>

                {/* 
                <ul>
                    <li>황일영 님 안녕하세요^^</li>
                    <li><a href="" class="btn_s">로그아웃</a></li>
                    <li><a href="" class="btn_s">회원정보수정</a></li>
                </ul>
                */}	
                <ul>
                    <li><Link to="" class="btn_s" rel="noreferrer noopener"> 로그인</Link></li>
                    <li><Link to="" class="btn_s" rel="noreferrer noopener"> 회원가입</Link></li>
                </ul>
                
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
                        <h3>회원가입</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>회원</li>
                                <li className="last">회원가입</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* //content-head */}

                    <div id="user">
                        <div id="joinForm">
                            <form action="" method="" onSubmit={handleJoin} >

                                {/* 아이디 */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-uid">아이디</label> 
                                    <input type="text" id="input-uid" name="" value={id} onChange={handleId} placeholder="아이디를 입력하세요" />
                                    <button type="button" id="">중복체크</button>
                                </div>

                                {/* 비밀번호 */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-pass">패스워드</label> 
                                    <input type="text" id="input-pass" name="" value={pw} onChange={handlePw} placeholder="비밀번호를 입력하세요"	/>
                                </div>

                                {/* 이름 */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="input-name">이름</label> 
                                    <input type="text" id="input-name" name="" value={name} onChange={handleName} placeholder="이름을 입력하세요" />
                                </div>

                                {/* //성별 */}
                                <div className="form-group">
                                    <span className="form-text">성별</span> 
                                    
                                    <label htmlFor="rdo-male">남</label> 
                                    <input type="radio" id="rdo-male" name="gender" value="male" onChange={handleGender} /> 
                                    
                                    <label htmlFor="rdo-female">여</label> 
                                    <input type="radio" id="rdo-female" name="gender" value="female" onChange={handleGender} /> 

                                </div>

                                {/* 약관동의 */}
                                <div className="form-group">
                                    <span className="form-text">약관동의</span> 
                                    
                                    <input type="checkbox" id="chk-agree" value='checked' name="" onChange={handleAgree} />
                                    <label htmlFor="chk-agree">서비스 약관에 동의합니다.</label> 
                                </div>
                                
                                {/* 버튼영역 */}
                                <div className="button-area">
                                    <button type="submit" id="btn-submit">회원가입</button>
                                </div>
                                
                            </form>
                        </div>
                        {/* //joinForm */}
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

export default JoinForm;