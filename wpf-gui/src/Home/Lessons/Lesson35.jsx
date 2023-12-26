import "./Lesson.scss";
import first from "./Lesson35_img/first.png"
import second from "./Lesson35_img/second.png"
import three from "./Lesson35_img/three.png"
import four from "./Lesson35_img/four.png"
import five from "./Lesson35_img/five.png"

export const Lesson35 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">DockPanel</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Цей контейнер притискає вміст до певної сторони зовнішнього контейнера. Для цього у вкладених елементів треба встановити бік, до якого вони притискатимуться за допомогою властивості DockPanel.Dock. Наприклад,</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">У результаті отримуємо масив кнопок, кожна з яких притискається до певної сторони елемента DockPanel:</p> 
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Причому в останній кнопки ми можемо не встановлювати властивість DockPanel.Dock. Вона вже заповнює весь простір, що залишився. Такий ефект виходить завдяки установці у DockPanel властивості LastChildFill="True", яка означає, що останній елемент заповнює все місце, що залишилося. Якщо у цієї властивості поміняти True на False, то кнопка притиснеться до лівої сторони, заповнивши тільки місце, яке їй необхідно.</p>   
                        <p className="content__paragraph">Також зверніть увагу на порядок прикріплення до кнопок властивості DockPanel.Dock. Наприклад, якщо змінимо порядок на:</p>         
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">В цьому випадку нижня кнопка вже заповнюватиме менше місце.</p>  
                        <p className="content__paragraph">Ми також можемо притиснути до однієї сторони одразу кілька елементів. У цьому випадку вони просто розташовуватимуться по порядку:</p>  
                        <img src={four} alt="#" className="img"/>
                        <img src={five} alt="#" className="img"/>
                        <p className="content__paragraph">Контейнер DockPanel особливо зручно використовувати для створення стандартних інтерфейсів, де верхню та ліву частину можуть займати будь-які меню, нижню – рядок стану, праву – якась додаткова інформація, а в центрі перебуватиме основний зміст.</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson35