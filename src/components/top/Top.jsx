import './top.css'


function Top({name, description}) {

    return (
        <div id="top">
            <div id="name">
                <h1>{name}</h1>
            </div>

            <div id="description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Top;