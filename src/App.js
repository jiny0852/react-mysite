
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/main/Main';

import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import ModifyForm from './pages/user/ModifyForm';



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



        </Routes>
      </BrowserRouter>

    </div>

  );

}

export default App;