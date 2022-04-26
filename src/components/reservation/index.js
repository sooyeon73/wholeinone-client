import React, {useState, useEffect, Component} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import * as S from "./style";
import * as ReserveS from "../reserve/MyReserveDetail/style"
import './style.css';
import useInput from "../../hooks/useInput";
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

import dummy from "./dummy.json";
import { GiConsoleController, GiDivert } from "react-icons/gi";

import { withRouter } from "react-router-dom";
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


const Reservation = ({location,history,match}) =>{
    const idx = match.params.storeIdx;
    // console.log(match);
    // console.log(idx);

    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

    // console.log(location);
    const [number1, setNumber1]=useState(1);
    const [number2, setNumber2]=useState(30);

    const [selectedDay, setSelectedDay]=useState(moment().format('yyyy-MM-DD'));
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedHall,setHall]=useState(9);
    const [selectedRoom,setRoom]=useState(0);
    const [selectedRoomType,setSelectedRoomType]=useState("");
    const [payAmount,setAmount]=useState(0);
    const [data,setData]=useState(location.state !== undefined && location.state.data !== undefined ?location.state.data : dummy.data);
    // const [roomData,setRoomData]=useState(null);
    const [timeData,setTimeData]=useState(dummy.data.rezTimes);
    const [request, onChangeRequest, setRequest] =useInput("");
    const [roomType, setRoomType] = useState([])

    
    const fetchPriceData = async (hole, date, time, count, period) => {
      try {
        setError(null);
        setLoading(true);

        const getPriceParam = {
          hole:hole,
          date:date,
          time:time,
          count:count,
          period:period
        };

        const response = await axios.post(`/price/${idx}/current_price`,getPriceParam);
        if (response.data.isSuccess)
          setAmount(response.data.result);

      } catch (e){
          setError(e);
      }
      setLoading(false);
    };
    
    const fetchTimeData = async (storeIdx, date, playTime, roomIdx, hall) => {
      try {
        setError(null);
        setLoading(true);
        
        const response = await axios.get(`/reservation/get-can-reservation-time?storeIdx=${storeIdx}&reservationDate=${date}&playTime=${playTime}&roomIdx=${roomIdx}&hall=${hall}`)
        if (response.data.isSuccess)
          setTimeData(response.data.result);

      } catch (e){
          setError(e);
      }
      setLoading(false);
    };

    const onIncreasePerson=()=>{
        setNumber1(prevNumber=>prevNumber+1);
        const time = moment(selectedTime,'a hh:mm').format('HH:mm');
        fetchPriceData(selectedHall,selectedDay,time,number1+1,number2);
    };

    const onDecreasePerson=()=>{
        if(number1>=1){
            setNumber1(prevNumber=>prevNumber-1);
        }
        const time = moment(selectedTime,'a hh:mm').format('HH:mm');
        fetchPriceData(selectedHall,selectedDay,time,number1-1,number2)
    };
    
    const onIncreaseTime=()=>{
      var interval = 30;
        if (selectedHall == 9){
          interval = 30;
        }
        else if (selectedHall == 18){
          interval = 60;
        }
        else if(selectedHall == 0) {
          alert("홀 수를 먼저 선택해주세요");
        }
        setNumber2(prevNumber=>prevNumber+interval);
        // if(timeData.length >= interval/30){
          fetchTimeData(idx,selectedDay,number2+interval,selectedRoom,selectedHall);

          const time = moment(selectedTime,'a hh:mm').format('HH:mm');
          fetchPriceData(selectedHall,selectedDay,time,number1,number2+interval);
    };
    const onDecreaseTime=()=>{
      var interval = 30;
        if (selectedHall == 9){
          interval = 30;
        }
        else if (selectedHall == 18){
          interval = 60;
        }
        else if(selectedHall == 0) {
          alert("홀 수를 먼저 선택해주세요")
        }
        if (number2 - interval >= 0) setNumber2(prevNumber=>prevNumber-interval);
        
        if(number2-interval >= 0){
          fetchTimeData(idx,selectedDay,number2-interval,selectedRoom,selectedHall);
          const time = moment(selectedTime,'a hh:mm').format('HH:mm');      
          fetchPriceData(selectedHall,selectedDay,time,number1-1,number2);
        }
    };
    
    const onChangeTime = event => {
        const val = event.target.value
        const time = moment(val,'a hh:mm').format('HH:mm');
        // console.log(time)
        // console.log(val);
        // console.log(time);
        setSelectedTime(val);
        fetchPriceData(selectedHall,selectedDay,time,number1,number2)
    };

    const handleSelect = event =>{
      const value = (event.target.value);
      setHall(value);
      setNumber2(0);
      setAmount(0);
      fetchTimeData(idx,selectedDay,number2,selectedRoom,value);
    };


    const onChangeDay = val => {
      const day = moment(val).format('yyyy-MM-DD');
      // console.log(day);
      setSelectedDay(day)
      const time = moment(selectedTime,'a hh:mm').format('HH:mm');
      fetchPriceData(selectedHall,day,time,number1,number2)
      fetchTimeData(idx,day,number2,selectedRoom,selectedHall);
  };

  const onChangeRoom = event => {
    const val = event.target.value
    // console.log(val)
    setRoom(val)
    fetchTimeData(idx,selectedDay,number2,val,selectedHall);
};

