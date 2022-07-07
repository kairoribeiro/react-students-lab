import Score from "./Score";

const Student = (props) => {
    return (
        <>
        <h1>Student</h1>
        <>
            <h2>{props.student.name}</h2>
            <h2>{props.student.bio}</h2>
        {props.student.scores.map((score, idx) => 
            <Score key={idx} score={score}/>
        )}
            </>
        </>

    )

}

export default Student;