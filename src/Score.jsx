import { studentList } from "./data";
const Score = (props) => {
    return (
        <>
        <h1>date: {props.score.date}  / score: {props.score.score}</h1>
        </>
    )

}

export default Score;