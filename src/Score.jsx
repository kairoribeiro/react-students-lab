const Score = (props) => {
    return (
        <>
         {props.scores.map(user => 
        <>
         <h1>date: {props.scores.date}</h1>
         <h1>score: {props.scores.score}</h1>
        </>
         )} 

       
        </>

    )

}

export default Score;