import "./Lesson.scss";
import first from "./Lesson36_img/first.png"
import second from "./Lesson36_img/second.png"
import three from "./Lesson36_img/three.png"
import four from "./Lesson36_img/four.png"
import five from "./Lesson36_img/five.png"
import six from "./Lesson36_img/six.png"

export const Lesson36 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">WrapPanel</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Ця панель, подібно StackPanel, має всі елементи в одному рядку або колонці в залежності від того, яке значення має властивість Orientation - Horizontal або Vertical. Головна відмінність від StackPanel - якщо елементи не поміщаються в рядку або стовпці, створюються нові стовпець або рядок для елементів, що не помістилися.</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">У горизонтальному стеку ті елементи, у яких явно не встановлена ​​висота, автоматично прийматимуть висоту найбільшого елемента зі стека.</p>           
                        <p className="content__paragraph">Вертикальний WrapPanel робиться аналогічно:</p>
                        <img src={three} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">У вертикальному стеку елементи, у яких явно не вказана ширина, автоматично приймають ширину найширшого елемента.</p>    
                        <p className="content__paragraph">Ми також можемо встановити для всіх вкладених елементів якусь певну ширину (за допомогою властивості ItemWidth) або висоту (властивість ItemHeight):</p>             
                        <img src={five} alt="#" className="img"/>
                        <img src={six} alt="#" className="img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson36