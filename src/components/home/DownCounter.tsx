import { CountText } from '@/styles/HomeStyles'
import { useState } from 'react'

type CounterProps = {
    isRun: boolean,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    count: number,
    isSend: boolean
}

const DownCounter = ({isRun, setCount, count, isSend}:CounterProps) => {


    if(count > 0 && isRun){ // Count down
        setTimeout(function () { setCount(count - 1) }, 1000)
    }
    
    
    return (
        <CountText isSend={isSend}>
            {count}s
        </CountText>
    )
}

export default DownCounter;