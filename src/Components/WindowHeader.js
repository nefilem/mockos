import React, { useState, useEffect } from 'react';

import { AiOutlineCloseSquare } from 'react-icons/ai';

import "./Window.Styles.css";

const WindowHeader = ({ onDrag }) => {
    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.addEventListener('mouseup', handleMouseUp);
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => onDrag(e.movementX, e.movementY);

        if (mouseDown) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [mouseDown, onDrag]);

    const handleMouseDown = () => setMouseDown(true);
    
    return (
        <div className="window_header disable-text-selection" onMouseDown={handleMouseDown}>
        <AiOutlineCloseSquare onClick={() => { console.log("close this window"); }}/>Header
        </div>
    );
}

export default WindowHeader;