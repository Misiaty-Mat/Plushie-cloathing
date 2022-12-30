import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.content";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';
import BearLogo from '../../assets/logo.png';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const signOutHandler = async () => await signOutUser();

    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img src={BearLogo} alt='Logo' className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;