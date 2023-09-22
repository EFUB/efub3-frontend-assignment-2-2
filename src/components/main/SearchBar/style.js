import styled from "styled-components";
import { flexCenter } from "../../../style/common";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  ${flexCenter}
  flex-direction: column;
  gap: 30px;
`;
const InputWrapper = styled.div`
  width: 40rem;
  height: 70px;
  border: 2px solid orange;
  border-radius: 25rem;
  ${flexCenter}
  gap:20px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`;
const Input = styled.input`
  width: calc(95% - 100px);
  margin-left: 20px;
  height: 90%;
  border: none;
  font-size: 20px;
`;
const S = {
  Wrapper,
  InputWrapper,
  Title,
  Input,
};

export default S;
