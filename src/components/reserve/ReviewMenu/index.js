import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import * as S from './style';

const ReviewMenu = ( {match} ) =>{

    
    const idx = match.params.reservationIdx;
    const history = useHistory();

    //clicked 배열로 평점 별 관리
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const [score, setScore] = useState(0);

    
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

 
        const onReview =(e)=>{             
             const data = {
                 "score" : score
             };
             try{
     
             axios.patch(`/review/${idx}`, data).then(response => {
             console.log(response);

             history.push('/myreserve');
            });

        } catch (e){
                setError(e);
            }
        };
     
  

    const handleStarClick = (e, index) => {
      e.preventDefault();
      let clickStates = [...clicked];
setScore(0);
      for (let i = 0; i < 5; i++) {
        if (i <= index) 
      {clickStates[i] = true;
     setScore(prevCount => prevCount + 1);}
        else clickStates[i] = false;
      }
  
      setClicked(clickStates);
    };
    
    const handleSubmit = (e)=>{
        if(score==0)
        {      e.preventDefault();
        }
        else{
            onReview(e);

        }

        console.log(clicked);
        console.log(score);

    }
    
    return(
   <S.Container>
       <h1>이용하신 매장을 평가해주세요!</h1>
      <S.Rating>
    
    <div>
      <S.Star
        onClick={(e) => handleStarClick(e, 0)}
      />
      <S.Star
        onClick={(e) => handleStarClick(e, 1)}
      />
      <S.Star
        onClick={(e) => handleStarClick(e, 2)}
      />
      <S.Star
        onClick={(e) => handleStarClick(e, 3)}
      />
      <S.Star
        onClick={(e) => handleStarClick(e, 4)}
      />
    </div>
  </S.Rating>
        <S.ReserveCancelButton
        onClick={(e)=>handleSubmit(e)

        }
        >평점 주기</S.ReserveCancelButton>
    </S.Container>
    );
}

export default ReviewMenu;
