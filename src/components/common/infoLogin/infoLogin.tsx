import { login } from "src/utils/pages/pages";
import { useState } from "react";
import { Link  } from "react-router-dom";
import "./infoLogin.styles.scss";

const auth = false;

export function InfoLogin() {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => setModal(s => !s);
  const logout = () => console.log('logout');

  const infoUser = <div className='info' onClick={toggleModal}>test@gmail.com</div>;
  const btnLogin = <Link to={login.path}>Login</Link>
  const isAuth = auth ? infoUser : btnLogin;
  return (
    <>
      <div className="infoLogin">
        {isAuth}
      </div>
      {modal && <div className="modalAuth" onClick={logout}>logout</div>}
    </>
    
  )
}
