import { Outlet } from "react-router-dom";
import S from "./style";
import { ReactComponent as BookIcon } from "../../../asset/bookIcon.svg";

const Layout = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.IconContainer>
          <BookIcon />
        </S.IconContainer>
        <div>BookSearch</div>
      </S.Header>
      <Outlet />
    </S.Wrapper>
  );
};

export default Layout;
