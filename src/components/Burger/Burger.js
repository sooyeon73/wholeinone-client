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

  const fetchReserves = useCallback(async () =>{
    try {
      setError(null);
          setLoading(true);    
          const response = await axios.get(`users/mypage`);
          setData((prev)=>[response.data.result]);
      } catch (e){
          setError(e);
      }
      setLoading(false);
    }
  ,[]);

useEffect(() => {
  fetchReserves();
}, []);

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
            {data && data.map(d=>(
              <S.ImageWrapper>
                <img src={d.userImage}/>
                <S.TextWrapper>
                  <h1>{d.nickName}</h1>
                </S.TextWrapper>
              </S.ImageWrapper>  
            ))}
            {BurgerData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={showSidebar}>
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