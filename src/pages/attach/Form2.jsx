//import 라이브러리

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




import Footer from '../include/Footer';
import Header from '../include/Header';



const Form = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [profileImg, setProfileImg] = useState();

    const navigate = useNavigate();
    const [content, setContent] = useState('');


    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    const handleContent = (e) => {
        console.log('컨텐트');
        setContent(e.target.value);
    };

    const handleTag = (e) => {
        console.log('파일');
        setProfileImg(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        //이벤트 잡고
        e.preventDefault();
        console.log('전송');

        //데이타모으고 (묶고)
        const formData = new FormData(); //첨부파일은 FormData()로 보낸다 userVo로 묶는게 아니라
        formData.append('content', content);
        formData.append('img', profileImg);
        //formData.append('name', name); //나머지도 보내는거 가능 이런 방식으로

        //서버로 전송
        axios({

            method: 'post', // put, post, delete

            url: `${process.env.REACT_APP_API_URL}/api/attachs2`,//get delete

            //headers: { "Content-Type": "application/json; charset=utf-8" }, // post put
            headers: { "Content-Type": "multipart/form-data" }, //첨부파일

            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            //data: guestbookVo, // put, post, JSON(자동변환됨)
            data: formData, // 첨부파일 multipart방식   //파라미터 처럼 받음 !!json아님!!

            responseType: 'json' //수신타입

        }).then(response => {

            console.log(response); //수신데이타
            //console.log(response.data.apiData);
            const saveName = response.data.apiData;
            console.log(saveName);

            //리다이렉트
            //navigate("/attach/result/img=" + saveName);
            navigate(`/attach/result?img=${saveName}`);


        }).catch(error => {

            console.log(error);

        });



    };





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
                        <h3>첨부파일연습</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>갤러리</li>
                                <li className="last">첨부파일연습</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* //content-head */}

                    <div id="file">
                        <form action="" method="post" onSubmit={handleSubmit} >
                            <table>
                                <tbody>
                                    <colgroup>
                                        <col style={{width: '600px'}} />
                                    </colgroup>
                                    <tr>
                                        <td className="text-left"><input type="text" name="content" value={content} onChange={handleContent} /></td>
                                    </tr>
                                    <tr>
                                        <td className="text-left"><input type="file" name="file" onChange={handleTag} /></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><button type="submit">파일업로드</button></td>
                                    </tr>

                                </tbody>

                            </table>
                        </form>
                    </div>
                    {/* //file */}


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