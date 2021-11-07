### Basic Setting
`src/components` : 컴포넌트
`src/pages` : 컴포넌트로 구성된 페이지 화면 
`App.js` : 페이지들 간의 라우터 설정

`src/components/common/BasicTemplate` : 모바일 사이즈 / pc 사이즈 (편의를 위해 임시로 테두리 설정) 출력 사이즈 조정

#### 사용 패키지
styled-components@5.3.3
react-router-dom@5.2.0
react-icons@4.3.1

# -211029
#### 찜 매장 목록 구현
![04](https://user-images.githubusercontent.com/73420533/139116049-b976f6c0-065b-4f86-b86e-0a8bf8cb0c27.jpg)

- 김찬님과 각자의 파트 따로 진행
- 이번 회의 후 프로젝트 내 상세한 부분 맞춰 통합 진행하는 것으로 예정하고 있어 간단하게 페이지 띄우는 것까지만 구현
- `App.js` : main
- `src/components/Favorties` : 찜 매장 목록 컴포넌트
- `src/components/Favorits/dummy.json` : 임시 데이터 
- styled components 방식 사용
- 모바일 사이즈만 고려
