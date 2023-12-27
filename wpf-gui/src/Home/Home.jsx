import { useState, useEffect } from "react"
import { Lesson11 } from "./Lessons/Lesson11"
import { Lesson12 } from "./Lessons/Lesson12"
import { Lesson13 } from "./Lessons/Lesson13"
import Lesson21 from "./Lessons/Lesson21"
import Lesson22 from "./Lessons/Lesson22"
import Lesson23 from "./Lessons/Lesson23"
import Lesson24 from "./Lessons/Lesson24"
import Lesson31 from "./Lessons/Lesson31"
import Lesson32 from "./Lessons/Lesson32"
import Lesson33 from "./Lessons/Lesson33"
import Lesson34 from "./Lessons/Lesson34"
import Lesson35 from "./Lessons/Lesson35"
import Lesson36 from "./Lessons/Lesson36"
import Lesson37 from "./Lessons/Lesson37"
import Lesson38 from "./Lessons/Lesson38"
import Lesson41 from "./Lessons/Lesson41"
import Lesson42 from "./Lessons/Lesson42"
import Lesson43 from "./Lessons/Lesson43"
import Lesson44 from "./Lessons/Lesson44"
import Lesson45 from "./Lessons/Lesson45"
import Lesson46 from "./Lessons/Lesson46"
import Lesson47 from "./Lessons/Lesson47"
import Lesson48 from "./Lessons/Lesson48"
import Lesson49 from "./Lessons/Lesson49"
import Lesson410 from "./Lessons/Lesson410"
import Lesson411 from "./Lessons/Lesson411"
import Lesson412 from "./Lessons/Lesson412"
import Lesson413 from "./Lessons/Lesson413"
import Lesson414 from "./Lessons/Lesson414"
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
                        <li className="nav__list__title" onClick={() => handleSelectSection(2)}>Розділ 2. XAML</li>
                        {selectedSection === 2 && 
                            <div className="nav__block">
                                <p className="nav__block__item" onClick={() => handleSelectLesson(21)}>Введення в вому XAML</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(22)}>Файли відділеного коду</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(23)}>Складні властивості та конвертери типів</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(24)}>Простір імен з C# в XAML</p>
                            </div>
                        }
                        <li className="nav__list__title" onClick={() => handleSelectSection(3)}>Розділ 3. Компонування</li>
                        {selectedSection === 3 && 
                            <div className="nav__block">
                                <p className="nav__block__item" onClick={() => handleSelectLesson(31)}>Введення в компонування</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(32)}>Grid</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(33)}>GridSplitter</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(34)}>StackPanel</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(35)}>DockPanel</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(36)}>WrapkPanel</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(37)}>Canvas</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(38)}>Властивості компонування елементів</p>
                            </div>
                        }
                        <li className="nav__list__title" onClick={() => handleSelectSection(4)}>Розділ 4. Елементи управління</li>
                        {selectedSection === 4 && 
                            <div className="nav__block">
                                <p className="nav__block__item" onClick={() => handleSelectLesson(41)}>Огляд елементів керування та їх властивостей</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(42)}>Елементи керування вмістом</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(43)}>Кнопки</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(44)}>CheckBox та RadioButton</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(45)}>Підказки ToolTip i Popup</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(46)}>Контейнери GroupBox та RadioButton</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(47)}>ScrollViewer. Створення прокручування</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(48)}>Текстові елементи керування</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(49)}>Елементи керування списками</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(410)}>ListBox</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(411)}>ComboBox</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(412)}>ListView</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(413)}>Створення вкладок та TabControl</p>
                                <p className="nav__block__item" onClick={() => handleSelectLesson(414)}>Меню</p>
                            </div>
                        }
                    </ul>
                </div>
                        

                <div className="home__right">
                    {selectedLesson === 11 && <Lesson11/>}
                    {selectedLesson === 12 && <Lesson12/>}
                    {selectedLesson === 13 && <Lesson13/>}
                    {selectedLesson === 21 && <Lesson21/>}
                    {selectedLesson === 22 && <Lesson22/>}
                    {selectedLesson === 23 && <Lesson23/>}
                    {selectedLesson === 24 && <Lesson24/>}
                    {selectedLesson === 31 && <Lesson31/>}
                    {selectedLesson === 32 && <Lesson32/>}
                    {selectedLesson === 33 && <Lesson33/>}
                    {selectedLesson === 34 && <Lesson34/>}
                    {selectedLesson === 35 && <Lesson35/>}
                    {selectedLesson === 36 && <Lesson36/>}
                    {selectedLesson === 37 && <Lesson37/>}
                    {selectedLesson === 38 && <Lesson38/>}
                    {selectedLesson === 41 && <Lesson41/>}
                    {selectedLesson === 42 && <Lesson42/>}
                    {selectedLesson === 43 && <Lesson43/>}
                    {selectedLesson === 44 && <Lesson44/>}
                    {selectedLesson === 45 && <Lesson45/>}
                    {selectedLesson === 46 && <Lesson46/>}
                    {selectedLesson === 47 && <Lesson47/>}
                    {selectedLesson === 48 && <Lesson48/>}
                    {selectedLesson === 49 && <Lesson49/>}
                    {selectedLesson === 410 && <Lesson410/>}
                    {selectedLesson === 411 && <Lesson411/>}
                    {selectedLesson === 412 && <Lesson412/>}
                    {selectedLesson === 413 && <Lesson413/>}
                    {selectedLesson === 414 && <Lesson414/>}
                </div>
            </div>             
            
        </div>
    )
}

export default Home