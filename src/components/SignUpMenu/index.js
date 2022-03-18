import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios"
import useInput from "../../hooks/useInput";

axios.defaults.withCredentials = true;


const SignUpMenu = ({history}) =>{
    const goBack= ()=>{
        history.goBack();
    }

    const [id, onChangeId, setId] =useInput("");
    const [pw, onChangePw, setPw] =useInput("");
    const [pwc, onChangePwc, setPwc] =useInput("");
    const [nk, onChangeNk, setNk] =useInput("");
    const [nm, onChangeNm, setNm] =useInput("");
    const [tel1, onChangeTel1, setTel1] =useInput("");
    const [tel2, onChangeTel2, setTel2] =useInput("");
    const [tel3, onChangeTel3, setTel3] =useInput("");

    const [err0, setErr0] = useState("");
    const [err1, setErr1] = useState("");

    const onSignUp = (e) => {
       e.preventDefault();
        
        const data = {
            "email" : id,
            "password" : pw,
            "confirmPassword" : pwc,
            "nickname" : nk,
            "name" : nm,
            "tel" : `${tel1}-${tel2}-${tel3}`
        };
        try{

        axios.post('/users/sign_up', data).then(response => {
        console.log(response);
            
        const code = response.data.code;
        if(code==2020){
            setErr0("이메일 형식을 확인해주세요.");
        }
        else if (code==2031){
            setErr0("");
            setErr1("일치하지 않습니다.");
        }
        else if(code==3011){
            setErr0("이미 존재하는 아이디입니다.");
        }
        else{
            goBack();
            setErr0("");
            setErr1("");
        }

        });
    }catch(e){
        console.log(e);
    }
}
    
    return(
   <S.Container>
       <S.Form onSubmit={onSignUp}>
        <S.LoginMenu>
        <h1>
        이메일
        </h1>
        <S.InputBar
        value={id}
        onChange={onChangeId}
        placeholder="이메일"
        required/>
        <h3>{err0}</h3>

        <h1>비밀번호</h1>
        <S.InputBar
        placeholder="비밀번호"
                value={pw}
        onChange={onChangePw}
        required/>
        <h1> </h1>
        <S.InputBar
        placeholder="비밀번호 확인"
                value={pwc}
        onChange={onChangePwc}
        required/>
        <h3>{err1}</h3>
          <h1>닉네임</h1>
        <S.InputBar
        placeholder="닉네임을 입력해주세요"
                value={nk}
        onChange={onChangeNk}
        required/>
          <h1>이름</h1>
        <S.InputBar
        placeholder="이름을 입력해주세요"
                value={nm}
        onChange={onChangeNm}
        required/>

        <h1>전화 번호</h1>
        <S.InputTel
        placeholder="010"
                value={tel1}
        onChange={onChangeTel1}
        required/>
        <S.InputTel
        placeholder="1234"
                value={tel2}
        onChange={onChangeTel2}
        required/>
        <S.InputTel
        placeholder="5678"
                value={tel3}
        onChange={onChangeTel3}
        required/>

        </S.LoginMenu>


        <S.SubmitButton type="submit" >
          가입하기
        </S.SubmitButton>

       


        </S.Form>

    </S.Container>
    );
}

export default SignUpMenu;
