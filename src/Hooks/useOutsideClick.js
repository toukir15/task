import { useEffect } from 'react';

export const useClickOutsideListener = (boxID, buttonID, setOpenState) => {

    console.log(boxID, buttonID,)

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         const element = document.getElementById(boxID);
    //         const triggerElement = document.getElementById(buttonID).contains(event.target);
    //         if (!triggerElement && element && !element.contains(event.target)) {
    //             setOpenState(false);
    //         }
    //     };
    //     document.addEventListener('click', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);
}

