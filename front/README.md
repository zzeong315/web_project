# 포트폴리오 공유 서비스 프론트엔드 코드

## 실행 방법

## 1. react-srcipts start 실행

> yarn은 사실 npm 패키지입니다. yarn부터 설치합니다. (이미 설치 시 생략)

> 이후, 아래 yarn 커맨드는, yarn install 커맨드의 단축키입니다. 즉, 라이브러리 설치 커맨드입니다.

> yarn 입력 시 자동으로, package.json 바탕으로 라이브러리를 한꺼번에 설치해 줍니다.

```bash
npm install --global yarn
yarn
yarn start
```

## 파일 구조 설명
<img src="/uploads/7a5e02882147283dd821a0fdb2e4678d/스크린샷_2022-09-02_오후_5.43.54.png" width=800 height=auto  />

1. src폴더는 아래와 같이 구성됩니다.

	- apis 폴더 : crud 요청을 위한 api들이 컴포넌트 별로 나뉘어져 있으며 axios를 사용
	- assets 폴더 :
	- Header.js: 네비게이션 바
	- Porfolio.js: 메인 화면을 구성하는, 5개 MVP를 모두 포함하는 컴포넌트
	- components 폴더
		- user 폴더: 포트폴리오 중 사용자 관련 컴포넌트
		- award 폴더: 포트폴리오 중 수상이력 관련 컴포넌트
		- certificate 폴더: 포트폴리오 중 자격증 관련 컴포넌
		- education 폴더: 포트폴리오 중 학력 관련 컴포넌트
		- project 폴더: 포트폴리오 중 프로젝트 관련 컴포넌트
	- App.js : SPA 라우팅 코드
	- reducer.js : 로그인, 로그아웃은 useReducer 훅으로 구현되며 이 때 사용되는 reducer 함수
	 
<br>

2. 전체적인 로직은 모두 같으며, Education MVP 의 경우는 다음과 같이 동작합니다.

<img src="/uploads/76fe07a119a61183ecfdc5749c9700f2/화면_기록_2022-09-02_오후_6.38.46.mov"/>

	- 포트폴리오 컴포넌트는 Education 컴포넌트를 사용합니다.

	- Education은  학력 **목록**으로, 여러 개의 EducationList 컴포넌트와 + 버튼 버튼 클릭 시 학력을 추가할 수 있는AwardForm 컴포넌트로 구성됩니다.

	- 각 Education 컴포넌트는 **isEditing 상태에 따라**, false면 EducationList, true면 EducationForm이 됩니다.

	- **isEditable**(포트폴리오 소유자와 현재 로그인한 사용자가 일치할 때)이 true인 경우 편집 버튼이 생깁니다.

	- Education은 **isAdding**이 true면 새롭게 추가할 수 있는 EducationForm이 보이게 되며, false면 Education의 리스트만 보이게 됩니다. 
