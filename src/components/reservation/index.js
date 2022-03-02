import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import * as S from "./style";
import './style.css';
import DatePicker from "react-horizontal-datepicker";
import { BiPlus, BiMinus } from "react-icons/bi";

import { createTheme } from '@material-ui/core/styles';

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from '@material-ui/styles';
import { TimePicker } from '@material-ui/pickers'

import Stack from '@mui/material/Stack';
import { dividerClasses, TextField } from '@mui/material';

import { withStyles } from '@mui/styles';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import MomentUtils from "@date-io/moment";

import { Link } from "react-router-dom";
import dummy from "./dummy.json";
import { GiConsoleController, GiDivert } from "react-icons/gi";

import 'moment/locale/ko';
const moment= require('moment') 

const CURRENT_THEME = {
    background: "#1B262C",
    el1: "#ffffff",
    el2: "#263137",
    el3: "#ffffff",
    text: "#22A8A5",
    textInv: "#22A8A5",
    main: "#22A8A5",
    secondary: "#4DBBEB",
    danger: "#22A8A5",
    warning: "",
    font1: `"Roboto Slab", "Times New Roman", serif`,
    font2: `"Roboto light"`,
};

const CssTextField = withStyles({
    root: {
      "& .MuiIconButton-root": {
        color: CURRENT_THEME.textInv
      },
      "& .MuiFilledInput-underline": {
        "&:before": {
          borderBottomColor: "transparent"
        },
        "&:after": {
          borderBottomColor: "transparent"
        }
      },
      "& .MuiFilledInput-input": {
        color: CURRENT_THEME.textInv
      },
      "& .MuiFilledInput-root": {
        borderRadius: "10px 10px 10px 10px",
        backgroundColor: CURRENT_THEME.el3,
        "&.Mui-focused": {
          //borderColor: "#1ab5e1",
          //backgroundColor: CURRENT_THEME.el2,
        }
      },
  
      "& .MuiInputLabel-formControl": {
        color: CURRENT_THEME.textInv,
        height: "auto"
      }
    }
  })(TextField);
  
  const materialTheme = createTheme({
    palette: {
      primary: {
        main: CURRENT_THEME.main
      }
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: CURRENT_THEME.el3
        }
      },
      MuiPickersCalendarHeader: {
        iconButton: {
          backgroundColor: "transparent",
          color: CURRENT_THEME.main
        },
        dayLabel: {
          color: CURRENT_THEME.textInv,
        },
        transitionContainer: {
          color: CURRENT_THEME.textInv
        }
      },
      MuiPickersBasePicker: {
        pickerView: {
          backgroundColor: CURRENT_THEME.background
        }
      },
      MuiPickersDay: {
        day: {
          color: CURRENT_THEME.textInv
        }
      },
  
      MuiDialogActions: {
        root: {
          backgroundColor: CURRENT_THEME.background
        }
      },
      MuiPickersClock: {
        clock: {
          backgroundColor: CURRENT_THEME.el2
        }
      },
      MuiPickersClockNumber: {
        clockNumber: {
          color: CURRENT_THEME.textInv
        }
      }
    }
  });


const Reservation = ({match}) =>{
    const idx = match.params.storeIdx;
    console.log(match);
    console.log(idx);

    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

    //console.log({props}.name);
    const [number1, setNumber1]=useState(0);
    const [number2, setNumber2]=useState(0);


    const onIncreasePerson=()=>{
        setNumber1(prevNumber=>prevNumber+1);
        getPriceParam.count=number1+1;
        axios.post(`/price/${idx}/current_price`,getPriceParam).then(response => {
          console.log(response.data.result);
          setAmount(response.data.result);
      });
    };
    const onDecreasePerson=()=>{
        if(number1>=1){
            setNumber1(prevNumber=>prevNumber-1);
        }
        getPriceParam.count=number1-1;
        axios.post(`/price/${idx}/current_price`,getPriceParam).then(response => {
          console.log(response.data.result);
          setAmount(response.data.result);
      });
    };
    const onIncreaseTime=()=>{
        setNumber2(prevNumber=>prevNumber+30);
        getPriceParam.period=number2+30;
        axios.post(`/price/${idx}/current_price`,getPriceParam).then(response => {
          console.log(response.data.result);
          setAmount(response.data.result);
      });
    };
    const onDecreaseTime=()=>{
        if(number2>=30){
            setNumber2(prevNumber=>prevNumber-30);
            getPriceParam.period=number2-30;
            axios.post(`/price/${idx}/current_price`,getPriceParam).then(response => {
              console.log(response.data.result);
              setAmount(response.data.result);
          });
        }
    };


    const [selectedDay, setSelectedDay]=useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedHall,setHall]=useState(0);
    const [selectedRoom,setRoom]=useState("");
    const [payAmount,setAmount]=useState(0);

    const [data,setData]=useState(dummy.data);
    const [roomData,setRoomData]=useState(dummy.data);
    const [timeData,setTimeData]=useState(dummy.data);

    var getPriceParam = {
      hole:selectedHall,
      date:selectedDay,
      time:moment(selectedTime,'a hh:mm').format('HH:mm'),
      count:number1,
      period:number2
    };

    const onChangeTime = event => {
        const val = event.target.value
        const time = moment(val,'a hh:mm').format('HH:mm');
        // console.log(time)
        console.log(val);
        console.log(time);
        setSelectedTime(val);
        getPriceParam.time=time;
        axios.post(`/price/${idx}/current_price`,getPriceParam).then(response => {
          console.log(response.data.result);
          setAmount(response.data.result);
      });
    };

    const handleSelect = event =>{
      const value = (event.target.value);
      setHall(value);
      console.log(selectedHall);
      getPriceParam.time=value;
      axios.post(`/price/${idx}/current_price`,getPriceParam).then(response => {
        console.log(response.data.result);
      });
    };


    const onChangeDay = val => {
      const day = moment(val).format('yyyy-MM-DD');
      console.log(day);
      setSelectedDay(day)
      getPriceParam.time=day;
      axios.post(`/price/${idx}/current_price`,getPriceParam).then(response => {
        console.log(response.data.result);
      });
  };

  const onChangeRoom = event => {
    const val = event.target.value
    console.log(val)
    setRoom(val)
};

  useEffect(()=>{            
      axios.post('/users/refresh').then(response => {
          console.log(response);
          const  accessToken  = response.data.result.jwt;
          console.log(accessToken);
          // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          axios.get(`/reservation/get_rez_store_info/${idx}`).then(response => {
              console.log(response.data.result);
              setData(response.data.result);
          });
      });
    },[]);
    var timeIdx=0;
    if(!data) return null;
    return(
        <S.Container>
            <S.StoreinfoContainer>
                <h3>{data.storeName}</h3>
                <h3>{data.storeLocation}</h3>
            </S.StoreinfoContainer>
            <S.LineBorder />
            <S.SelectReservationinfo1>
                <h3>날짜 선택</h3>
                <S.DatePickerContainer>
                    <DatePicker
                        id='datepicker'
                        getSelectedDay={(date)=>onChangeDay(date)}
                        endDate={0}
                        labelFormat={"y.M."}
                        color={"#22A8A5"}/>
                </S.DatePickerContainer>
                <S.PickerContainer
                  >
                  {
                      timeData.rezTimes.map(t=>(
                        
                            <label
                            className="hall_buttons"
                            key={timeIdx++}>
                            <input type="radio" name="time"
                            value={`${moment(t.time,'HH:mm').format('a hh:mm')}`}
                            checked={selectedTime == `${moment(t.time,'HH:mm').format('a hh:mm')}`}
                            onChange={event=>onChangeTime(event)}
                            />
                            <h1>{t.time}</h1>
                            </label>
                            ))
                  }
                </S.PickerContainer>
            </S.SelectReservationinfo1>
            <S.LineBorder />
            <S.SelectRoomInfo>
            <h3>방 선택</h3>
            {
                roomData.rooms.map(r=> {
                  return(
                    <div>
                    <h4>{r.roomName}</h4>
                    <S.PickerContainer>
                    {
                      r.roomNums.map(n=>(
                        <label
                        className="hall_buttons"
                        key={n.roomNum}>
                        <input type="radio" name="room"
                        value= {`${r.roomName}:${n.roomNum}`}
                        checked={selectedRoom == `${r.roomName}:${n.roomNum}`}
                        onChange={event=>onChangeRoom(event)}
                        />
                        <h1>{n.roomNum}</h1>
                        </label>
                      ))
                    }
                    </S.PickerContainer>
                    </div>
                    );
            })
            }
            </S.SelectRoomInfo>
            <S.LineBorder />
            <S.SelectReservationinfo2>
                <S.Info2Container>
                    <S.Info2TitleContainer>
                        <h3>홀 수</h3>
                    </S.Info2TitleContainer>
                        <S.OneLineContainer >
                            <label 
                            style={{height: '100%'}}
                            className="hall_buttons">
                            <input type="radio" id="hall_18" name="hall"
                            value={18}
                            checked={selectedHall == 18}
                            onChange={event=>handleSelect(event)}
                            />
                            <h1>18홀</h1></label>

                            <label 
                            style={{height: '100%'}}
                            className="hall_buttons">
                            <input type="radio" id="hall_9" name="hall"
                            value={9}
                            checked={selectedHall == 9}
                            onChange={event=>handleSelect(event)}
                            />
                            <h1>9홀</h1></label>
                        </S.OneLineContainer>
                </S.Info2Container>
                <S.Info2Container>
                    <S.Info2TitleContainer>
                        <h3>인원 수</h3>
                    </S.Info2TitleContainer>
                    <S.Info2SelectContainer>
                        <S.OneLineContainer  >
                            <BiMinus
                             onClick={onDecreasePerson}/>
                            <h3>{number1}명</h3>
                            <BiPlus
                            onClick={onIncreasePerson}/>
                        </S.OneLineContainer>
                    </S.Info2SelectContainer>
                </S.Info2Container>
                <S.Info2Container>
                    <S.Info2TitleContainer>
                        <h3>이용 시간</h3>
                    </S.Info2TitleContainer>
                    <S.Info2SelectContainer>
                        <S.OneLineContainer>
                            <BiMinus 
                            onClick={onDecreaseTime}/>
                            <h3>{number2}분</h3>
                            <BiPlus
                            onClick={onIncreaseTime}/>
                        </S.OneLineContainer>
                    </S.Info2SelectContainer>
                </S.Info2Container>
            </S.SelectReservationinfo2>
            <div className="footer">
            <S.Footer>
                <S.PaymentContainer>
                    <h3>총 결제금액</h3>
                    <h2>{payAmount} 원</h2>
                </S.PaymentContainer>

                {/* 예약하기 버튼입니다. */}
                <Link to={{
                  pathname:`/pay`,
                  state : {
                    storeIdx:idx,
                    storeName:data.storeName,
                    reservationTime: moment(selectedDay,'yyyy-MM-DD').format('yyyy.MM.DD') +" "+selectedTime,
                    personCount:number1,
                    useTime:number2,
                    selectedHall:parseInt(selectedHall),
                    roomSchema:selectedRoom.split(':')[0],
                    roomNum:parseInt(selectedRoom.split(':')[1]),
                    payPrice:payAmount
                  }
                }}>
                <S.ReserveButton>예약하기</S.ReserveButton></Link>
            </S.Footer>
            </div>
        </S.Container>
    );
}

export default Reservation;
