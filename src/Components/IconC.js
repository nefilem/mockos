import React, { useRef } from 'react';
//import WindowHeader from './WindowHeader';

import "./IconC.Styles.css";

const IconC = ({ xx, yy, content }) => {
    const iconRef = useRef(null);

    const handleDrag = (movementX, movementY) => {
        const icon = iconRef.current;

        //console.log(windowRef + ": " + movementX + ", " + movementY)

        if (!icon) return;

        const { x, y } = icon.getBoundingClientRect();

        window.style.left = `${x + movementX}px`;
        window.style.top = `${y + movementY}px`;
    }

    console.log(xx + ", " + yy);

    return (
        <div>
        <div className="icon disable-text-selection" ref={iconRef} onDrag={handleDrag} style={{ left: `${xx}px`, top: `${yy}px` }}>
        </div><br/>
        <div className="icon_content">
                { content }
        </div>
        </div>
    );
}

export default IconC;