import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { listProductCategories } from '../actions/productActions';
import { signout } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import SearchBox from '../components/SearchBox';

function Navbar() {
  const [click, setClick] = useState(false);
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  const dispatch = useDispatch();
  const signoutHandler = () => {
     dispatch(signout());
  }
    
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GreenSmart
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link className='nav-links' to="/cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
          </li >
          {userInfo ? (
            <li className='nav-item'>
              <Link className='nav-links' to="/profile">{userInfo.name}</Link>
          </li>
          ) : (
            <li className='nav-item'>
            <Link className='nav-links' to="/signin">Sign In</Link>
            </li>  
          )}
          {userInfo && (
            <li className='nav-item'>
            <Link className='nav-links' to="/orderhistory">Orders</Link>
           </li>
          )}
          {userInfo && userInfo.isAdmin && (
               <li
               className='nav-item'
             >
               <Link
                 to='/dashboard'
                 className='nav-links'
               >
                 Admin
               </Link>
             </li>
          )}
          {userInfo && (
            <li className='nav-item'>
              <Link className='nav-links' to="#signout" onClick={signoutHandler}>Sign Out</Link>
           </li>
          )}
        </ul>
      </nav>
      <div className="nav-main">
          <ul className="categories">
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                  >
                    <button className="category">{c}</button>
                  </Link>
                </li>
              ))
            )}
          </ul>
          <Route
            render={({ history }) => (
              <SearchBox history={history}></SearchBox>
            )}
          ></Route>
        </div>
    </>
  );
}

export default Navbar;