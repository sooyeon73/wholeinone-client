import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import axios from "axios"
import useInput from "../../../hooks/useInput";

const UserEdit = () => {

    const [data, setData]=useState([]);
    const [nk, onChangeNk, setNk] = useInput("");
    const [nm, onChangeNm, setNm] = useInput("");
    const [img, setImg]=useState();
    const [reload, setReload]=useState(0);
    const [loading,setLoading]=useState();
    
    useEffect(()=>{
        const fetchUsers = async () =>{
            try {             
                setLoading(true);
                const response = await axios.get("users/mypage");
                setData(response.data.result);
            } catch (e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchUsers();
    },[,reload]);

const history=useHistory();
    const ImageSubmit = (e)=>{
            const formData = new FormData();   
            formData.append(
              "userImage",
               e.target.files[0]
            );

            try{
              axios.post('/users/update/userImage', formData).then(response => {
                if(response.data.isSuccess){
                  setReload(reload+1);
                  alert("프로필 사진이 변경되었습니다.");

                }
            });
            }catch(e){
              console.log(e);
            }


          }

    const onSignUp = (e) => {
        e.preventDefault();
        const d = {
            "name": nm,
            "nickname": nk,
        };
        try {
            axios.post("/users/mypage/edit", d).then(response => {
                if(response.data.isSuccess)
                {
                    alert("변경이 완료되었습니다.");
                    history.push('/mypage');
                }

            });
        } catch (e) {
            console.log(e);
        }
    }
    if(loading)return null;

    return (
        <S.Container>
             <h3>{data.nickName} 님의 프로필
                </h3>
            <S.UserWrapper>
                
                <img src={data.userImage} alt="userimg" />
                <S.FileBox>
              <label for="ex_file">프로필 사진 변경</label> 
              <input 
              id="ex_file"
              type="file"
              onChange={e=>{ImageSubmit(e)}}
             /> 
            </S.FileBox>
         
               
            </S.UserWrapper>


                <S.LoginMenu>

                    <h1>닉네임</h1>
                    <S.InputBar
                        placeholder="닉네임을 입력해주세요"
                        value={nk}
                        onChange={onChangeNk}
                        required />
                    <h1>이름</h1>
                    <S.InputBar
                        placeholder="이름을 입력해주세요"
                        value={nm}
                        onChange={onChangeNm}
                        required />
                </S.LoginMenu>
                <S.SubmitButton 
                onClick={e=>onSignUp(e)}>
                    변경하기
                </S.SubmitButton>
        </S.Container>
    );
}

export default UserEdit;
