import { useState, useEffect } from 'react';
import { getImageUrl } from './utility';

export function useEmoticonsState() {
    const [emoticons, setEmoticons] = useState([]); 

    useEffect(() => {
        const collectionEmoticons = ["angry-wer.png", "angry.png", "smile.png", "thinking.png", "tongue.png"];
        const savedEmoticons = JSON.parse(localStorage.getItem('emoticons')) || [];

        if (savedEmoticons.length > 0) {
            const updatedEmoticons = savedEmoticons.map(element => {
                const regex = /[^/]+$/;
                const imageName = element.id.match(regex)[0];
                return { id: getImageUrl(imageName), count: element.count };
            });
            setEmoticons(updatedEmoticons);
        } else {
            const initialCollection = collectionEmoticons.map(smailURL => ({ id: getImageUrl(smailURL), count: 0 }));
            setEmoticons(initialCollection);
        }
    }, []);

    const updateCount = (nameURL) => {
        const updatedEmoticons = emoticons.map(item =>
            item.id === nameURL ? { ...item, count: item.count + 1 } : item
        );
        setEmoticons(updatedEmoticons);
        localStorage.setItem('emoticons', JSON.stringify(updatedEmoticons));
    };

    return {
        emoticons,
        updateCount,
    };
}
