import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import dummyImage from "../../assets/henry.jpg";
import { DiaryItemAtom } from "../../DiaryItemAtom";

const DiaryItem = ({ data }) => {
  const { id, text, mood } = data;
  // const setDiaryItem = useSetRecoilState(DiaryItemAtom);

  // // 장바구니 삭제 함수
  // const removeFromDiaryList = () => {
  //   setDiaryItem((prev) => prev.filter((e) => e.id != id));
  // };

  return (
    <Wrapper>
      <div>
        <ImageWrapper src={dummyImage} alt={text}></ImageWrapper>
        <ColumnWrapper>
          <Title>{text}</Title>
          <span>{mood}점</span>
        </ColumnWrapper>
      </div>
      {/* <RightWrapper>
        <Button onClick={removeFromDiaryList}>삭제</Button>
      </RightWrapper> */}
    </Wrapper>
  );
};

export default DiaryItem;

const Wrapper = styled.li`
  width: 100%;
  padding: 16px;
  border: 1px solid var(--line-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImageWrapper = styled.img`
  height: 60px;
  width: 60px;
  float: left;
  margin-right: 16px;
  border: 1px solid var(--line-gray);
  border-radius: 8px;
`;
const ColumnWrapper = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  > span {
    text-align: right;
  }
`;
const Title = styled.span`
  font-weight: var(--bold);
  font-size: 18px;
`;
const Button = styled.button`
  display: block;
  padding: 4px 8px;
  width: fit-content;
`;
