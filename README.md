# 📌 SPA 구현 (React)

## 🧾 프로젝트 개요

* **프로젝트명**: SPA 구현
* **구분**: 개인 프로젝트
* **분야**: FrontEnd
* **기간**: 2025.04.25 ~ 2025.04.27
* **인원**: 1명

---

## ⚙️ 사용 기술

* React
* JSX
* Context API
* Custom Hook
* CSS (Styled Components)

---

## 🖼️ 실행 화면
- ### 메인 화면
<img width="1847" height="735" alt="image" src="https://github.com/user-attachments/assets/83ef424a-8f87-4a91-8b5c-2b074b35f098" />  
- ### 상세 보기
<img width="553" height="751" alt="image" src="https://github.com/user-attachments/assets/0d7dfd4f-79c2-4f72-b9b9-eac345b1007c" />  
- ### 회원 등록
<img width="504" height="764" alt="image" src="https://github.com/user-attachments/assets/fdbd37d6-efb1-4cf7-9dfd-fd2a9a0c7d9b" />  
- ### 등록된 화면
<img width="1109" height="467" alt="image" src="https://github.com/user-attachments/assets/70892a89-ff9e-4a16-b005-aa593b967f46" />  

---

## 🛠️ 주요 기능

* 사용자 등록 / 조회 / 상세 조회 기능
* Context API를 활용한 전역 상태 관리
* Custom Hook을 통한 입력 로직 분리
* 서버 없이 상태 기반으로 CRUD 흐름 구현

---

## 👨‍💻 담당 역할

* React 컴포넌트 구조 설계 및 사용자 관리 UI 구현
* Context API 기반 전역 상태 관리 및 데이터 흐름 설계
* 커스텀 훅을 활용한 입력 처리 및 CRUD 로직 구현

---

## 📈 성과 및 배운점

* 서버 없이 상태만으로 CRUD 흐름을 구현하며 데이터 처리 구조 이해
* 전역 상태 관리(Context)의 동작 원리 및 한계에 대한 이해
* 컴포넌트 분리와 재사용성을 고려한 설계 경험 확보

---

## 📂 프로젝트 구조

```
.
│  App.css
│  App.jsx
│  index.css
│  main.jsx
│
├─assets
│      react.svg
│
├─components
│  │  NotFound.jsx
│  │  UserCard.jsx
│  │  UserContext.jsx
│  │  UserDetail.jsx
│  │  UserList.jsx
│  │  UserRegistration.jsx
│  │
│  └─customHook
│          useInput.jsx
│
└─images
        default.png
        직원1.png
        직원2.png
        직원3.png
```

---

## 🚀 실행 방법

```bash
npm install
npm run dev
```
