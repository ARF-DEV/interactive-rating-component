import { useState } from "react";
import "./button.css";

type buttonProps = {
    text: string
    defaultClass?: string
    mouseEnterClass: string
    mouseExitClass: string
    mouseDownClass: string
    selected: boolean
    onMouseDown: () => void
};

function Button({text, defaultClass, mouseEnterClass, mouseExitClass, mouseDownClass, selected ,onMouseDown}: buttonProps) {
    let [hover, setHover] = useState(false);
    let [mouseDown, setMouseDown] = useState(false);
    function onMouseDownEvent() {
        setMouseDown(true);
        onMouseDown();
    }
    function onMouseUpEvent() {
        setMouseDown(false);
    }
        
    function onMouseEnter() {
        setHover(true);
    }
    function onMouseLeave() {
        setHover(false);
    }
    let a = !selected || !mouseDown;
    let buttonClass = (!defaultClass ? 'btn' : defaultClass) + " " + (selected || mouseDown ? mouseDownClass : (hover ? mouseEnterClass : mouseExitClass));
    return (
        <button 
        className={buttonClass} 
        onMouseDown={onMouseDownEvent} 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUpEvent}>
            <p>{text}</p>
        </button>
    );
}

export default Button;