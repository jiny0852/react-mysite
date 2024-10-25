//import 라이브러리

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../css/ai.css';


import Footer from '../include/Footer';
import Header from '../include/Header';



const Chat = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [question, SetQuestion] = useState('');
    const [msgList, setMsgList] = useState([]);


    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    const handleQuestion = (e) => {
        // console.log(e.target.value);
        SetQuestion(e.target.value);

    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        // console.log("전송");
        console.log(question);


        //질문 리스트에 추가
        //새로운 주소의 배열을 파라미터로 전달해야한다
        setMsgList((prevMsgList)=>{  //setMsgList(newMsgList)

            const msgVo = {
                role: "user",
                msg: question
            }

            const newMsgList = [...prevMsgList, msgVo]
            console.log(newMsgList);  //msgList.push(question)

            return newMsgList
        });
        



        //question을 spring으로 보낸다
        //서버로 전송
        axios({

            method: 'post', // put, post, delete

            url: `${process.env.REACT_APP_API_URL}/api/ai/chats`,//get delete

            params: {question: question}, // get delete 쿼리스트링(파라미터)
            //data: {question: question}, // put, post, JSON(자동변환됨)
            //data: formData, // 첨부파일 multipart방식   //파라미터 처럼 받음 !!json아님!!

            responseType: 'json' //수신타입

        }).then(response => {

            console.log(response.data.apiData);

            const answer = response.data.apiData

            const msgVo = {
                role: "bot",
                msg: answer
            }

            setMsgList((prevMsgList)=>{ 

                const newMsgList = [...prevMsgList, msgVo]
                console.log(newMsgList); 
    
                return newMsgList
            });

        }).catch(error => {

            console.log(error);

        });







        SetQuestion('');

    }








    return (

        <>

            <div id="wrap">

            <Header />
            {/* //header + //nav */}


            <div id="container" className="clearfix">
                <div id="aside">
                    <h2>생성형AI</h2>
                    <ul>
                        <li><Link to="" rel="noreferrer noopener">챗봇</Link></li>
                        <li><Link to="" rel="noreferrer noopener">이미지생성</Link></li>
                    </ul>
                </div>
                {/* //aside */}

                <div id="content">

                    <div id="content-head">
                        <h3>챗봇</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>생성형AI</li>
                                <li className="last">챗봇</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* //content-head */}

                    <div id="ai">


                        <div id="chat-box">

                            {msgList.map(( msgVo)=>{

                                return (

                                    (msgVo.role == "user")?(
                                        <div className="user-msg-box clearfix" >
                                            <div className="user-msg">{msgVo.msg}</div>
                                        </div>
                                    ):(
                                        <div className="bot-msg-box clearfix">
                                            <div className="bot-msg">{msgVo.msg}</div>
                                        </div>
                                    )



                            )})}


                            
{/*                         
                            <div className="user-msg-box clearfix" >
                                <div className="user-msg">영업시간은?</div>
                            </div>

                            <div className="bot-msg-box clearfix">
                                <div className="bot-msg">평일 오전9시부터 오후6시까지</div>
                            </div>
                            
                            
                            <div className="user-msg">영업시간은?</div>
                            <div className="bot-msg">평일 오전9시부터 오후6시까지</div>
                            <div className="user-msg">영업시간은?</div>
                            <div className="bot-msg">평일 오전9시부터 오후6시까지</div> */}

                        </div>

                        <form action="" method="" onSubmit={handleSubmit} >
                            <input id="txt-question" type="text" name="" value={question} onChange={handleQuestion} />
                            <button id="btn-sendMsg" type="submit" >보내기</button>
                        </form>


                    </div>
                    {/* //ai */}


                </div>
                {/* //content  */}
            </div>
            {/* //container  */}


            <Footer />
            {/* //footer */}
            </div>
            {/* //wrap */}

        </>

    );

}

export default Chat;