
    import tinycolor from "tinycolor2";
    
    function generateColor() {
        let hex = "#" + Math.floor(Math.random()*16777215).toString(16);

        let isLight = tinycolor(hex).isLight()
        
        return {hex, isLight}
    }

export {generateColor}