import "../style/ScrollToTop.css";
import { GoMoveToTop } from 'react-icons/go';

const ScrollToTop = () => {

    function scrollTop(){
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

  return (
    <button
        className="scroll-to-top"
        onClick={scrollTop}
        style={{
            position: "fixed",
            top: "90%",
            left: "90%"
        }}
    ><GoMoveToTop /></button>
  )
}

export default ScrollToTop