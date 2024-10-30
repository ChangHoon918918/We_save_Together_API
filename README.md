# 🌐 We Save Together Platform (시민용 앱 + 운영자 웹)
**React Native로 제작된 시민용 모바일 앱**과 **React로 제작된 운영자 웹 애플리케이션**이 통합된 플랫폼 서비스입니다. 이 프로젝트는 시민과 운영자 모두에게 편리한 사용자 경험을 제공합니다.

## 🛠 기술 스택
- **Frontend (시민용 앱)**: React Native, Redux, Axios
- **Frontend (운영자 웹)**: React, Redux, Axios, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Firebase (시민용 앱), Vercel (운영자 웹)

## 📂 폴더 구조  
root  
├── citizen-app             # React Native 기반 시민용 앱  
│   ├── src  
│   │   ├── components      # UI 컴포넌트  
│   │   ├── screens         # 주요 화면 및 페이지  
│   │   └── redux           # Redux 상태 관리  
│   └── package.json  
│  
├── admin-web               # React 기반 운영자 웹 애플리케이션  
│   ├── src  
│   │   ├── components      # UI 컴포넌트  
│   │   ├── pages           # 주요 페이지   
│   │   └── redux           # Redux 상태 관리  
│   └── package.json  
│  
└── server                  # 백엔드 서버  
    ├── controllers         # API 엔드포인트  
    ├── models              # 데이터베이스 모델  
    ├── routes              # 라우터  
    └── app.js              # 서버 설정 및 실행  
  
## 🚀 시작하기  
  
### 클론 및 의존성 설치  
git clone https://github.com/username/repository-name.git  
cd repository-name  
**설명**: 레포지토리를 클론한 후 각 애플리케이션별로 의존성을 설치하는 방법을 안내합니다.  
  
#### 1. 시민용 앱 의존성 설치
cd citizen-app
npm install

#### 2. 운영자 웹 의존성 설치
cd ../admin-web
npm install

#### 3. 서버 의존성 설치
cd ../server
np으로 연락해 주세요.</p>
</div>
