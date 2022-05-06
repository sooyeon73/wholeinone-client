import React, {useState,useEffect} from "react";
import { Link, Redirect,useHistory } from "react-router-dom";
import * as S from "./style";
import axios from "axios"
import ad from "./adData.json";

const MyPageMenu = () =>{

    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);
    
const history=useHistory();
    
    useEffect(()=>{
        const fetchUsers = async () =>{
            try {
                setError(null);
                setLoading(true);
                
                const response = await axios.get("users/mypage");
                setData(response.data.result);
            } catch (e){
               setError(e);
                console.log(e);
            }
            setLoading(false);
        };
        fetchUsers();
    },[]);
    if(!data) return null;

    const logout = () =>{
        axios.post('/users/logout').then(response => {
            console.log(response);
            alert("로그아웃 되었습니다.");
            history.push('/');
            window.location.reload();
            });
    }
    
    const adData = ad.data;
    return(
    
   <S.Container>
        <S.UserWrapper>{
            data.userImage ? 
            <img src={data.userImage} alt="userimg"/> :  <img src={"https://via.placeholder.com/65"} alt="userimg"/>
            }
           <h3>{data.nickName} 님 
           <Link to={{pathname:`/useredit`}} style={{ color: 'inherit', textDecoration: 'inherit'}}> 
           <S.Button>수정</S.Button></Link></h3>
       </S.UserWrapper>
       <S.Menu>
        <table>
        <tr>
            <th>
            <Link to={{pathname:`/myreserve`}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <h4>예약 내역</h4><br/>
                <h5>{data.cntReservation} 건</h5>
            </Link>
            </th>
            <th>
            <Link to={{pathname:`/visited`}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <h4>최근 본 매장</h4><br/>
                <h5>{data.cntLikeStore} 개</h5>
            </Link>
            </th>
            </tr>
        <tr>
            <th>
                <h4>포인트</h4><br/>
                <h5>{data.point} P</h5>
            </th>
            <th>
            <Link to={{pathname:`/mycoupon`}} style={{ color: 'inherit', textDecoration: 'inherit'}}>

                <h4>쿠폰</h4><br/>
                <h5>{data.cntCoupon} 개</h5>
                </Link>
            </th>
        </tr>
        </table>
        </S.Menu>

        <S.MenuBar>
        <Link to={{pathname:`/payment`}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <li>결제 수단</li></Link>
    <li>공지사항</li>

        <li onClick={logout}>로그아웃</li>
        </S.MenuBar>
        <S.AdContainer>
            <img src={adData.adImage} alt="adimg"/>
        </S.AdContainer>

    </S.Container>
    
  );
}

export default MyPageMenu;