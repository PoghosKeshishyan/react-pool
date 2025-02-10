import { useState } from 'react';
import { Buttons } from './components/Buttons';
import { Pool } from './components/Pool';

export default function App() {
    const [count, setCount] = useState(0);

    const addWater = () => {
        const startTime = Date.now();

        const interval = setInterval(() => {
            setCount(prev => prev + 1);

            if (Date.now() - startTime > 5000) {
                clearInterval(interval);
            }
        }, 1000);
    }

    const removeWater = () => {
        const startTime = Date.now();

        const interval = setInterval(() => {
            setCount(prev => prev - 1);

            if (Date.now() - startTime > 5000) {
                clearInterval(interval);
            }
        }, 1000);
    }

    return (
        <div className='App'>
            <h1>POOL - {count}</h1>
            <Buttons addWater={addWater} removeWater={removeWater} />
            <Pool count={count} />
        </div>
    )
}
