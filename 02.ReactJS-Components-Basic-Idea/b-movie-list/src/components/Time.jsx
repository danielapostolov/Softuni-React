import { useState } from 'react';


export default function Time() {
    const [time, setTime] = useState(0);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    const isEven = time % 2 == 0;
    let color;
    if (isEven) {
        color = 'green';
    } else {
        color = 'red';
    }

    return (
        <>
            <h2 style={{color}} >Timer</h2 >

            < p > {time}</p >
        </>
    );

}