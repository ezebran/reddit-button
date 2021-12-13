type useColorsProps = {
    color: number
}

export const useColors = ({color}: useColorsProps) => {
    let userColor = "#ffffff";


    if(color <= 60 && color >= 52){
        userColor = "#7e57c2"
    }if (color <= 51 && color >= 42) {
        userColor = "#1e88e5"
    }if (color <= 41 && color >= 32) {
        userColor = "#009688"
    }if (color <= 31 && color >= 22) {
        userColor = "#ffeb3b"
    }if (color <= 21 && color >= 12) {
        userColor = "#ff9800"
    }if (color <= 11 && color >= 0) {
        userColor = "#f44336"
    }

    return userColor;
}