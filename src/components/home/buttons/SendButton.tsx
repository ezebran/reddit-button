import { SendButtonStyle } from '@/styles/HomeStyles'
import { useState } from 'react'

type SendProps = {
    children: string,
    saveRecord: any,
    isRun: boolean
  }

const SendButton = ({saveRecord, children, isRun}: SendProps) => {

    return (
        <SendButtonStyle isRun={isRun} type="submit">
            {children}
        </SendButtonStyle>
    )
}

export default SendButton;