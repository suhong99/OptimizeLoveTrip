# [MCARD] 패스트캠퍼스 강의 LOVETRIP 최적화

## 프로젝트 소개
https://vercel.com/suhong99/suhong-lovetrip

고석진 강사님이 강의하신 최적화 강의
여행 숙박 예약 App을 통해서 HOC패턴으로 Suspense관리(로딩처리), 코드 스플릿, 을 학습

## 페이지 소개
- 호텔 리스트 페이지 (네비바를 통해 로그인 및 예약 목록 찜목록) 
  ![image](https://github.com/suhong99/OptimizeLoveTrip/assets/120103909/1883c388-ec3d-449e-9b74-c173a2ee33dd)

- 상세 페이지(호텔 리스트, 찜하기, 예약하기, 공유하기, 구글지도 하기, 추천호텔리스트)
![image](https://github.com/suhong99/OptimizeLoveTrip/assets/120103909/cbd99a29-72a5-4665-9532-bfc7194b41f3)
![image](https://github.com/suhong99/OptimizeLoveTrip/assets/120103909/79f0cb3f-a994-4fe0-8f05-4fbcd28d9608)

- 예약목록 및 찜목록 확인
![image](https://github.com/suhong99/OptimizeLoveTrip/assets/120103909/08fb0d0c-9751-475d-865c-0f9581f60438)



## 최적화 방법

- HOC패턴을 사용하여, 로딩처리
![image](https://github.com/suhong99/OptimizeLoveTrip/assets/120103909/e8ff5ace-4e8c-4703-9a7d-89ab50a38613)
- 코드 스플리팅(lazy와 Suspense)
https://ungumungum.tistory.com/75
- SEO최적화(React-helmet활용)
https://ungumungum.tistory.com/76
-캐러셀 이미지 로드 최적화(화면에 보이는 것만 우선적 로딩)
react-lazy-load-image-component
