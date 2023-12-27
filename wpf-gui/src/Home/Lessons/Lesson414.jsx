import "./Lesson.scss";
import first from "./Lesson414_img/first.png"
import second from "./Lesson414_img/second.png"
import three from "./Lesson414_img/three.png"
import four from "./Lesson414_img/four.png"
import five from "./Lesson414_img/five.png"
import six from "./Lesson414_img/six.png"
import seven from "./Lesson414_img/seven.png"
import eight from "./Lesson414_img/eight.png"

export const Lesson414 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Menu</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Цей елемент використовується для створення стандартних меню:</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент Menu включає набір елементів MenuItem, які знову ж таки є елементами керування вмістом і можуть включати інші елементи MenuItem і не тільки. Також ми можемо вкласти в меню інші елементи, які неявно будуть перетворені в MenuItem. Наприклад:</p>           
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Також для розділення окремих пунктів меню можна включати елемент Separator, як у прикладі вище.</p> 
                        <p className="content__paragraph">Ми також можемо налаштувати зовнішній вигляд відображення, задавши властивість MenuItem.Header або використовуючи властивість Icons:</p> 
                        <img src={four} alt="#" className="img"/>
                        <img src={five} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Щоб обробити натискання пункту меню і зробити певну дію, можна використовувати подію Click, однак у майбутньому ми познайомимося з ще одним інструментом під назвою команди, який також широко застосовується для реакцію натискання кнопок меню. А поки що зв'яжемо обробник з подією:</p>           
                        <p className="content__paragraph">
                            {'<MenuItem Header="Перегляд" Click="MenuItem_Click"></MenuItem>'}
                        </p>
                        <p className="content__paragraph">І визначимо сам обробник у коді C#:</p>
                        <img src={six} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">ContextMenu</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Клас ContextMenu служить для створення контекстних спливаючих меню, що відображаються після натискання правої кнопки миші. Цей елемент також містить колекцію елементів MenuItem. Однак сам по собі ContextMenu існувати не може і повинен бути прикріплений до іншого елементу керування. Для цього елементи мають властивість ContextMenu:</p>
                        <img src={seven} alt="#" className="img"/>
                        <img src={eight} alt="#" className="img"/>
                        <p className="content__paragraph">І при натисканні правою кнопкою миші на один із елементів з'явиться контекстне меню.</p>             
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson414