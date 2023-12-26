import "./Lesson.scss";
import first from "./Lesson46_img/first.png"
import second from "./Lesson46_img/second.png"
import three from "./Lesson46_img/three.png"
import four from "./Lesson46_img/four.png"
import five from "./Lesson46_img/five.png"
import six from "./Lesson46_img/six.png"
import seven from "./Lesson46_img/seven.png"
import eight from "./Lesson46_img/eight.png"
import nine from "./Lesson46_img/nine.png"

export const Lesson46 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Контейнери GroupBox та Expander</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Особлива група елементів управління утворена від класу HeaderedContentControl , який є підкласом ContentControl. Ця група відрізняється тим, що дозволяє задати заголовок вмісту. До цієї групи елементів входять GroupBox та Expander.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">GroupBox</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент GroupBox організовує набори елементів управління окремими групами. При цьому ми можемо визначити у групи заголовок:</p>           
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">GroupBox включає групу різних елементів, однак, як і будь-який елемент управління вмістом, він приймає в собі лише один контейнер, тому спочатку ми вкладаємо в GroupBox загальний контейнер, а в нього вже всі інші елементи.</p>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Проте заголовок GroupBox необов'язково представляє простий текст. Ми можемо піти далі і змінити попередній приклад, засунувши кнопку замовлення прямо в заголовок:</p>           
                        <img src={three} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">Залишилося додати обробник натискання кнопки Click для обробки замовлення та можна замовляти страви.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Expander</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Представляє прихований вміст, що розкривається натисканням мишкою на покажчик у вигляді стрілки. Причому вміст знову ж таки може бути різним: кнопки, текст, картинки і т.д.</p>           
                        <p className="content__paragraph">За допомогою властивості IsExpanded можна встановити розкриття вузла при старті програми. За замовчуванням вузол прихований. Приклад використання:</p>
                        <img src={five} alt="#" className="img"/>
                        <img src={six} alt="#" className="img"/>
                        <p className="content__paragraph">Знову ж таки ми можемо змінити заголовок, вклавши в нього, наприклад, кнопку або зображення:</p> 
                        <img src={seven} alt="#" className="img"/>
                        <p className="content__paragraph">Якщо ми хочемо обробити відкриття експандера, то нам треба обробити подію Expanded (а при обробці закриття – подія Collapsed). Дані події викликаються до самої дії, тому ми можемо перед відкриттям, наприклад динамічно встановлювати зміст експандера:</p> 
                        <p className="content__paragraph">
                            {'<Expander Expanded="Expander_Expanded" Collapsed="Expander_Collapsed" />'}
                        </p>
                        <p className="content__paragraph">А обробка подій у файлі C# могла б мати такий вигляд:</p> 
                        <img src={eight} alt="#" className="img"/>
                        <p className="content__paragraph">У результаті при розкритті елемента замість початкового вмісту буде визначена в коді кнопка.</p> 
                        <p className="content__paragraph">Програмне створення Expandera:</p> 
                        <img src={nine} alt="#" className="img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson46