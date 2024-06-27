import { useState } from 'react';

export function useWinnerState() {
    const [winner, setWinner] = useState(null);

    const showResult = () => {
        const dataLocalStorage = JSON.parse(localStorage.getItem('emoticons')) || [];

        if (dataLocalStorage.length === 0) {
            console.log('No emoticons data found in localStorage');
            return;
        }

        const winnerItem = dataLocalStorage.reduce((max, item) => item.count > max.count ? item : max, dataLocalStorage[0]);
        setWinner(winnerItem);
    };

    return { winner, showResult };
}