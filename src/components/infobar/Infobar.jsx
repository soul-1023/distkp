import './infobar.css'

function Infobar({time, author}) {
    return (
        <div className="info-bar">
            {!!time && <p>Длительность курса {time} часа</p>}
            {!!author && <p>Автор: {author}</p>}
        </div>
    )
}

export default Infobar;