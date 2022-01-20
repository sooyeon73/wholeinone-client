## Basic Setting
`src/components` : 컴포넌트 

`src/pages` : 컴포넌트로 구성된 페이지 화면  

`App.js` : 페이지들 간의 라우터 설정

`src/components/common/BasicTemplate` : 모바일 사이즈 / pc 사이즈 (편의를 위해 임시로 테두리 설정) 출력 사이즈 조정

#### 사용 패키지
styled-components@5.3.3

react-router-dom@5.2.0

react-icons@4.3.1

## -211029
#### 찜 매장 목록 구현
![image](https://user-images.githubusercontent.com/73420533/141108312-00748787-e922-44c7-a19e-f85b64a8b4d2.png)

- 김찬님과 각자의 파트 따로 진행
- 이번 회의 후 프로젝트 내 상세한 부분 맞춰 통합 진행하는 것으로 예정하고 있어 간단하게 페이지 띄우는 것까지만 구현
- `App.js` : main
- `src/components/Favorties` : 찜 매장 목록 컴포넌트
- `src/components/Favorits/dummy.json` : 임시 데이터 
- styled components 방식 사용
- 모바일 사이즈만 고려

## -211112
#### 마이페이지 메뉴 구현 / 프로젝트 디렉토리 및 베이직 세팅
![image](https://user-images.githubusercontent.com/73420533/141107893-6d59e20d-1e96-4ed1-afb0-29db3db88a96.png)

- 각 components로 pages 구현하도록 디렉토리 구조 설정
- 임의로 pc에서의 출력 고려하여 세팅
- 찜 매장 css 소량 수정
- 마이 페이지 메뉴 : userData, adData 따로 더미 데이터 사용

#### 메인 화면 새로이 구성 / 메인 - 마이페이지, 메인 - 찜 매장 연결 / 검색 화면 구성
![Animation](https://user-images.githubusercontent.com/66289619/141231899-45c1169f-3fe3-4aec-95af-4a1db0c3e443.gif)

- src/components/Burger 디렉토리에 Burger 컴포넌트 구현
- transition을 이용한 메뉴 이동 애니메이션 수현
- z-index를 활용하여 Burger 메뉴가 나타날 시 마스크 형태로 흑색 반투명 화면 표시

#### 검색 기능 구현 / 버튼 폴더 생성
![Animation2](https://user-images.githubusercontent.com/66289619/141231907-38c0710a-e83b-43ed-89d3-a2158026b4b1.gif)

- src/components/Search 디렉토리에 Search 컴포넌트 구현
- map과 filter를 통한 검색 기능 구현
- Search의 위치 아이콘 사용을 위해 `style.js`에 `import { IoLocationSharp } from "react-icons/io5` 임포트

## -211126
#### 예약 내역 / 예약 상세 페이지 구현
![스크린샷(6)](https://user-images.githubusercontent.com/73420533/143240487-9903bcdd-456f-4fed-9fc5-5f911b5385c5.png)
![스크린샷(3)](https://user-images.githubusercontent.com/73420533/143240500-902f84cf-b970-4ce4-a44d-24b1ffb3632e.png)

- ui 제작 시에 고려하지 못했던 예약 내역 페이지 ui 새로 작성하여 구현 (피그마에도 추가완료)
- 예약 상태와 이용 완료 상태로 구분
- 예약 내역 페이지에서 reservationIdx 값을 예약 상세 페이지로 넘겨 각 예약 페이지 구별

## -211217
#### 매장 상세 페이지 
![image](https://user-images.githubusercontent.com/73420533/146386518-e6bfc6ca-07d2-473b-82dc-8476c0a9bcdb.png)
![image](https://user-images.githubusercontent.com/73420533/146386577-bd93d9c6-c2c9-458b-b637-866d4b8ca2a9.png)
- ui만 제작
- 가격 table 임시로 제작
- 시설 정보 아이콘 임시로 제작
- match params storeIdx로 연결
<<<<<<< HEAD
=======
<<<<<<< HEAD

## -211230
#### api 연결

- 마이페이지 / 예약 내역 / 예약 상세 내역 / 최근 본 매장 (찜매장) / 매장 상세 페이지 api 연결
- axios, useEffect를 이용, 데이터 연결 완료 (로딩, 에러에 대한 추가 처리 필요)

- StoreContainer 공동 컴포넌트에서 인자로 api 주소를 넘겨 각 페이지에서 달리 데이터를 불러올 수 있도록 사용 방식 변경

- MyReserve - infinite scroll : IntersectionObserver 를 이용해 마지막 요소에 ref 를 추가하여 페이지의 마지막에 도달했는지 확인 -> 마지막에 도달 시 page 를 1 증가하고 데이터를 다시 불러와 현재 데이터에 추가


#### 결제 수단 ui 구현
![image](https://user-images.githubusercontent.com/73420533/147684934-ee7e9685-838b-4bed-ace5-63cad5968128.png)
- 라디오 박스 체크 변경에 따라 해당 데이터의 isMain 값이 바뀌도록

#### api 데이터 보충이 필요한 사항
##### GET 골프장 조회 (storeIdx로 조회) api
- 평점 storeGrade
- 타석수 batCount
- 매장 전화번호
- 가격 테이블
- 보관 storageStatus 왼손타 lefthandStatus 주차시설 parkingStatus 단체가능여부 groupseatStatus 바닥스크린 floorscreenStatus 프로교습 lessonStatus

##### GET 예약 상세 내용 조회 API

결제 정보 데이터 
- 예약 금액 reservePrice
- 할인 금액 discountPrice
- 총 결제 금액 payPrice

#### 추가 고려할 사항
- 마이페이지 - 회원 정보 수정
- 포인트 / 쿠폰 
- 예약 내역 -> 예약 취소 api
- 결제 모듈 설정


## -220113
#### 로그인 회원가입
##### 로그인 페이지 
![01](https://user-images.githubusercontent.com/73420533/149214583-00879faf-2157-458a-9f49-6a63e5e6832d.jpg)
- 입력 창의 onChange 메소드는 hook으로 정의하여 사용함
- 올바르지 않은 시도 시 위와 같이 오류 메세지 출력

##### 올바르게 로그인 성공 시
![02](https://user-images.githubusercontent.com/73420533/149214614-09ecb78e-89c6-44f5-93bf-55d11c148cad.jpg)
- jwt 토큰 방식 이용
- 헤더에 accessToken 담아 보내도록 설정

##### 회원가입 페이지
![03](https://user-images.githubusercontent.com/73420533/149214986-c5803c46-45c5-4929-acb8-6483570f9525.jpg)
![03-2](https://user-images.githubusercontent.com/73420533/149215023-9cf91027-e565-4a5f-9c0d-034fffc7fecb.jpg)
- 올바르지 않은 시도 시 위와 같이 오류 메세지 출력

##### 올바르게 회원가입 성공 시
![04](https://user-images.githubusercontent.com/73420533/149215079-1ebb82cc-d383-479d-b045-bedc9061fb49.jpg)
- 회원 정보가 추가된 것을 확인
