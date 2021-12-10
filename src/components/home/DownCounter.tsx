import { CountText } from '@/styles/HomeStyles'
import { useState } from 'react'

type CounterProps = {
    isRun: boolean,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    count: number,
    name: string
}

const DownCounter = ({isRun, setCount, count, name}:CounterProps) => {


    if(count > 0 && isRun){ // Count down
        setTimeout(function () { setCount(count - 1) }, 1000)
    }
    
    
    return (
        <CountText name={name}>
            {count}s
        </CountText>
    )
}

export default DownCounter;