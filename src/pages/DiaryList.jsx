import dummyData from "../model/dummyData";
import styled from "styled-components";
import DiaryItem from "../component/DiaryItem/DiaryItem";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { DiaryItemAtom, CountSelector, MoodSelector } from "../DiaryItemAtom";

function DiaryList() {
  // Recoil 상태를 가져올 때 useRecoilState를 사용
  const diaryItems = useRecoilValue(DiaryItemAtom);
  const totalMood = useRecoilValue(MoodSelector);
  const diaryCount = useRecoilValue(CountSelector);
  const setDiaryItems = useSetRecoilState(DiaryItemAtom);

  // 다이어리 아이템 삭제 함수
  const deleteDiaryItem = (id) => {
    const updatedDiaryItems = diaryItems.filter((item) => item.id !== id);
    setDiaryItems(updatedDiaryItems);
  };

  return (
    <>
      <Heading>내 일기</Heading>

      <ItemWrapper>
        {diaryItems.length ? (
          diaryItems.map((diary) => (
            <div key={diary.id}>
              <DiaryItem data={diary} />
              <button onClick={() => deleteDiaryItem(diary.id)}>삭제</button>
            </div>
          ))
        ) : (
          <NoItems>일기가 없습니다</NoItems>
        )}
      </ItemWrapper>

      <TotalPriceWrapper>
        <ColumnWrapper>
          <span>이번 달 일기 갯수</span>
          <Heading>{diaryCount}개</Heading>
          <span>이번 달 내 평균 기분 점수</span>
          <Heading>{totalMood}점</Heading>
        </ColumnWrapper>
      </TotalPriceWrapper>
    </>
  );
}

export default DiaryList;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Heading = styled.span`
  font-size: 20px;
  font-weight: var(--bold);
`;
const ItemWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 300px);
  gap: 8px;
  flex-direction: column;
`;
const TotalPriceWrapper = styled.div`
  padding: 16px;
  height: 150px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--line-gray);
  & span {
    text-align: right;
  }
`;
const NoItems = styled.div`
  padding: 8px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
`;
