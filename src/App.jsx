import React, { useState, useEffect } from 'react';
import ListSmail from './ListSmail.jsx';
import { getImageUrl } from './js/utility.js';
import VotingResults from './VotingResults.jsx';

function App() {
    const [emoticons, setEmoticons] = useState([]);
    const [winner, setWinner] = useState(null);

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

    const showResult = () => {
        const dataLocalStorage = JSON.parse(localStorage.getItem('emoticons')) || [];
    
        if (dataLocalStorage.length === 0) {
            console.log('No emoticons data found in localStorage');
            return;
        }
    
        const winner = dataLocalStorage.reduce((max, item) => item.count > max.count ? item : max, dataLocalStorage[0]);
        setWinner(winner);
    }

    return (
        <section>
            <div className='container-content _container'>
                <h1>Проголосуй за смайлики</h1>
                <ul className='smail-list'>
                    {emoticons.map(item => (
                        <ListSmail key={item.id} src={item.id} count={item.count} onClick={() => updateCount(item.id)} />
                    ))}
                </ul>
                <button type="button" className="btn btn-success" onClick={showResult}>Success</button>
                {winner && <VotingResults src={winner.id} count={winner.count} />}
            </div>
        </section>
    );
}

export default App;


