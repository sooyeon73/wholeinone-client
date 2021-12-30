import React, {useState, useEffect, useCallback,useRef } from "react";
import axios from "axios";
import * as S from './style';
import './style.css';
import dummy2 from "./dummy_store.json";


const Search = ({history, title}) =>{
    const [searchTerm, setSearchTerm] = useState("");
    const [term, setTerm]=useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

    const [lastElement, setLastElement] = useState(null);
    const [page, setPage]=useState(1);

    const fetchReserves = useCallback(async (keyword) =>{
        try {
            setError(null);
            setLoading(true);    
            const response = await axios.get(`stores?storeName=${term}&userLatitude=37.5533535&userLongitude=127.0235435&orderRule=1`);
            setData((prev)=>[...prev,...response.data.result]);
        } catch (e){
            setError(e);
        }
        setLoading(false);
    }
,[page]);

useEffect(() => {
    if (page <= 2) {
        fetchReserves();
        console.log(page); //스크롤 페이징 확인
    }
}, [page]);


//무한스크롤 페이징
//마지막 요소에 ref 추가해서 확인
        const observer = useRef(
            new IntersectionObserver(
                (entries) => {
                    const first = entries[0];
                    if (first.isIntersecting) {
                        setPage((no) => no + 1);
                    }
                })
        );
          
        useEffect(() => {
            const currentElement = lastElement;
            const currentObserver = observer.current;
    
            if (currentElement) {
                currentObserver.observe(currentElement);
            }
    
            return () => {
                if (currentElement) {
                    currentObserver.unobserve(currentElement);
                }
            };
        }, [lastElement]);
        

          
    
    if(loading) console.log("loading");
    if(error) console.log("error");
    if(!data) return null;

    const goBack= ()=>{
        history.goBack()
    }
    return(
        <S.Container>
            <S.BackButton onClick={goBack} />
                <S.Header>
                    <input
                        type="text"
                        placeholder="매장명으로 검색하세요"
                        className="input_search"
                        autoFocus
                        onChange={event => {
                            //setTerm(this.value);
                            //setSearchTerm(event.target.value)
                        }}
                    />
                </S.Header>
                <p>매장</p>
                {data.filter((val)=>{
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
                                <div key={key} className="loc4"> {val.storeName}</div>
                                <div key={key} className="loc5"> {val.storeBrand}</div>
                                <div key={key} className="loc6"> {val.reviewStar}</div>
                                <div key={key} className="loc7"> {val.distanceFromUser}km</div>
                            </div>
                        </li>
                    </S.LocationList>
                    );
                })}
        </ S.Container>
    );
}

export default Search