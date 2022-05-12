import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios"
import useInput from "../../hooks/useInput";

axios.defaults.withCredentials = true;


const LoginMenu = ({history}) =>{
    const goBack= ()=>{
        history.goBack();
    }

    const [id, onChangeId, setId] =useInput("");
    const [pw, onChangePw, setPw] =useInput("");

    const [err0, setErr0] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        console.log(e);
        
        const data = {
            "id" : id,
            "password" : pw
        };

        try{

        axios.post('/users/login', data).then(res=>{
            if(onLoginSuccess(res))
                goBack();
        })
        .catch(error => {
            setErr0("로그인에 실패했습니다.");
            console.log(error);
        })
    }catch(e){
        console.log(e);
    }}
    const onSilentRefresh = async () => {
        let response = await axios.post('/users/refresh');
        console.log("refresh now");
        onLoginSuccess(response);
    }
    
    const onLoginSuccess = response => {
        console.log(response);
        const code = response.data.code;
        if(code==2000 || code==3000 || code==3010){
            setErr0("로그인에 실패했습니다.");
        }
        else if (code==2030){
            setErr0("비밀번호가 틀렸습니다.");
        }
        else
            {
                const  accessToken  = response.data.result.jwt;
                const jwtValidity = response.data.result.jwtValidity;
                
                // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;    
                setTimeout(onSilentRefresh, jwtValidity * 1000 - 60000);
                 // accessToken 만료하기 1분 전에 로그인 연장

                 return true;
            }
      }
      
    
    return(
   <S.Container>
       <S.Form onSubmit={onLogin} >
        <S.LoginMenu>
        <h1>
        <S.InputBar
        value={id}
        onChange={onChangeId}
        placeholder="이메일"
        required/>
        </h1>
        <h1>
        <S.InputBar
        placeholder="비밀번호"
                value={pw}
        onChange={onChangePw}
        required/>
        </h1>
        <h3>{err0}</h3>
        </S.LoginMenu>

        

        <S.LoginButton type="submit" disabled={!id || !pw}>
          로그인
        </S.LoginButton>

        <Link to={"/signup"} style={{ color: 'inherit', textDecoration: 'inherit'} }>
        <S.SignUpButton>
            회원가입
        </S.SignUpButton>
        </Link>
       
       

        </S.Form>

    </S.Container>
    );
}

export default LoginMenu;