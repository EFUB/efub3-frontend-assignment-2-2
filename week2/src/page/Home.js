import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useState } from 'react';
import Memo from './Memo'
import { Link } from 'react-router-dom';
import { contentState } from '../component/Atom';
import { memo } from 'react';
import contentStateSelector from '../component/selector'
import { memoListState } from '../component/Atom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Home = ()=>{

   const navigate = useNavigate();
    const memoList = useRecoilValue(memoListState);
  
    const resetList = useResetRecoilState(memoListState);



    return(
    <div>
        <div>
        <h2>메모</h2>
        <Header>
        
        <BtnStyle>
        
        <Btn onClick={resetList}>RESET</Btn>
        <div>{memoList.length}개의 메모가 있습니다</div>
        <Btn onClick={()=>{navigate('./new')}}>NEW</Btn>
        
        </BtnStyle>
        </Header>
        
        {memoList.map((it) => (
          <Item onClick={()=>navigate(`/edit/${it.id}`)}>
          {it.text.slice(0,20)}
        </Item>
        ))}
        
        </div>
        
        </div>
    )
}

export default Home;

const Item = styled.div`
background-color: white;
width: calc(390 - 40)px;
height: 50px;
border-radius: 10px;
padding: 10px;
margin-top: 20px;
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
`

const Header = styled.div`
width: 390px;
margin-top: 10px;
text-align: center;
border-radius: 5px;

`

const BtnStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Btn = styled.button`
border: none;
background-color: rgb(211, 211, 211);
color: black;
cursor: pointer;
font-size: 20px;
font-weight: 600;
`