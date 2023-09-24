# efub3-frontend-assignment-2-2

💛 [이펍 프론트엔드 2학기] 2주차 과제 Recoil 연습 제출

### 결과물
![readme](https://github.com/529539/efub3-frontend-assignment-2-2/assets/102040717/d3ffc414-3c03-4bbd-ba4a-8cca8b30063e)


### 상세 설명

- `listState`, `bookmarkState` atom을 생성
- `recoil-persist`를 활용하여 로컬 스토리지에 저장하고 새로고침해도 유지되도록 함
- `listState` 값 중에서 `bookmarkState`에 포함되어 있는 id의 아이템만 get하는 selector `bookmarkListSelector` 생성
- `listState` 값 중에서 author 값이 'USER_ME'인 아이템만 get하는 selector `myListSelector` 생성
- 현재 북마크 되어있는지 아닌지를 확인하고 북마크에 추가하거나 제거하는 함수 정의
  ```
  const onBookmark = (id) =>
  	bookmarkId.includes(id)
  		? setBookmarkId((pre) => pre.filter((item) => item !== id))
  		: setBookmarkId((pre) => [...pre, id]);
  ```
- useResetRecoilState을 사용하여 각 atom을 초기화하는 함수 정의
