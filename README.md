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
