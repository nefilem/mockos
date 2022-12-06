import React, { useRef } from 'react';
import WindowHeader from './WindowHeader';

import "./Window.Styles.css";

const Window = ({ children }) => {
    const windowRef = useRef(null);

    const handleDrag = (movementX, movementY) => {
        const window = windowRef.current;

        //console.log(windowRef + ": " + movementX + ", " + movementY)

        if (!window) return;

        const { x, y } = window.getBoundingClientRect();

        window.style.left = `${x + movementX}px`;
        window.style.top = `${y + movementY}px`;
    }

    return (
        <div className="window disable-text-selection" ref={windowRef}>
            <WindowHeader onDrag={handleDrag}/>

            <div className="window_content">
                { children }
            </div>
        </div>
    );
}

export default Window;