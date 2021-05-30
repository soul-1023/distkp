import './lesson-card.css';

function Lesson({id, index, description, name, handleClick}) {
    return (
        <div 
            className="lesson-card"
            onClick={() => handleClick(`/lesson/${id}`)}
        >
            <div className="lesson-wrapper">
                <div>
                    <h1 className="grey-text">{index}</h1>

                    <div className="lesson-desc">
                        <h1 className="blue-text">{name}</h1>
                        <p className="grey-text">{description}</p>
                    </div>
                </div>

                <div>
                    <h3 className="blue-text">Теория</h3>
                </div>
            </div>
        </div>
    )
}



export default Lesson;