function VotingResults({ src, count }){

    return(
       <div className='vinner-content _conteiner'>
        <h2>Переможець</h2>
        <span>Кількість голосів: {count}</span>
        <img src={src} alt="no img" />
       </div>
    )

}

export default VotingResults;