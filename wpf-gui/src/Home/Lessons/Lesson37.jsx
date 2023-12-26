import "./Lesson.scss";
import first from "./Lesson37_img/first.png"
import second from "./Lesson37_img/second.png"

export const Lesson37 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Canvas</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Контейнер Canvas є найпростішим контейнером. Для розміщення на ньому необхідно вказати для елементів точні координати щодо сторін Canvas. Для встановлення координат елементів використовуються властивості Canvas.Left, Canvas.Right, Canvas.Bottom, Canvas.Top. Наприклад, властивість Canvas.Left вказує, наскільки одиниць від лівої сторони контейнера перебуватиме елемент, а властивість Canvas.Top - наскільки одиниць нижче за верхню межу контейнера знаходиться елемент.</p>
                        <p className="content__paragraph">При цьому як одиниці використовуються не пікселі, а незалежні від пристрою одиниці, які допомагають ефективно керувати масштабуванням елементів. Кожна така одиниця дорівнює 1/96 дюйма, і при стандартній установці в 96 dpi ця незалежна від пристрою одиниця дорівнюватиме фізичному пікселю, так як 1/96 дюйма * 96 dpi (96 точок на дюйм) = 1. У той же час при роботі на інших моніторів або інших встановлених розмірів, встановлених у програмі, будуть ефективно масштабуватися. Наприклад, при дозволі в 120 dpi одна умовна одиниця дорівнюватиме 1,25 пікселя, так як 1/96 дюйма * 120 dpi = 1,25 пікселя.</p> 
                        <p className="content__paragraph">Якщо елемент не використовує властивості Canvas.Top та інші, то за замовчуванням властивості Canvas.Leftі Canvas.Top дорівнюватимуть нулю, тобто він перебуватиме у верхньому лівому кутку.</p> 
                        <p className="content__paragraph">Також треба враховувати, що не можна одночасно задавати Canvas.Left та Canvas.Right або Canvas.Bottom та Canvas.Top. Якщо таке станеться, то остання задана властивість не враховуватиметься. Наприклад:</p> 
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson37