import './lesson-content.css'

function LessonAndTasks({name, courseName, content}) {
    return (
        <div id="lesson-content">
            <h2 id="title">{name}</h2>

            <br /><hr className="grey-line"/><br />

            <p id="lesson-text">{content}</p>
        </div>
    )
}

export default LessonAndTasks;