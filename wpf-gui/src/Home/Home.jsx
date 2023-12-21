import { useState, useEffect } from "react"
import { Lesson11 } from "./Lessons/Lesson11"
import { Lesson12 } from "./Lessons/Lesson12"
import { Lesson13 } from "./Lessons/Lesson13"
import './Home.scss'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Home = () => {
    const [ selectedLesson, setSelectedLesson ] = useState(11)
    const [ selectedSection, setSelectedSection ] = useState(1)
    const [ mobile, setMobile ] = useState(false)

    const handleSelectSection = (number) => {  
        if(number === selectedSection){
           setSelectedSection(1) 
        } else{
            setSelectedSection(number)
        }
    }

    const handleSelectLesson = (count) => {  
        if (count === selectedLesson) {
            setSelectedLesson(11);
        } else {
            setSelectedLesson(count);
        }
        setMobile(false); // Змінюємо стан mobile тільки при виборі уроку
    }

    const handleMobile = () =>{
        setMobile(!mobile)
    }

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 586;
            setMobile(isMobile);
        };

        // Додаємо обробник подій на зміну розміру вікна
        window.addEventListener('resize', handleResize);

        // Викликаємо обробник подій при монтажі компонента
        handleResize();

        // Видаляємо обробник подій при розмонтажі компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className="home__wrapper">
            <div className="mobile__header" onClick={() => handleMobile()}>
                Матеріали <FontAwesomeIcon icon={faArrowDown} fontSize={20}/>
            </div>  

            <div className="home">
                <div className={`nav ${mobile ? 'mobile-nav' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__list__title" onClick={() => handleSelectSection(1)}>Розділ 1. Введеня у WPF</li>
                        {selectedSection === 1 && 
                            <div className="nav__block">
                                <p className="nav__block__item" onClick={() => handleSelectLesson(11)}>Особливості платформи WPF</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(12)}>Перший додаток .NET CLI</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(13)}>Перший додаток у Visual Studio</p>
                            </div>
                        }
                    </ul>
                </div>
                        

                <div className="home__right">
                    {selectedLesson === 11 && <Lesson11/>}
                    {selectedLesson === 12 && <Lesson12/>}
                    {selectedLesson === 13 && <Lesson13/>}
                </div>
            </div>             
            
        </div>
    )
}

export default Home