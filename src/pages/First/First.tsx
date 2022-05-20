/* @jsxImportSource @emotion/react */
import React from 'react';
import { baseCss } from './First.style';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import axios from 'axios';
import NavigateButton from '../../components/NavigateButton/NavigateButton';
import { atomNumber } from '../../recoil/SerchedKeyword/atom';

const First = () => {
  const getData = async () => {
    const data = await axios.get('https://for-testing-b1498-default-rtdb.firebaseio.com/.json');
    console.log(data.data);
    return data;
  };

  const [number, setNumber] = useRecoilState(atomNumber);

  const { status, data } = useQuery('datas', getData);

  console.log(number);

  const toPage: string = 'Second';

  return (
    <div css={baseCss}>
      <div className='frame'>
        <div className='inner-div'>
          <button>original</button>
          <NavigateButton toPage={toPage} style={{ position: 'relative', left: '0px' }} />
        </div>
      </div>
    </div>
  );
};

export default First;
