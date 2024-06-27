import React from 'react';
import ListSmail from './components/ListSmile';
import VotingResults from './components/ShowVotingResults';
import { useEmoticonsState } from './js/useEmoticonsState';
import { useWinnerState } from './js/useWinnerState';
import './scss/main.scss';

function App() {
    const { emoticons, updateCount } = useEmoticonsState();
    const { winner, showResult } = useWinnerState();

    return (
        <section>
            <div className='container-content _container'>
                <h1>Проголосуй за смайлики</h1>
                <ul className='smail-list'>
                    {emoticons.map(item => (
                        <ListSmail key={item.id} src={item.id} count={item.count} updateCount={updateCount} />
                    ))}
                </ul>
                <button type="button" className="btn btn-success" onClick={showResult}>Success</button>
                {winner && <VotingResults id={winner.id} count={winner.count} />}
            </div>
        </section>
    );
}

export default App;