const onChangeRoomType = event => {
  const val = event.target.value;
  setSelectedRoomType(val);
  console.log(event.target.parentElement);
};
  const validateReservation = () =>{
    if (number1 == 0 || number2 ==0 || selectedRoom == "" ||  selectedHall ==0 || payAmount == 0 || selectedTime ==""){
      alert("예약 정보를 확인해 주세요");
    }
    else {
      history.push({
        pathname:`/pay`,
        state : {
          storeIdx:idx,
          storeName:data.storeName,
          storeLocation: data.storeLocation,
          reservationTime: moment(selectedDay,'yyyy-MM-DD').format('yyyy.MM.DD') +" "+selectedTime,
          personCount:number1,
          useTime:number2,
          selectedHall:parseInt(selectedHall),
          roomNum:parseInt(selectedRoom),
          payPrice:payAmount,
          request : request
        }
      });
    }
  };
  useEffect(()=>{
    
    const fetchData = async () =>{
      try {
          setError(null);
          setData(null);
          // setRoomData(null);
          setRoomType(null);
          setLoading(true);
          
          const response = await axios.get(`/stores/roomName?storeIdx=${idx}`);
          if(response.data.isSuccess){
            // setRoomData(response.data.result);
            const roomDatas = response.data.result;
            var roomTypes = new Map();
            for (var i =0;i <roomDatas.length ;i++){
              var key = roomDatas[i].roomType
              var r = {roomIdx:roomDatas[i].roomIdx, roomName:roomDatas[i].roomName}
              if(!roomTypes.has(key))
                roomTypes.set(key,[r])
              else {
                roomTypes.get(key).push(r)
              }
            }
            setRoomType([...roomTypes]);
            console.log(roomTypes)
        }

          if (location.state === undefined || location.state.data == undefined){
            const storeInfo = await axios.get(`/reservation/get_rez_store_info/${idx}`)
            if(storeInfo.data.isSuccess)
              setData(response.data.result);
        }
      } catch (e){
          setError(e);
      }
      setLoading(false);
  };
  fetchData();
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
            <S.SelectReservationinfo2>
                <S.Info2Container>
                    <S.Info2TitleContainer>
                        <h3>홀 수</h3>
                    </S.Info2TitleContainer>
                        <S.OneLineContainer>
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
            <S.LineBorder />
            <S.SelectRoomInfo>
            <h3>방 선택</h3>
              {/* <S.PickerContainer> */}
              {
                roomType !== null?
                // console.log(roomType)
                roomType.map(t=> (
                      <S.SelcetRoomType>
                        <S.RoomLabel
                          id={t[0]}
                          key={t[0]}
                          >
                          <input type="radio" name="roomType"
                          value= {t[0]}
                          checked={selectedRoomType == t[0]}
                          onChange={event=>onChangeRoomType(event)}
                          />
                          <h1>{t[0]}</h1>
                        </S.RoomLabel>
                      <S.RoomPickerContainer> 
                        {
                          t[1].map(r =>(
                            <label
                              hidden = {selectedRoomType != t[0]}
                              className="hall_buttons"
                              key={r.roomIdx}>
                              <input type="radio" name="room"
                              value= {r.roomIdx}
                              checked={selectedRoom == r.roomIdx}
                              onChange={event=>onChangeRoom(event)}
                              />
                              <h1>{r.roomName}</h1>
                              </label>
                            // console.log(r+" "+r.roomIdx+" "+r.roomName)
                          ))
                        }
                      </S.RoomPickerContainer>
                      </S.SelcetRoomType>
                    ))
                  :<h4>예약 가능한 방이 없습니다.</h4>
              }
              {/* </S.PickerContainer> */}
            </S.SelectRoomInfo>
            <S.LineBorder hidden = {selectedRoom == 0}/>
            {
              selectedRoom != 0 ?
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
                  <S.PickerContainer>
                    {
                      Array.isArray(timeData) && timeData!==null && timeData !== undefined?
                      timeData.map(t=>{
                        return (
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
                        )
                      }):<h3>예약 가능한 시간이 없습니다.</h3>
                    }
                  </S.PickerContainer>
              </S.SelectReservationinfo1>: null
            }
            
            <S.LineBorder />
            <S.SelectReservationinfo1>
                    <S.Info2TitleContainer>
                        <h3>요청 사항</h3>
                    </S.Info2TitleContainer>
                          <S.InputBar
                          value={request}
                          onChange={onChangeRequest}
                          placeholder="요청 사항"/>
            </S.SelectReservationinfo1>
            <div className="footer">
            <S.Footer>
                <S.PaymentContainer>
                    <h3>총 결제금액</h3>
                    <h2>{payAmount} 원</h2>
                </S.PaymentContainer>
                {/* 예약하기 버튼입니다. */}
                <S.ReserveButton
                  onClick={validateReservation}
                >예약하기</S.ReserveButton>
            </S.Footer>
            </div>
            
            
          <br/>         
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </S.Container>
    );
}

export default withRouter(Reservation);
