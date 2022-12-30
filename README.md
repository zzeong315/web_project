# 13팀 / 베스킨라빈스 31 🍦
   
##  📌 포트폴리오 공유 웹서비스
> 이 프로젝트는 자기자신의 포트폴리오를 작성하고, 또한 다른 사람의 포트폴리오를 확인할 수 있는 웹 서비스입니다.   
   
 <br> 

## ► 주요사용기술

 - 프론트엔드 <br>
 <img src="https://img.shields.io/badge/JavaScript-ECD53F?
          style=flat		//배지 스타일
          &logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?
          style=flat		//배지 스타일
          &logoColor=white"/>
 <img src="https://img.shields.io/badge/Bootstrap-7952B3?
          style=flat		//배지 스타일
          &logoColor=white"/>
<img src="https://img.shields.io/badge/styled-components-DB7093?
style=flat		//배지 스타일
&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?
style=flat		//배지 스타일
&logoColor=white"/>

<br>

 - 백엔드<br>
 <img src="https://img.shields.io/badge/JavaScript-ECD53F?
          style=flat		//배지 스타일
          &logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?
          style=flat		//배지 스타일
          &logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-00A98F?
          style=flat		//배지 스타일
          &logoColor=white"/>
  <img src="https://img.shields.io/badge/Mongoose-FF6550?
          style=flat		//배지 스타일
          &logoColor=white"/>
  <img src="https://img.shields.io/badge/multer-9999FF?
          style=flat		//배지 스타일
          &logoColor=white"/>
  <img src="https://img.shields.io/badge/sharp-5A45FF?
          style=flat		//배지 스타일
          &logoColor=white"/>

 
 <br> 

## ► 기능

### 서비스구조

<img src="/uploads/ffaaa6bede8b148b3072dfb2bc26578f/스크린샷_2022-09-02_오후_4.56.11.png" width ="500" height=auto>

<br> 

### 상세기능

1. **User**
	- 로그인, 회원가입, 회원탈퇴 가능
	- 유효성 검사 
		- 로그인 :  아이디 비밀번호 일치여부, 존재하는 이메일 확인여부
		- 회원가입 : 중복 이메일 확인
<br> 

2. **UserCard**
	- 사용자 이름, 이메일, 설명, 프로필사진이 포함
	- 위의 내용은 모두 수정가능
<br> 

3.  **4가지 MVP** 
	- **공통사항**
		- CRUD  / 리스트를 보여주고, 수정, 추가, 삭제가 가능 ( axios )
		- 각 항목에 글자수 제한, 조건에 따라 버튼 접근이 변함
		- 입력받는 곳에 자동으로 포커스 되도록 autofocus 적용
		
	-  **Education** ( 학력 )
		- 학교이름, 전공 텍스트와 / 전공 체크하는 라디오 버튼으로 구성
	
	-  **Award** ( 수상내역 )
		- 수상내역과 상세내용 텍스트
		
	- **Project** ( 프로젝트 )
		- 프로젝트 제목, 상세내역, 시작날짜와 종료날짜를 지정하는 날짜  텍스트
		- 달력으로 날짜 입력 받을 때 react-datepicker 라이브러리로 달력 구성
	
	- **Certificate** ( 자격증 )
		- 자격증 제목, 상세내역, 취득날짜를 지정하는 텍스트
		- 달력으로 날짜 입력 받을 때 react-datepicker 라이브러리로 달력 구성
<br> 

## ► 디자인

- Figma를 사용하여 전반적인 디자인을 구성하였고   
- react에서 제공하는 boot-strap을 기본으로 사용
- 스타일링을 별도로 주기 위하여  styled-component 라이브러리를 사용

<br>

## ► 설치 방법

1. 프론트 엔드 서버 실행

```bash
cd front
yarn
yarn start
```

2. 백엔드 서버 실행

```bash
back 폴더 내부 README 참고
```

---

## ► 팀원
|  포지션|이름  |
|--|--|
|프론트엔드| 남궁혜진  |
| 프론트엔드 | 임정은 |
| 프론트엔드 | 유민지 |
| 백엔드 | 신채민 |
| 백엔드 | 진시하 |
   
 <br>    

본 프로젝트에서 제공하는 모든 코드 등의는 저작권법에 의해 보호받는 ㈜엘리스의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.
Copyright 2022 엘리스 Inc. All rights reserved.
