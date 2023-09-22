import S from "./style";
import { ReactComponent as SearchIcon } from "../../../asset/searchIcon.svg";

const SearchBar = () => {
  return (
    <S.Wrapper>
      <S.Title>당신이 찾는 책은 무엇인가요?</S.Title>
      <S.InputWrapper>
        <S.Input placeholder="책 이름 검색" />
        <SearchIcon />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default SearchBar;
