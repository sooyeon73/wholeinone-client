import React, { useState, useEffect, useCallback } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link,useHistory } from 'react-router-dom';
import { BurgerData } from './BurgerData';
import './style.css';
import { IconContext } from 'react-icons';
import * as S from "./style";
import axios from "axios";
import jquery from 'jquery';
import $ from 'jquery';

function Burger({open}) {
  const [sidebar, setSidebar] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading ]=useState(false);
  const [error, setError] = useState(null);

  const history=useHistory();
  
  useEffect(()=>{
    const fetchUsers = async () =>{
        try {
          setError(null);
          setLoading(true); 

          const response = await axios.get('users/mypage');
          console.log(response);
          
          if(response.data.isSuccess==true)
          setData((prev)=>[response.data.result]);

          if(response.data.code==403){ //사장님 계정인 경우
            axios.post('/users/logout').then(response => {
              console.log(response);
              alert("로그아웃 되었습니다.");
              history.push('/login');
              window.location.reload();
              });
      }
          
        } catch (e){
            setError(e);
        }
        setLoading(false);
    };
    fetchUsers();    
},[, sidebar]);

console.log(data);
  if(loading) console.log("loading");
  if(error) console.log("error");
  if(!data) return null;
  const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <S.Container>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} isExpanded={true}/>
          </Link>
          <div className='navsearch'><a href='/search'>성남시 분당구 구미동</a></div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' isExpanded={false}>
<<<<<<< HEAD
            <li className='navbar-toggle'>
            </li>

            { data.length!=0 ?
            (
=======
            <li className='navbar-toggle'></li>
            {axios.defaults.headers.common['Authorization'] ? (
>>>>>>> origin/kc_0316
              data.map(d=>(
                d?
                <S.ImageWrapper>
                  <img src={d.userImage}/>
                  <S.TextWrapper>
                    <h1>{d.nickName}</h1>
                  </S.TextWrapper>
<<<<<<< HEAD
                </S.ImageWrapper>  :null
            ))):
            (<S.ImageWrapper>
              <img  src={"https://via.placeholder.com/65"}/>
              <S.TextWrapper>
              <h1>            <Link to={{pathname:`/login`}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
로그인하기</Link> </h1>
              </S.TextWrapper>
            </S.ImageWrapper>  )
           }
            {BurgerData.map((item, index) => {
=======
                </S.ImageWrapper>  
              ))) : (
                <S.ImageWrapper>
                  <img  src={"https://via.placeholder.com/65"}/>
                  <S.TextWrapper>
                    <h1>
                      <Link to={{pathname:`/login`}} style={{ color: 'inherit', textDecoration: 'inherit'}}>로그인하기</Link>
                    </h1>
                  </S.TextWrapper>
                </S.ImageWrapper> 
            )}
            {BurgerData.map((item) => {
>>>>>>> origin/kc_0316
              return (
                <li key={item.id} className={item.cName} onClick={showSidebar}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <div className={sidebar? 'nav-mask active' : 'nav-mask'} onClick={showSidebar}></div>
    </S.Container>
  );
}

export default Burger;