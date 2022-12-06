import React from 'react';
import UsePortal from 'react-useportal';

import Window from './Window';

const WindowPortal = ( props ) => {
    const { Portal } = UsePortal({
        bindTo: document.getElementById('window-portal'),
    });

    return (
        <Portal>
            <Window {... props}/>
        </Portal>
    );
}

export default WindowPortal;
