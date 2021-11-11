import React from "react";
import * as S from './style';
import './style.css';
import dummy1 from "./dummy_location.json";
import dummy2 from "./dummy_store.json";
import { useState } from "react";

const Search = ({history, title}) =>{
    const [searchTerm, setSearchTerm] = useState("")
    const goBack= ()=>{
        history.goBack()
    }
    return(
        <S.Container>
            <S.BackButton onClick={goBack} />
                <S.Header>
                    <input
                        type="text"
                        placeholder="지역명, 매장명으로 검색하세요"
                        className="input_search"
                        autoFocus
                        onChange={event => {
                            setSearchTerm(event.target.value)
                        }}
                    />
                </S.Header>
                <p>위치</p>
                {dummy1.filter((val)=>{
                    if(searchTerm == ""){
                        return val
                    } else if (val.location.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val,key)=>{
                    return (
                        <S.LocationList>
                            <li>
                                <S.LocationIcon className="locIcon"/>
                                <div className="loc_t1">
                                    <div key={key} className="loc1"> {val.location}</div>
                                    <div key={key} className="loc2"> {val.address}</div>
                                    <div key={key} className="loc3"> {val.distance}km</div>
                                </div>
                            </li>
                        </S.LocationList>
                    );
                })}
                <p>매장</p>
                {dummy2.filter((val)=>{
                    if(searchTerm == ""){
                        return val
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val,key)=>{
                    return (
                        <S.LocationList>
                        <li>
                            <S.ImageWrapper>
                                <img src={val.storeImage}/>
                            </S.ImageWrapper>
                            <div className="loc_t2">
                                <div key={key} className="loc4"> {val.name}</div>
                                <div key={key} className="loc5"> {val.brand}</div>
                                <div key={key} className="loc6"> {val.address}</div>
                                <div key={key} className="loc7"> {val.distance}km</div>
                            </div>
                        </li>
                    </S.LocationList>
                    );
                })}
        </ S.Container>
    );
}

export default Search