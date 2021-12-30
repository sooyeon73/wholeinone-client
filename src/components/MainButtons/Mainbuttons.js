import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import { IconContext } from 'react-icons';
import './style.css';
import * as S from "./style";
import dummy from "./dummy.json"

import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from '@material-ui/styles';
import { TimePicker } from '@material-ui/pickers'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { grey } from '@mui/material/colors';
import { TextField } from '@mui/material';

import { withStyles } from '@mui/styles';

import MobileTimePicker from '@mui/lab/MobileTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import MomentUtils from "@date-io/moment";
import { Global } from '@emotion/react';
import DatePicker from "react-horizontal-datepicker";

import jquery from 'jquery';
import $ from 'jquery';

const data = dummy.data;

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
  
  const styles = {
    paper: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      backgroundColor: CURRENT_THEME.el3,
      borderColor: CURRENT_THEME.danger
    },
    inputIcons: {
      padding: 2,
      color: CURRENT_THEME.textInv
    },
    input: {
      flex: 1,
      marginLeft: 8,
      color: CURRENT_THEME.textInv
    }
  };
  
  const StyledDateTime = withStyles({
    "& .MuiPickersToolbar-toolbar": {
      backgroundColor: CURRENT_THEME.textInv
    },
    root: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: CURRENT_THEME.textInv,
          "& .MuiPickersToolbar-toolbar": {
            backgroundColor: CURRENT_THEME.textInv
          }
        }
      }
    }
  })(MobileTimePicker);
  
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

const drawerBleeding = 0;
const drawerBleeding_option = 0
const drawerBleeding_lists = 0

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));
const Root_option = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));
const Root_lists = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));
const StyledBox_option = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));
const StyledBox_lists = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 120,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'relative',
  textAlign: 'center',
  top: 8,
  left: '50%',
  transform: 'translateX(-50%)'
}));
const Puller_option = styled(Box)(({ theme }) => ({
  width: 120,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'relative',
  textAlign: 'center',
  top: 8,
  left: '50%',
  transform: 'translateX(-50%)'
}));
const Puller_lists = styled(Box)(({ theme }) => ({
  width: 120,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'relative',
  textAlign: 'center',
  top: 8,
  left: '50%',
  transform: 'translateX(-50%)'
}));

const CustomSlider = withStyles({
    root: {
        color: "#22A8A5",
        height: 3,
    },
    track: {
        height: 6,
        borderRadius: 6,
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: "#fff",
        border: "1px solid currentColor",
        marginTop: 0,
        marginLeft: 0,
        boxShadow: "#ebebeb 2px 2px 2px",
        "&:focus, &:hover, &$active": {
            boxShadow: "#ccc 0 2px 3px 1px",
        },
        color: "#fff",
    },
})(Slider);

const marks = [
    {value: 0,label: '현위치',},
    {value: 1,label: '1km',},
    {value: 2,label: '2km',},
    {value: 3,label: '4km',},
    {value: 4,label: '6km',},
    {value: 5,label: '8km',},
];

function valueLabelFormat(value) {
    const units = ['현위치', 'km'];
  
    let unitIndex = 0;
    let scaledValue = value;
  
    while (scaledValue > 0 && unitIndex < 1) {
      unitIndex += 1;
      if(scaledValue>=3){scaledValue+=1;}
      if(scaledValue>=5){scaledValue+=1;}
      if(scaledValue>=7){scaledValue+=1;}
    }
  
    if(unitIndex==0){
        return `${units[unitIndex]}`;
    }
    else return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
    return value;
}

function valuetext(value) {
    return `${value}°C`;
  }

