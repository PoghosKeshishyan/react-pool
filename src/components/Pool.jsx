import { useState, useEffect } from 'react';
import { Water } from './Water';

export function Pool({ count }) {
  return (
    <div className='Pool'>
      {
        Array(count).fill(0).map((el, index) => <Water key={index} count={count} />)
      }
    </div>
  )
}
