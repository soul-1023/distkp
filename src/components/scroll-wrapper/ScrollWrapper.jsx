import './scroll-wrapper.css'
import Top from '../top/Top'
import ContentWrapper from '../content-wrapper/ContentWrapper'

function ScrollWrapper({data, handleClick, returnBack}) {
    const defineTop = (data) => {
        let name = "",
            description = ""

        for(let i = 0; i < data.length; i++) {
            let topContent = data[i]

            if(topContent['courses']) {
                name = topContent.name
                description = topContent.description
            } else if(topContent['lessons']) {
                name = topContent.name
                description = topContent.description
            } else if(topContent['owner']) {
                name = 'Все курсы'
                description = 'Любой курс на ваш вкус!'
            } else if(topContent['content']) {
                return;
            } else {
                name = "Специализации"
                description = `
                Углублённое изучение относительно узкого поля деятельности, в рамках специализации, обеспечивающее необходимый уровень компетенции специалиста, предназначенной для выполнения некоторой работы - основа современного мира. Поскольку он настолько сложен, что один человек не может иметь должную квалификацию сразу по всем направлениям.
                `            
            }

            return <Top 
                name={name}
                description={description}
            />
        }
    }


    return (
        <div className="scroll-wrapper">
            <div id="main-panel">
                { defineTop(data) }

                <ContentWrapper 
                    filling={data}
                    handleClick={handleClick}
                    returnBack={returnBack}
                />
            </div>
        </div>
    )
}

export default ScrollWrapper;