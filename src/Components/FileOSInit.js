import React from 'react';
//import Window from './Window';

import IconC from './IconC';

import fileSystemData from '../mockosfs.json';

const getDesktopIcons = () => {
    var x = 0;
    var y = 0;
    return Object.keys(fileSystemData).map(key => {
        console.log("a " + x + " - " + y);
        return (
            <IconC xx={x} yy={y} content={key}/>
        );

        y = y + 95;
        console.log("b " + x + " - " + y);
        
        //console.log(key);
        //console.log(fileSystemData[key]);
    });
}

const FileOSInit = () => {

    /* fileSystemData.map((filesystemdata, index) => {
        console.log(filesystemdata + ", " + index);
        return (
            <div>.</div>
        );
    }); */
    //console.log(Object.keys(fileSystemData));
    //Object.keys(fileSystemData).map(key => {

        //console.log(key);
        //console.log(fileSystemData[key]);
    //});
    return (
        <div>
            { getDesktopIcons() }
        </div>
    );
    /* console.log("1");
    for (var i = 0; i < fileSystemData.length; i++)
    {
        var obj = fileSystemData[i];
        console.log(`Name: ${obj.last_name}, ${obj.first_name}`);
    }
    console.log("2"); */
}

export default FileOSInit; 