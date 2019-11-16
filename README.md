# 막차렐라(가제): 막차시간 알림

집으로 가는 대중교통 노선을 선택하면, 막차시간 N분 전에 알려주는 PWA

## 진행

### 현황

- CRA로 client dir 생성, server dir 생성
- server 쪽 express 설치, babel 설정
- client 쪽 필요없는 파일 제거
- 루트에 .env, eslint, prettier 설정
- 서버, 클라이언트 연결 설정

### 문제

- 타이틀 후보: 막차렐라, 호박막차
- 지하철 경로 찾기! API 검색하면 딱 하고 마법같은 툴이 나올 줄 알았음
- db 어떻게할까? graphql 핫하다는데 사실 아직 잘 모르겠다 뭔지
- ~~client에서 루트 디렉토리의 .env를 못찾는다.~~

### 기록

- eslint, prettier 세팅
- babel로 트랜스파일링 세팅
- http-proxy-middleare로 CRA 프록시 세팅

## 구상

### 예상 기술 스펙

Express, React, ???

### 기능

- 현재 장소에서 도착지 까지의 대중교통 노선을 검색하는 기능
- 해당 노선의 막차 시간을 알려주는 기능
- 알림 등록 후 지정 시간에 알림을 주는 기능

## 목표

- PWA 구현
  - HTTPS 연결
  - W3C Manifest
  - Service Worker 사용
  - [Ref 1. 웹 프로젝트는 PWA이어야 한다.](https://webactually.com/2017/09/%EC%9B%B9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%8A%94-pwa%EC%9D%B4%EC%96%B4%EC%95%BC-%ED%95%9C%EB%8B%A41/)
  - [Ref 2. Getting into PWA with React](https://www.youtube.com/watch?v=rAx2x6CSnws)
  - [Ref 3. 여러분의 첫 Progressive Web App](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=ko)
- 아키텍쳐 이해!
  - NGINX - WAS?
  - elb - S3 or EC2?
  - Ref 1. 해민이형
