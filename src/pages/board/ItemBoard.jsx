//import 라이브러리

import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/main.css';
import '../../css/board.css';

const ItemBoard = ( props ) => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/

    /*---일반 변수--------------------------------*/
    const { board, delBoard } = props;
    console.log(board.userNo);
    console.log(delBoard());
    


    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    return (

        <>

     

            
                <tr>
                    <td>{board.no}</td>
                    <td className="text-left"><Link to={`/board/read/${board.no}`} rel="noreferrer noopener">{board.title}</Link></td>
                    <td>{board.userName}</td>
                    <td>{board.hit}</td>
                    <td>{board.regDate}</td>
                    

                    {
                        (delBoard() === board.userNo)? (

                            <td><Link to="" rel="noreferrer noopener">[삭제]</Link></td>

                        ) : (

                            <td></td>
                            
                        ) 
                    
                    }

                        









                    
                </tr>




        </>

    );

}

export default ItemBoard;