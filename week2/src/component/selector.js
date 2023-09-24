import {selector} from 'recoil'
import { contentState, memoListState } from './Atom'
import {data} from './data' 

const contentStateSelector = selector({

    key: 'contentSate',
    get: ({get})=> ({ id }) => {
        // memoListState에서 전체 메모 목록을 가져옵니다.
        const memoList = get(memoListState);
        
        // 해당 ID에 해당하는 메모를 찾아 반환합니다.
        const memo = memoList.find((item) => item.id === id);
        
        return memo ? memo.content : '';
      },
      set: ({ set, get }) => ({ id, content }) => {
        // memoListState에서 전체 메모 목록을 가져옵니다.
        const memoList = get(memoListState);
        
        // 해당 ID에 해당하는 메모를 찾아 내용을 업데이트합니다.
        const updatedMemoList = memoList.map((memo) =>
          memo.id === id ? { ...memo, content } : memo
        );
        
        // 업데이트된 메모 목록을 memoListState에 설정합니다.
        set(memoListState, updatedMemoList);
      },
    }
);

export default contentStateSelector;