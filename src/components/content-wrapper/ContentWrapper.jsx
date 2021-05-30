import './content-wrapper.css'
import Content from '../content/Content'
import Infobar from '../infobar/Infobar'

function ContentWrapper({filling, handleClick, returnBack}) {
    const defineInfobar = (data) => {
        for(let elem of data) {
            if(elem['lessons']) {
                return <Infobar 
                    time={elem.waste_of_time}
                    author={elem.owner}
                />
            } 
            
            return;
        }
    }

    return (
        <div id="content-wrapper">
            { defineInfobar(filling) }

            <Content 
                filling={filling}
                handleClick={handleClick}
                returnBack={returnBack}
            />
        </div>
    )
}

export default ContentWrapper;