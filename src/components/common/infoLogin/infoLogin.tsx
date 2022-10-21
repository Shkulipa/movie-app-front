import { movieFavorites, home } from "src/utils/pages/pages";
import { Link } from "react-router-dom";
import "./infoLogin.styles.scss";
import { Loader } from "src/components";
import useModalClickOutside from 'src/hooks/useModalClickOutside';
import useLogout from './hooks/useLogout';
import useContentLoginInfo from './hooks/useContentLoginInfo';

export function InfoLogin() {
  const { isMenuOpen, toggleModal, refModal } = useModalClickOutside();
  const { logoutHandler } = useLogout({ toggleModal });
  const { isAuth, isLoading } = useContentLoginInfo({ toggleModal })

  if(isLoading) return <Loader />;

  return (
    <>
      <div className="infoLogin" ref={refModal}>
        {isAuth}
        {isMenuOpen &&
          <nav className="modalAuth">
            <Link to={home.path}>Home</Link>
            <Link to={movieFavorites.path}>Favorites Movie</Link>
            <p className="logoutBtn" onClick={logoutHandler}>logout</p>
          </nav>
        }
      </div>
    </>
    
  )
}
