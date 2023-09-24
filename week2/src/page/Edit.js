import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { memoListState } from '../component/Atom';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Edit = ()=>{

const {id} = useParams();
const setMemoList = useSetRecoilState(memoListState);
const memoList = useRecoilValue(memoListState);
const originMemo = memoList.find((it)=> parseInt(it.id) === parseInt(id));
const [memo, setMemo] = useState(originMemo.text);
const navigate = useNavigate();

const handleSub = ()=>{

   
        // 메모를 복사하여 업데이트
        const updatedMemoList = [...memoList];
        updatedMemoList[id] = {
          id: id,
          text: memo,
        };
        setMemoList(updatedMemoList);
        navigate('/')
    
}



    return(

        <Container>
        <Input  value={memo} onChange={(e)=> setMemo(e.target.value)}/>
        <Btn onClick={handleSub}>수정하기</Btn>
        </ Container>
    )

}

export default Edit;

const Input = styled.textarea`
height: calc(100vh - 100px);
width: calc(100% - 20px);
border: none;
padding: 10px;
resize: none;
font-size: 15px;
outline: none;
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

const Container = styled.div`
display: flex;
flex-direction: column;
`