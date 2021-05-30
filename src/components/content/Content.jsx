import './content.css'
import Spec from '../cards/spec/Spec'
import Course from '../cards/course/Course'
import Lesson from '../cards/lesson/Lesson'
import LessonAndTasks from '../cards/lesson-task/LessonAndTasks'

const distributionContent = (content, handleClick) => {
    let filling = []

    for(let i = 0; i < content.length; i++) {
        let elems = content[i]
        
        if(elems['courses']) {
            filling = JSON.parse(elems['courses']).map(e => {
                return <Course
                    key={e.id}
                    id={e.id}
                    imgPath={e.img_path}
                    text={e.name}
                    handleClick={handleClick}
                />
            })
        } else if(elems['lessons']) {
            filling = JSON.parse(elems['lessons']).map((e, index) => {
                return <Lesson
                    key={e.id}
                    id={e.id}
                    index={index + 1}
                    description={e.desc}
                    name={e.name}
                    handleClick={handleClick}
                />
            })
        } else if(elems['content']) {
            filling.push(
                <LessonAndTasks
                    key={elems.id}
                    name={elems.lessonName} 
                    courseName={elems.courseName}
                    content={elems.content}
                />
            )
        } else if(elems['owner']) {
            
            filling.push(<Course
                key={elems.id}
                id={elems.id}
                imgPath={elems.img_path}
                text={elems.name}
                handleClick={handleClick}
            />)
        } else {
            filling.push(
                <Spec
                    key={elems.id}
                    id={elems.id}
                    title={elems.name}
                    description={elems.description}
                    amount={elems.interested_num}
                    imgPath={elems.img_path}
                    handleClick={handleClick}
                />
            )
        }
    }

    return filling
}

function Content({filling, handleClick, returnBack}) {


    return (
        <div id="content">
            <div id="back" onClick={() => returnBack()}>
                <div id="arrow">
                    <i className="fa fa-arrow-left" />
                </div>
            </div>

            <div id="blocks-wrapper">
                { distributionContent(filling, handleClick) }
            </div>    
        </div>
    )
}

export default Content;

