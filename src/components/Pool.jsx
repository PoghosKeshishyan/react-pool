import { useState, useEffect } from 'react';
import { Water } from './Water';

export function Pool({ count }) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let x = [];

    for (let i = 0; i < count; i++) {
      x.push(i);
    }

    setArr(x);
  }, [count]);


  return (
    <div className='Pool'>
      {
        arr.map(el => <Water key={el} />)
      }
    </div>
  )
}
