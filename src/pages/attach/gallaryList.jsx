//import 라이브러리

import React from 'react';
import { Link } from 'react-router-dom';




import Footer from '../include/Footer';
import Header from '../include/Header';



const Form = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/

    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    return (

        <>

            <div id="wrap">

            <Header />
            {/* //header + //nav */}


            <div id="container" className="clearfix">
                <div id="aside">
                    <h2>갤러리</h2>
                    <ul>
                        <li><Link to="" rel="noreferrer noopener">일반갤러리</Link></li>
                        <li><Link to="" rel="noreferrer noopener">파일첨부연습</Link></li>
                    </ul>
                </div>
                {/* //aside */}
                
                <div id="content">
                    <div id="content-head">
                        <h3>일반갤러리</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>갤러리</li>
                                <li className="last">일반갤러리</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* //content-head */}

                    
                    <div id="gallery">
                        <div id="list">
                    
                            
                                <button id="btnImgUpload">이미지올리기</button>
                                <div className="clear"></div>

                    
                            <ul id="viewArea">
                                
                                {/* 이미지반복영역 */}
                                    <li>
                                        <div className="view" >
                                            <img className="imgItem" src="../../assets/image/Gangho-dong.jpg" />
                                            <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="view" >
                                            <img className="imgItem" src="../../assets/image/Jeongjae-Lee.jpg" />
                                            <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="view" >
                                            <img className="imgItem" src="../../assets/image/JeonSoMin.jpg" />
                                            <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="view" >
                                            <img className="imgItem" src="../../assets/image/JiseokJin.jpg" />
                                            <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="view" >
                                            <img className="imgItem" src="../../assets/image/JungWooSung.jpg" />
                                            <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                        </div>
                                    </li>
                                {/* 이미지반복영역 */}
                                
                                
                            </ul>
                        </div>
                        {/* //list */}
                    </div>
                    {/* //	gallery */}

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

export default Form;