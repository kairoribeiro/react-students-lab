import Score from "./Score";

const StudentList = (props) => {
    return (
        <>
        <h1>Student List</h1>
        {props.students.map(user =>
        <>
            <h2>{user.name}</h2>
            <h2>{user.bio}</h2>
            <Score key={user.id} scores={user.scores}/>
            </>

        )}

        </>

    )

}

export default StudentList;