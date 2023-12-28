import "./Lesson.scss";
import first from "./Lesson415_img/first.png"
import second from "./Lesson415_img/second.png"
import three from "./Lesson415_img/three.png"
import four from "./Lesson415_img/four.png"
import five from "./Lesson415_img/five.png"
import six from "./Lesson415_img/six.png"

export const Lesson415 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">ToolBar</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph">Цей елемент, як правило, застосовується для забезпечення швидкого доступу до операцій, що найчастіше використовуються. Він може містити інші елементи, як кнопки, текстові поля, об'єкти Menu та ін.</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Також можна створювати відразу кілька пов'язаних елементів ToolBar усередині ToolBarTray . Перевага його використання полягає в можливості встановити як горизонтальне, так і вертикальне розташування елементів ToolBar у вікні програми.</p>           
                        <img src={three} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Використовуючи властивість Orientation, ми можемо налаштувати у ToolBarTray орієнтацію. За умовчанням вона горизонтальна, але ми можемо розташувати вертикально:</p>           
                        <img src={five} alt="#" className="img"/>
                        <img src={six} alt="#" className="img"/>
                        <p className="content__paragraph">Ще один елемент - StatusBar , багато в чому нагадує ToolBar і виконує схожі функції, тільки на відміну від ToolBar його мають зазвичай внизу вікна програми.</p> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson415