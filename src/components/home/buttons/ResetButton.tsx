import { ResetButtonStyle } from '@/styles/HomeStyles'
import { useState } from 'react'

type ResetProps = {
    children: string,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setIsRun: React.Dispatch<React.SetStateAction<boolean>>,
    count: number
}

const ResetButton = ({setCount, setIsRun, children, count}: ResetProps) => {
    //Set 'isRun' and the count down is stop
    return (
        <ResetButtonStyle onClick={()=>{setCount(60);setIsRun(true);}} count={count}>
            {children}
        </ResetButtonStyle>
    )
}

export default ResetButton;