import React from 'react';

function VotingResults({ id, count }) {
    return (
        <div className='voting-results-content'>
            <h1>Переможець</h1>
            <span>Кількість голосів: {count}</span>
            <img src={id} alt="no photo" />
        </div>
    );
}

export default VotingResults;