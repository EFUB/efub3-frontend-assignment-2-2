# efub3-frontend-assignment-2-2

💛 [이펍 프론트엔드 2학기] 2주차 과제 Recoil 연습 제출

## Recoil을 이용한 일정 정리 서비스

### 기능 구현

- atom 조회, 추가, 변경, 삭제 기능 구현
  - 일정을 관리하는 scheduleState 생성
  - 캘린더에서 선택한 날짜를 저장하는 selectedDateState 생성
- selector 생성
  - scheduleState에 일정이 존재하는 날짜 배열을 return하는 uniqueDatesSelector 생성
- recoil-persist를 이용한 전역 상태 유지 구현
  - persistAtom을 이용해 localStorage에 상태 저장
- react-router-dom을 이용해 페이지 라우팅
- react-calendar 라이브러리 사용 및 커스텀

### 결과물 사진

- 아이폰 캘린더 참고
  ![image](https://github.com/EFUB/efub3-frontend-assignment-2-2/assets/100225783/3a0b62f3-14ad-4abd-a9ef-8c09a6eb9c6b) | ![image](https://github.com/EFUB/efub3-frontend-assignment-2-2/assets/100225783/361b6edc-732c-46ef-b799-9ad05d5cb7b0)
  ---|---|