function Mainbuttons(props, props_option, props_lists) {

    const { window } = props;
    const { window_option } = props_option;
    const window_lists = props_lists;

    const [open, setOpen] = React.useState(false);
    const [open_option, setOpen_option] = React.useState(false);
    const [open_lists, setOpen_lists] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const toggleDrawer_option_filter = (newOpen) => () => {
      setOpen_option(newOpen);
    };
    const toggleDrawer_lists = (newOpen) => () => {
      setOpen_lists(newOpen);
    };
  
  
    const container = window !== undefined ? () => window().document.body : undefined;
    const container_option = window_option !== undefined ? () => window_option().document.body : undefined;
    const container_lists = window_lists !== undefined ? () => window_lists().document.body : undefined;

    const [timefilter, settimefilter] = useState(false);
    const showTimefilter = () => settimefilter(!timefilter);

    const [filter, setfilter] = useState(false);
    const showfilter = () => setfilter(!filter);

    const [lists, setlists] = useState(false);
    const showlists = () => setlists(!lists);

    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    let day;
    let time;
    const moment= require('moment') 

    const selectedDay = val => {
        var d=new Date(val.getTime());
        var dd=d.getMonth()+1;
        var ddd=d.getDate();

        var week = ['일', '월', '화', '수', '목', '금', '토'];
        var dddd=week[d.getDay()];

        console.log(dd+"월"+ddd+"일"+" ("+dddd+")");
        day=dd+"월"+ddd+"일"+ " ("+dddd+")";

        if(time!=undefined){
          document.getElementById("tee-up_time").innerHTML=day+" "+time;
        }
        else{
          document.getElementById("tee-up_time").innerHTML=day;
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
          document.getElementById("tee-up_time").innerHTML=day+" "+time;
        }
        else{
          document.getElementById("tee-up_time").innerHTML=time;
        }
    };

    const [myDate, setmyDate] = useState(new Date());

    return (
        <>
            <S.Container>
                <IconContext.Provider value={{ color: '#000' }}>
                    <div className='btn_filter' onClick={toggleDrawer_option_filter(true)}>
                        <BiIcons.BiSliderAlt className='filter_icon'/>
                    </div>

                    <div className='btn_time' onClick={toggleDrawer(true)}>
                        <BiIcons.BiTimeFive className='time_icon'/>
                    </div>

                    <div className='btn_bottom_list_view' onClick={toggleDrawer_lists(true)}>
                        <FaIcons.FaBars className='list_drawer_icon'/>
                        <span className='list_drawer_title'>목록 보기</span>
                    </div>

                    <Root_option>
                        <CssBaseline />
                            <Global
                                styles={{
                                '.MuiPaper-root': {
                                    height: `calc(50% - ${drawerBleeding_option}px)`,
                                    overflow: 'visible',
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    },
                                }}
                            />
                            <SwipeableDrawer
                                container={container_option}
                                anchor="bottom"
                                open={open_option}
                                onClose={toggleDrawer_option_filter(false)}
                                onOpen={toggleDrawer_option_filter(true)}
                                swipeAreaWidth={drawerBleeding_option}
                                disableSwipeToOpen={false}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                            >
                            <StyledBox_option
                                sx={{
                                    position: 'relative',
                                    top: -drawerBleeding-0,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8,
                                    visibility: 'visible',
                                    right: 0,
                                    left: 0,
                                    height: '100px'
                                }}
                            >
                                <Puller_option />
                                <div>
                                <div className='filter_menu_title'><h2>필터 설정</h2></div>
                                </div>
                            </StyledBox_option>
                            <StyledBox_option
                                sx={{
                                    position: 'relative',
                                    px: 2,
                                    pb: 2,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    visibility: 'visible',
                                    height: '100%',
                                    overflow: 'auto',
                                }}
                            >
                            <div className='filter_menu_subtitle'>
                                <div className='filter_brand_off'>
                                    <BiIcons.BiCheck className='check_icon' color="#fff"/>
                                </div>  
                                <h3>브랜드</h3>
                            </div>
                            <div className='filter_menu_buttons'>
                                <input type="checkbox" id="brand_checkbox1" name="brand"/><label classname="boxlabel" for="brand_checkbox1">골프존</label>
                                <input type="checkbox" id="brand_checkbox2" name="brand"/><label for="brand_checkbox2">골프존파크</label>
                                <input type="checkbox" id="brand_checkbox3" name="brand"/><label for="brand_checkbox3">레드골프</label>
                                <input type="checkbox" id="brand_checkbox4" name="brand"/><label for="brand_checkbox4">시티존</label>
                                <input type="checkbox" id="brand_checkbox5" name="brand"/><label for="brand_checkbox5">오케이온</label>
                                <input type="checkbox" id="brand_checkbox8" name="brand"/><label for="brand_checkbox8">SG골프</label>
                                <input type="checkbox" id="brand_checkbox6" name="brand"/><label for="brand_checkbox6">프렌즈스크린T</label>
                                <input type="checkbox" id="brand_checkbox7" name="brand"/><label for="brand_checkbox7">프렌즈스크린G</label>
                            </div>
                            </StyledBox_option>
                            <StyledBox_option
                                sx={{
                                    position: 'relative',
                                    px: 2,
                                    pb: 2,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    visibility: 'visible',
                                    height: '100%',
                                    overflow: 'auto',
                                }}
                            >
                            <div className='filter_menu_subtitle'>
                                <div className='filter_facility_off'>
                                    <BiIcons.BiCheck className='check_icon' color="#fff"/>
                                </div> 
                                <h3>시설</h3>   
                            </div>
                            <div className='filter_menu_buttons'>
                                <input type="checkbox" name="option" id="facility_checkbox1"/><label for="facility_checkbox1">왼손타석</label>
                                <input type="checkbox" name="option" id="facility_checkbox2"/><label for="facility_checkbox2">주차시설</label>
                                {/*<input type="checkbox" name="option" id="facility_checkbox3"/><label for="facility_checkbox3">새벽영업</label>*/}
                                <input type="checkbox" name="option" id="facility_checkbox4"/><label for="facility_checkbox4">단체석</label>
                                <input type="checkbox" name="option" id="facility_checkbox5"/><label for="facility_checkbox5">바닥스크린</label>
                                {/*<input type="checkbox" name="option" id="facility_checkbox6"/><label for="facility_checkbox6">무빙/듀얼</label>*/}
                                <input type="checkbox" name="option" id="facility_checkbox7"/><label for="facility_checkbox7">프로교습</label>
                                <input type="checkbox" name="option" id="facility_checkbox8"/><label for="facility_checkbox8">장비보관</label>
                            </div>


                            </StyledBox_option>
                            <StyledBox_option
                                sx={{
                                    position: 'relative',
                                    px: 2,
                                    pb: 2,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    visibility: 'visible',
                                    height: '100%',
                                    overflow: 'auto',
                                }}
                            >
                            <div className='filter_menu_subtitle'>
                                <div className='filter_distance_off'>
                                    <BiIcons.BiCheck className='check_icon' color="#fff"/>
                                </div>
                                <h3>거리</h3>
                            </div>
                            <div className='filter_distance_slider'>
                                <Box sx={{ width: 250 }}>
                                        <CustomSlider
                                            value={value}
                                            aria-label="distance"
                                            defaultValue={0}
                                            getAriaValueText={valuetext}
                                            scale={calculateValue}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valueLabelFormat}
                                            valueLabelFormat={valueLabelFormat}
                                            onChange={handleChange}
                                            step={1}
                                            marks={marks}
                                            min={0}
                                            max={5}
                                            aria-labelledby="non-linear-slider"
                                        />
                                </Box>
                            </div>

                              
                            </StyledBox_option>
                            <div className='time_filter_apply_area'>
                                <div className='time_filter_reset_btn'>
                                    <span className='btn_center'>재설정</span>
                                </div>
                                <div className='time_filter_apply_btn'>
                                    <span className='btn_center'>필터 적용</span>
                                </div>
                            </div>
                        </SwipeableDrawer>
                    </Root_option>
                    <nav className={filter ? 'filter_menu active' : 'filter_menu'}>
                        <div className='filter_menu_drawer'>
                            <div className='filter_brand_onoff'>

                            </div>
                            <div className='filter_menu_subtitle'>
                                <div className='filter_facility_off'>
                                    <BiIcons.BiCheck className='check_icon' color="#fff"/>
                                </div> 
                                <h3>시설</h3>   
                            </div>
                            <div className='filter_facility_onoff'>

                            </div>

                            <div className='filter_menu_subtitle'>
                                <div className='filter_distance_off'>
                                    <BiIcons.BiCheck className='check_icon' color="#fff"/>
                                </div>
                                <h3>거리</h3>
                            </div>
                            <div className='filter_distance_slider'>
                                <Box sx={{ width: 250 }}>
                                    {/*<ThemeProvider theme={muiTheme}>*/}
                                        <CustomSlider
                                            value={value}
                                            aria-label="distance"
                                            defaultValue={0}
                                            getAriaValueText={valuetext}
                                            scale={calculateValue}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valueLabelFormat}
                                            valueLabelFormat={valueLabelFormat}
                                            onChange={handleChange}
                                            step={1}
                                            marks={marks}
                                            min={0}
                                            max={5}
                                            aria-labelledby="non-linear-slider"
                                        />
                                    {/*</ThemeProvider>*/}
                                </Box>
                            </div>


                            <div className='filter_apply_area'>
                                <div className='filter_reset_btn'>
                                    <span className='btn_center'>재설정</span>
                                </div>
                                <div className='filter_apply_btn'>
                                    <span className='btn_center'>필터 적용</span>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <Root>
                        <CssBaseline />
                            <Global
                                styles={{
                                '.MuiPaper-root': {
                                    height: `auto`,
                                    overflow: 'visible',
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    },
                                }}
                            />
                            <SwipeableDrawer
                                container={container}
                                anchor="bottom"
                                open={open}
                                onClose={toggleDrawer(false)}
                                onOpen={toggleDrawer(true)}
                                swipeAreaWidth={drawerBleeding}
                                disableSwipeToOpen={false}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                            >
                            <StyledBox
                                sx={{
                                    position: 'relative',
                                    top: -drawerBleeding-0,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    visibility: 'visible',
                                    right: 0,
                                    left: 0,
                                }}
                            >
                                <Puller />
                                <div className='time_filter_title'>
                                  <span className='time_filter_title_text'>티업 일시</span>
                                  <span id="tee-up_time" className='time_filter_time_text'>티업 날짜를 선택해주세요!</span>
                                </div>
                            </StyledBox>
                            <StyledBox
                                sx={{
                                    position: 'relative',
                                    px: 2,
                                    pb: 2,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    visibility: 'visible',
                                    height: '120px',
                                    overflow: 'auto',
                                }}
                            >
                                <div className='time_filter_select_day'>
                                    <DatePicker id='datepicker'
                                        getSelectedDay={selectedDay}
                                        endDate={0}
                                        labelFormat={"y.M."}
                                        color={"#22A8A5"}
                                    />
                                </div>
                            </StyledBox>
                            <StyledBox
                                sx={{
                                    position: 'relative',
                                    px: 2,
                                    pb: 2,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    visibility: 'visible',
                                    height: '120px',
                                    overflow: 'auto',
                                }}
                            >
                                <div className='time_filter_select_time'>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack>
                                        </Stack>
                                    </LocalizationProvider>
                                    <ThemeProvider theme={materialTheme}>
                                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                            <TimePicker id='timepicker'
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
                                                label="티업 시각"
                                            />
                                        </MuiPickersUtilsProvider>
                                    </ThemeProvider>
                                </div>
                            </StyledBox>
                            <div className='time_filter_apply_area'>
                                <div className='time_filter_reset_btn'>
                                    <span className='btn_center'>재설정</span>
                                </div>
                                <div className='time_filter_apply_btn'>
                                    <span className='btn_center'>필터 적용</span>
                                </div>
                            </div>
                        </SwipeableDrawer>
                    </Root>






                    <Root_lists>
                        <CssBaseline />
                            <Global
                                styles={{
                                '.MuiPaper-root': {
                                    height: `calc(50% - ${drawerBleeding_lists}px)`,
                                    overflow: 'visible',
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    },
                                }}
                            />
                            <SwipeableDrawer
                                container={container_lists}
                                anchor="bottom"
                                open={open_lists}
                                onClose={toggleDrawer_lists(false)}
                                onOpen={toggleDrawer_lists(true)}
                                swipeAreaWidth={drawerBleeding_lists}
                                disableSwipeToOpen={false}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                            >
                            <StyledBox_lists
                                sx={{
                                    position: 'relative',
                                    top: -drawerBleeding-0,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8,
                                    visibility: 'visible',
                                    right: 0,
                                    left: 0,
                                    height: '50px'
                                }}
                            >
                                <Puller_lists />
                            </StyledBox_lists>
                            <StyledBox_lists
                                sx={{
                                    position: 'relative',
                                    px: 2,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    visibility: 'visible',
                                    height: '10%',
                                    overflow: 'auto',
                                }}
                            >
                            <div className='lists_menu_buttons'>
                                <input type="radio" id="lists_distance" name="asc_desc"/><label for="lists_distance">가까운순</label>
                                <input type="radio" id="lists_lowercost" name="asc_desc"/><label for="lists_lowercost">낮은가격순</label>
                                <input type="radio" id="lists_popular" name="asc_desc"/><label for="lists_popular">인기순</label>
                            </div>
                            </StyledBox_lists>
                            <StyledBox_lists
                            sx={{
                              position: 'relative',
                              borderTopLeftRadius: 24,
                              borderTopRightRadius: 24,
                              visibility: 'visible',
                              height: '50%',
                              overflow: 'auto',
                            }}
                            >
                              {data.map(d=>(
                              <S.StoreContainer>
                                <img src={d.storeImage} alt="storeimg"/>
                                <S.TextWrapper>
                                  {d.reserveStatus === true ?  <h4>당일 예약</h4>: null}
                                  {d.couponStatus === true ?   <h5>할인 쿠폰</h5>: null}
                                  <h1>{d.storeName}</h1>
                                  <h2>{d.storeType}</h2>
                                  <h3>{d.storeCost.toLocaleString('ko-KR')} 원</h3>
                                  </S.TextWrapper>
                                  </S.StoreContainer>
                                  ))}
                                  </StyledBox_lists>
                                  </SwipeableDrawer>
                    </Root_lists>
                </IconContext.Provider>
                <div className={timefilter? 'nav-mask1 active' : 'nav-mask1'} onClick={showTimefilter}></div>
                <div className={filter? 'nav-mask2 active' : 'nav-mask2'} onClick={showfilter}></div>
                <div className={lists? 'nav-mask2 active' : 'nav-mask2'} onClick={showlists}></div>
            </S.Container>
        </>
    );
  }
export default Mainbuttons;