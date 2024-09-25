//import 라이브러리

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const ModifyForm = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    console.log(authUser);

    const { no } = useParams();
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    




    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    //수정버튼을 클릭했을때
    const handleUpdate = (e) => {

        e.preventDefault();
        console.log("전송");

        const personVo = {
            no: no,
            id: id,
            password: pw,
            name: name,
            gender: gender
        }
        console.log(personVo);


        //수정 값 서버에 전송

        axios({

            method: 'put',// put, post, delete

            url: `http://localhost:9000/api/persons/${no}`, //get delete

            headers: { "Content-Type": "application/json; charset=utf-8" }, // post put

            data: personVo, // put, post, JSON(자동변환됨)


            responseType: 'json' //수신타입

        }).then(response => {

            console.log(response); //수신데이타

            if (response.data.result === 'success') {
                //리다이렉트
                navigate("/list3");
            } else {
                alert(response.data.message);
            }


        }).catch(error => {

            console.log(error);

        });

    };

    //비번
    const handlePw = (e)=>{
        console.log("비번입력");
        setPw(e.target.value);
    };

    //이름
    const handleName = (e)=>{
        console.log("이름입력");
        setName(e.target.value);
    };

    //성별
    const handleGender = (e)=>{
        console.log("성별입력");
        setGender(e.target.value);
    };


    //로딩->마운트 되었을때
    useEffect( ()=>{

        console.log("마운트 되었을때");
        console.log(no);
        //서버로 no값을 보내서 no데이터 받기 그리고 화면에 출력하기

        axios({

            method: 'get', // put, post, delete
            
            url: `http://localhost:9000/api/user/modifyform/${no}`, //get delete
            
            responseType: 'json' //수신타입
            


        }).then(response => {
        
            console.log(response); //수신데이타



            if (response.data.result === 'success') {
                //성공 시 로직
                setId(response.data.apiData.id);
                setPw(response.data.apiData.pw);
                setName(response.data.apiData.name);
                setGender(response.data.apiData.gender);

            } else {
                //실패 시 로직, 리다이엑트로 보내기
                navigate("/");

            }


        
        }).catch(error => {
        
            console.log(error);
        
        });

    }, [] );


    //로그아웃 로직
    const handleLogout  = ()=>{
        console.log('로그아웃');

        //로컬 스토리지에 token 삭제
        localStorage.removeItem('token');
        //로컬 스토리지에 authUser 삭제
        localStorage.removeItem('authUser');

        //회면 변경을 위한 상태값 변경
        setToken(null);
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
                            <h3>회원정보</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원정보</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* //content-head */}

                        <div id="user">
                            <div id="modifyForm">
                                <form action="" method="" onSubmit={handleUpdate} >

                                    {/* 아이디 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <span className="text-large bold">{id}</span>
                                    </div>

                                    {/* 비밀번호 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label> 
                                        <input type="text" id="input-pass" name="" value={pw} placeholder="비밀번호를 입력하세요" onChange={handlePw}	/>
                                    </div>

                                    {/* 이름 */}
                                    <div class="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label> 
                                        <input type="text" id="input-name" name="" value={name} placeholder="이름을 입력하세요" onChange={handleName} />
                                    </div>

                                    {/* 성별 */}
                                    <div className="form-group">
                                        <span className="form-text">성별</span> 
                                        
                                        <label htmlFor="rdo-male">남</label> 
                                        <input type="radio" id="rdo-male" name="gender" value='male' onChange={handleGender} /> 
                                        
                                        <label htmlFor="rdo-female">여</label> 
                                        <input type="radio" id="rdo-female" name="gender" value='female' onChange={handleGender} /> 

                                    </div>

                                    {/* 버튼영역 */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원정보수정</button>
                                    </div>
                                    
                                </form>
                            
                            
                            </div>
                            {/* //modifyForm */}
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

export default ModifyForm;