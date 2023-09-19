import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { DiaryItemAtom } from "../DiaryItemAtom";
import ProductCard from "./../component/ProductCard/ProductCard";
import dummyData from "./../model/dummyData";

function Main({ diaryItems, setDiaryItems }) {
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  const [weather, setWeather] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleScoreChange = (event) => {
    setScore(event.target.value);
  };

  const [diaryItem, setDiaryItem] = useRecoilState(DiaryItemAtom);

  // 다이어리 아이템 추가 함수
  const addDiaryItem = () => {
    const newItem = {
      id: new Date().getTime(),
      text: value,
      mood: parseInt(score),
    };
    setDiaryItem([...diaryItem, newItem]);
    setValue("");
    setScore(0);
  };

  return (
    <ListWrapper>
      <StyledTextarea
        rows={4}
        defaultValue="여기에 입력하세요"
        multiline
        value={value}
        onChange={handleChange}
      />
      <StyledCheck>
        <div className="section">
          <div className="title">오늘 날씨는?</div>
          <select name="weather" value={weather}>
            <option value="warm">너무 더워!</option>
            <option value="nice">선선하고 좋아~</option>
            <option value="rain">비가 내려..</option>
            <option value="thunder">천둥/번개가 치는 날씨</option>
            <option value="snow">눈이 와!</option>
            <option value="cold">추워..</option>
          </select>
        </div>
        <div className="section">
          <div className="title">오늘 하루는?</div>
          <input
            value={score}
            type="number"
            onChange={handleScoreChange}
          ></input>
        </div>
      </StyledCheck>
      <SaveBtn onClick={addDiaryItem}>저장하기</SaveBtn>
    </ListWrapper>
  );
}
const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 8px;

  .section {
    width: 14rem;
  }

  .title {
    font-size: 1.5rem;
    /* margin-bottom: 1rem; */
  }
`;

const StyledTextarea = styled.textarea`
  width: 50rem;
  height: 10rem;
  padding: 1rem;
  border: 1.5px solid black;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

const StyledCheck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const SaveBtn = styled.button`
  width: 7rem;
  height: 3rem;
`;

export default Main;
