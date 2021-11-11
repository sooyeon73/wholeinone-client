import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BurgerData } from './BurgerData';
import './style.css';
import { IconContext } from 'react-icons';
import * as S from "./style";
import dummy from "./dummy.json";

function Burger({open}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const profile=dummy.data;

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
            {profile.map(d=>(
              <S.ImageWrapper>
                <img src={d.profileImage}/>
                <S.TextWrapper>
                  <h1>{d.profileName}</h1>
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