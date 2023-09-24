import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { memoListState } from '../component/Atom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from "styled-components";

let Itemid = 0;
function getId() {
  return Itemid++;
}

const New = ()=>{
const navigate = useNavigate();
const [memo, setMemo] = useState('');
const setMemoList = useSetRecoilState(memoListState);
const memoList = useRecoilValue(memoListState);
useEffect(()=>{
   
    console.log(memoList);
},[]);

const handleSub = ()=>{
setMemoList((prev)=>[...prev, 
    {
    id: getId(),
    text: memo,

    }

]);
setMemo("");
navigate('/')


}


    return(

        <Container>
        <Input value={memo} onChange={(e)=>setMemo(e.target.value)}/>
        <Btn onClick={handleSub}>저장하기</Btn>
        </Container>
    )

}

export default New;

const Input = styled.textarea`
height: calc(100vh - 100px);
width: calc(100% - 20px);
border: none;
padding: 10px;
resize: none;
font-size: 15px;
outline: none;
`

const Container = styled.div`
display: flex;
flex-direction: column;
`

const Btn = styled.button`
border: none;
background-color: rgb(211, 211, 211);
color: black;
cursor: pointer;
font-size: 20px;
margin-top: 10px;
font-weight: 600;
`