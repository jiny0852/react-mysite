//import 라이브러리

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import Footer from '../include/Footer';
import Header from '../include/Header';
import ItemBoard from './ItemBoard';


import '../../css/main.css';
import '../../css/board.css';




const BoardList = () => {

    /*---라우터 관련-------------------------------*/
    const [boardList, setBoardList] = useState([]);

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/



    /*---일반 변수--------------------------------*/


    /*---일반 메소드 -----------------------------*/
    const getBoardList = ()=>{
        axios({

            method: 'get',
            url: 'http://localhost:9000/api/boards',

            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response.data); //수신데이타
            
            setBoardList(response.data.apiData);


        }).catch(error => {
            console.log(error);

        });


    }




    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    //마운트 되었을때           
    useEffect( ()=>{

        console.log("마운트 온");

        getBoardList();


    }, [] );



    //게시글 타이틀 읽기 선택
    const handleSelectBoard = (no) => {
        console.log('게시글 하나 읽기 클릭');

    };






    return (

        <>

            <div id="wrap">

                <Header />
                {/* //header + //nav */}




                <div id="container" class="clearfix">
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
                            <div id="list">
                                <form action="" method="">
                                    <div className="form-group text-right">
                                        <input type="text" />
                                        <button type="submit" id="btn_search">검색</button>
                                    </div>
                                </form>

                                <table >
                                    <thead>
                                        <tr>
                                            <th>번호</th>
                                            <th>제목</th>
                                            <th>글쓴이</th>
                                            <th>조회수</th>
                                            <th>작성일</th>
                                            <th>관리</th>
                                        </tr>
                                    </thead>


                                        { boardList.map( ( boardVo ) => { 

                                            return(
                                                <ItemBoard key={boardVo.no}
                                                board = {boardVo} 
                                                selectBoard={handleSelectBoard}
                                                
                                                />                                            

                                        ) } ) } 
                                            
                                            
                                            {/*}
                                            return (
                                            <div>
                                            <tr>
                                                <td>{boardVo.no}</td>
                                                <td className="text-left"><Link to="" rel="noreferrer noopener">{boardVo.title}</Link></td>
                                                <td>{boardVo.userName}</td>
                                                <td>{boardVo.hit}</td>
                                                <td>{boardVo.regDate}</td>

                                                {/* 로그인했을때 
                                                <c:if test="${sessionScope.authUser.no == boardVo.userNo}">
                                                    <td><Link to="" rel="noreferrer noopener">[삭제]</Link></td>
                                                </c:if>
                                                

                                            </tr></div> ) } ) }   */}


                                </table>

                    
                                <div id="paging">
                                    <ul>
                                        <li><Link to="" rel="noreferrer noopener">◀</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">1</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">2</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">3</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">4</Link></li>
                                        <li className="active"><Link to="" rel="noreferrer noopener">5</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">6</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">7</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">8</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">9</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">10</Link></li>
                                        <li><Link to="" rel="noreferrer noopener">▶</Link></li>
                                    </ul>
                                    
                                    
                                    <div className="clear"></div>
                                </div>
                                <Link to="" id="btn_write" rel="noreferrer noopener">글쓰기</Link>
                            
                            </div>
                            {/* //list */}
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

export default BoardList;