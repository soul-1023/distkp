import './course-card.css'

function Course({id, imgPath, text, handleClick}) {
    return (
        <div className="col-5">
            <div 
                className="course-card"
                onClick={() => handleClick(`/course/${id}`)}
            >
                <img src={imgPath} alt={text} />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Course;