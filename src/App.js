
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/main/Main';

import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import ModifyForm from './pages/user/ModifyForm';
import JoinOk from './pages/user/JoinOk';

import BoardList from './pages/board/BoardList';
import Read from './pages/board/Read';

import Form from './pages/attach/Form';
import Form2 from './pages/attach/Form2';
import Result from './pages/attach/Result';





import './css/mysite.css';

function App() {

  return (

    <div>

      <BrowserRouter>
        <Routes>

          <Route path='' element={<Main />} />
          
          <Route path='/user/loginform' element={<LoginForm />} />
          <Route path='/user/joinform' element={<JoinForm />} />
          <Route path='/user/modifyForm' element={<ModifyForm />} />
          <Route path='/user/joinok' element={<JoinOk />} />

          <Route path='/board/boardlist' element={<BoardList />} />
          <Route path='/board/read/:no' element={<Read />} />

          <Route path='/attach/form' element={<Form />} />
          <Route path='/attach/form2' element={<Form2 />} />
          <Route path='/attach/result' element={<Result />} />



        </Routes>
      </BrowserRouter>

    </div>

  );

}

export default App;