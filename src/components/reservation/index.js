import React, {useState, useEffect, Component} from "react";
import {useLocation} from "react-router";
import * as S from "./style";
import './style.css';
import DatePicker from "react-horizontal-datepicker";
import { BiPlus, BiMinus } from "react-icons/bi";

import { createTheme } from '@material-ui/core/styles';

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from '@material-ui/styles';
import { TimePicker } from '@material-ui/pickers'

import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';

import { withStyles } from '@mui/styles';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import MomentUtils from "@date-io/moment";

let day;
let time;
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

const selectedDay = val => {
    var d=new Date(val.getTime());
    var dd=d.getMonth()+1;
    var ddd=d.getDate();

    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var dddd=week[d.getDay()];

    console.log(dd+"월"+ddd+"일"+" ("+dddd+")");
    day=dd+"월"+ddd+"일"+ " ("+dddd+")";

    if(time!=undefined){
      //document.getElementById("tee-up_time").innerHTML=day+" "+time;
    }
    else{
      //document.getElementById("tee-up_time").innerHTML=day;
    }
};

const Reservation = ({match}) =>{


    //const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

    //console.log({props}.name);
    const [number1, setNumber1]=useState(0);
    const [number2, setNumber2]=useState(0);
    const onIncreasePerson=()=>{
        setNumber1(prevNumber=>prevNumber+1);
    };
    const onDecreasePerson=()=>{
        if(number1>=1){
            setNumber1(prevNumber=>prevNumber-1);
        }
    };
    const onIncreaseTime=()=>{
        setNumber2(prevNumber=>prevNumber+30);
    };
    const onDecreaseTime=()=>{
        if(number2>=30){
            setNumber2(prevNumber=>prevNumber-30);
        }
    };
    const selectedTime = val => {
        console.log(val)
        var mm=moment(val);
        var t=mm.hour();
        var tt=mm.minutes();
        if(t=="0" || t=="1" || t=="2" || t=="3" || t=="4" || t=="5" || t=="6" || t=="7" || t=="8" || t=="9" )t="00";
        if(tt=="0" || tt=="1" || tt=="2" || tt=="3" || tt=="4" || tt=="5" || tt=="6" || tt=="7" || tt=="8" || tt=="9" )tt="00";

        time=t+":"+tt;
        console.log(day);
        console.log(t+":"+tt);

        if(day!=undefined){
        }
        else{
        }
    };

    const [myDate, setmyDate] = useState(new Date());
    const location = useLocation();
    const data=location.state.data;
    console.log(data);

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
                        getSelectedDay={selectedDay}
                        endDate={0}
                        labelFormat={"y.M."}
                        color={"#22A8A5"}/>
                </S.DatePickerContainer>
                <S.TimePickerContainer>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack></Stack>
                    </LocalizationProvider>
                    <br/>
                    <ThemeProvider theme={materialTheme}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <TimePicker
                                id='timepicker'
                                ampm={false}
                                style={{ marginTop: "0px", width:"100%", borderRadius:"12px", border:"2px solid #22A8A5"}}
                                format={"HH:mm"}
                                inputVariant="filled"
                                TextFieldComponent={CssTextField}
                                size="medium"
                                value={myDate}
                                onChange={(value)=>{
                                    setmyDate(value)
                                    selectedTime(value)
                                }}
                                label="티업 시각"/>
                        </MuiPickersUtilsProvider>
                    </ThemeProvider>
                </S.TimePickerContainer>
            </S.SelectReservationinfo1>
            <S.SelectReservationinfo2>
                <S.Info2Container>
                    <S.Info2TitleContainer>
                        <h3>홀 수</h3>
                    </S.Info2TitleContainer>
                        <S.OneLineContainer className="hall_buttons">
                            <input type="radio" id="hall_18" name="hall" selected/><label for="hall_18">18홀</label>
                            <input type="radio" id="hall_9" name="hall"/><label for="hall_9">9홀</label>
                        </S.OneLineContainer>
                </S.Info2Container>
                <S.Info2Container>
                    <S.Info2TitleContainer>
                        <h3>인원 수</h3>
                    </S.Info2TitleContainer>
                    <S.Info2SelectContainer>
                        <S.OneLineContainer  className="hall_buttons">
                            <BiMinus onClick={onDecreasePerson}/>
                            <h3>{number1}명</h3>
                            <BiPlus onClick={onIncreasePerson}/>
                        </S.OneLineContainer>
                    </S.Info2SelectContainer>
                </S.Info2Container>
                <S.Info2Container>
                    <S.Info2TitleContainer>
                        <h3>이용 시간</h3>
                    </S.Info2TitleContainer>
                    <S.Info2SelectContainer>
                        <S.OneLineContainer>
                            <BiMinus onClick={onDecreaseTime}/>
                            <h3>{number2}분</h3>
                            <BiPlus onClick={onIncreaseTime}/>
                        </S.OneLineContainer>
                    </S.Info2SelectContainer>
                </S.Info2Container>
            </S.SelectReservationinfo2>
            <div className="footer">
            <S.Footer>
                <S.PaymentContainer>
                    <h3>총 결제금액</h3>
                    <h2>17,000원</h2>
                </S.PaymentContainer>

                {/* 예약하기 버튼입니다. */}
                <S.ReserveButton>예약하기</S.ReserveButton>
            </S.Footer>
            </div>
        </S.Container>
    );
}

export default Reservation;
