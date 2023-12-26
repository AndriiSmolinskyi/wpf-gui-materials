import "./Lesson.scss";
import first from "./Lesson34_img/first.png"
import second from "./Lesson34_img/second.png"
import three from "./Lesson34_img/three.png"
import four from "./Lesson34_img/four.png"

export const Lesson34= () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">StackPanel</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph">Це простіший елемент компонування. Він має всі елементи в ряд або по горизонталі, або по вертикалі в залежності від орієнтації. Наприклад,</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">В даному випадку для властивості Orientation за замовчуванням використовується значення Vertical, тобто StackPanel створює вертикальний ряд, який містить всі вкладені елементи зверху вниз. Ми також можемо встановити горизонтальний стек. Для цього нам треба вказати властивість Orientation="Horizontal":</p>           
                        <img src={three} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">
                            {'При горизонтальній орієнтації всі вкладені елементи розташовуються праворуч. '}
                            {'Якщо хочемо, щоб наповнення стека починалося справа наліво, нам треба задати властивість FlowDirection: '}
                            {'<StackPanel Orientation="Horizontal" FlowDirection="RightToLeft">. '}
                            {'За умовчанням ця властивість має значення LeftToRight - тобто зліва направо.'}
                        </p>
                    </div>
                </div>






                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph"></p>           
                    </div>
                </div>
            </div>
        </div>    
    )
}

//<a className="link" target="blank" href=""></a> 
// <img src={first} alt="#" className="img"/>
// import first from "./Lesson11_img/first.png"
export default Lesson34