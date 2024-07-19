import { useState } from "react";
import "../style/Theme.css";
import Sun  from "/themeChange/sun.png"
import Moon  from "/themeChange/moon.png";


const Theme = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [changeImage, setChangeImage] = useState(Moon)
    
    function  themeChange(){
        if(isOpen == true){
            setIsOpen(false)
            setChangeImage(Sun);
            document.body.style.background = "black"
            document.body.style.color = "white"
        }else{
            setIsOpen(true)
            setChangeImage(Moon)
            document.body.style.background = "linear-gradient(120deg, #FF0000 0%, #2400FF 100%), linear-gradient(120deg, #FA00FF 0%, #208200 100%), linear-gradient(130deg, #00F0FF 0%, #000000 100%), radial-gradient(110% 140% at 15% 90%, #ffffff 0%, #1700A4 100%), radial-gradient(100% 100% at 50% 0%, #AD00FF 0%, #00FFE0 100%), radial-gradient(100% 100% at 50% 0%, #00FFE0 0%, #7300A9 80%), linear-gradient(30deg, #7ca304 0%, #2200AA 100%)"
            document.body.style.backgroundBlendMode = "overlay, color, overlay, difference, color-dodge, difference, normal"
        }
    }

    console.log(isOpen);

  return (
    <div className="theme-container">
        <img onClick={themeChange} src={changeImage} alt="Theme" />
    </div>
  )
}

export default Theme