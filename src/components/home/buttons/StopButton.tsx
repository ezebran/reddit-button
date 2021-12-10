import { StopButtonStyle } from '@/styles/HomeStyles'

type StopProps = {
    children: string,
    setIsRun: React.Dispatch<React.SetStateAction<boolean>>,
    isRun: boolean
  }

const StopButton = ({setIsRun, children, isRun}: StopProps) => {
    //Set 'isRun' and the count down is stop
    return (
        <StopButtonStyle onClick={()=>{setIsRun(false)}} isRun={isRun}>
            {children}
        </StopButtonStyle>
    )
}

export default StopButton;