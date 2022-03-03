import React, { useState, useEffect, useCallback } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
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

  
  useEffect(()=>{
    const fetchUsers = async () =>{
        try {
          setError(null);
          setLoading(true); 

          const response = await axios.get('users/mypage');
          console.log(response);

          setData((prev)=>[response.data.result]);
          if(response.data.code==2040)
            setError(2040);
        } catch (e){
            setError(e);
        }
        setLoading(false);
    };
    axios.post('/users/refresh').then(response => {
      console.log(response);
      if(response.data.isSuccess){
      const  accessToken  = response.data.result.jwt;
      console.log(accessToken);
      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      }
      fetchUsers();    
  });    
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
            <li className='navbar-toggle'>
            </li>

            {              data.length!==0?

            (
              data.map(d=>(
                <S.ImageWrapper>
                  <img src={d.userImage}/>
                  <S.TextWrapper>
                    <h1>{d.nickName}</h1>
                  </S.TextWrapper>
                </S.ImageWrapper>  
              ))
            ):
            (<S.ImageWrapper>
              <img  src={"https://via.placeholder.com/65"}/>
              <S.TextWrapper>
              <h1>            <Link to={{pathname:`/login`}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
로그인하기</Link> </h1>
              </S.TextWrapper>
            </S.ImageWrapper>  )
           }
            {BurgerData.map((item, index) => {
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