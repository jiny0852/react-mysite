//import 라이브러리

import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



import Footer from '../include/Footer';
import Header from '../include/Header';

const Read = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const { no } = useParams(); 

    const [boardVo, setBoardVo] = useState([]);

    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/    
    const getBoardVo = ()=>{
    axios({

        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/api/boards/${no}`,

        responseType: 'json' //수신타입
    }).then(response => {
        console.log(response.data); //수신데이타
        
        setBoardVo(response.data.apiData);


    }).catch(error => {
        console.log(error);

    });


}




    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    //마운트 되었을때 
    useEffect( ()=>{

        console.log("read");
        getBoardVo();
        


    }, [] );









    return (

        <>

            <div id="wrap">

                <Header />
                {/* //header + //nav */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>게시판</h2>
                        <ul>
                            <li><Link to="" rel="noreferrer noopener">일반게시판</Link></li>
                            <li><Link to="" rel="noreferrer noopener">댓글게시판</Link></li>
                        </ul>
                    </div>
                    {/* //aside */}

                    <div id="content">

                        <div id="content-head">
                            <h3>일반게시판</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>게시판</li>
                                    <li className="last">일반게시판</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* //content-head */}

                        <div id="board">
                            <div id="read">
                                <form action="#" method="get">
                                    {/* 작성자 */}
                                    <div className="form-group">
                                        <span className="form-text">작성자</span>
                                        <span className="form-value">{boardVo.userName}</span>
                                    </div>
                                    
                                    {/* 조회수 */}
                                    <div className="form-group">
                                        <span className="form-text">조회수</span>
                                        <span className="form-value">{boardVo.hit}</span>
                                    </div>
                                    
                                    {/* 작성일 */}
                                    <div className="form-group">
                                        <span className="form-text">작성일</span>
                                        <span className="form-value">{boardVo.regDate}</span>
                                    </div>
                                    
                                    {/* 제목 */}
                                    <div className="form-group">
                                        <span className="form-text">제 목</span>
                                        <span className="form-value">{boardVo.title}</span>
                                    </div>
                                
                                    {/* 내용 */}
                                    <div id="txt-content">
                                        <span className="form-value" >
                                            {boardVo.content}
                                            여기에는 본문내용이 출력됩니다.<br/>
                                            여기에는 본문내용이 출력됩니다.<br/>
                                            여기에는 본문내용이 출력됩니다.<br/>
                                            여기에는 본문내용이 출력됩니다.<br/>
                                            여기에는 본문내용이 출력됩니다.<br/>
                                            여기에는 본문내용이 출력됩니다.<br/>
                                            여기에는 본문내용이 출력됩니다.<br/>
                                            여기에는 본문내용이 출력됩니다.<br/>
                                        </span>
                                    </div>
                                    
                                    <Link to="" id="btn_modify" rel="noreferrer noopener">수정</Link>
                                    <Link to="/board/boardlist" id="btn_modify" rel="noreferrer noopener">목록</Link>
                                    
                                    
                                </form>
                                {/* //form */}
                            </div>
                            {/* //read */}
                        </div>
                        {/* //board */}
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

export default Read;