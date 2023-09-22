import styled from "styled-components";
import { flexCenter } from "../../../style/common";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ed912d;
  color: white;
  display: flex;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconContainer = styled.div`
  filter: invert(100%);
  margin-left: 20px;
`;
const S = {
  Wrapper,
  Header,
  IconContainer,
};

export default S;
