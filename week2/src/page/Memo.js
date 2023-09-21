import styled from 'styled-components'
import { useRecoilState,useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { memoListState } from '../component/Atom';



const Memo = ()=>{
    const memoList = useRecoilValue(memoListState);



    return(
        <div>

         <Item>
         {memoList.map((item)=><div>{item.text}</div>)}
         </Item>

         
        </div>
    )
}

export default Memo;

const Item = styled.div`
background-color: white;
width: calc(390-40)px;
height: 50px;
border-radius: 10px;
padding: 10px;
margin-top: 20px;
`