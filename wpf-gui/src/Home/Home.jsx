import { useState } from "react"
import { Lesson11 } from "./Lessons/Lesson11"
import { Lesson12 } from "./Lessons/Lesson12"
import './Home.scss'

export const Home = () => {
    const [ selectedLesson, setSelectedLesson ] = useState(null)
    const [ selectedSection, setSelectedSection ] = useState(null)

    const handleSelectSection = (number) => {  
        if(number === selectedSection){
           setSelectedSection(null) 
        } else{
            setSelectedSection(number)
        }
    }

    const handleSelectLesson = (count) => {  
        if(count === selectedLesson){
            setSelectedLesson(null) 
        } else{
            setSelectedLesson(count)
        }
    }

    return(
        <div className="home">            
            <div className="nav">
                <ul className="nav__list">
                    <li className="nav__list__title" onClick={() => handleSelectSection(1)}>Розділ 1. Введеня у WPF</li>
                    {selectedSection === 1 && 
                        <div className="nav__block">
                            <p className="nav__block__item" onClick={() => handleSelectLesson(11)}>Особливості платформи WPF</p>
                            <p className="nav__block__item" onClick={() => handleSelectLesson(12)}>Перший додаток .NET CLI</p>
                            <p className="nav__block__item" onClick={() => handleSelectLesson(12)}>Перший додаток у Visual Studio</p>
                        </div>
                    }
                </ul>
            </div>
                    

            <div className="home__right">
                {selectedLesson === 11 && <Lesson11/>}
                {selectedLesson === 12 && <Lesson12/>}
            </div>
        </div>
    )
}

export default Home