import "./Lesson.scss";
import first from "./Lesson47_img/first.png"
import second from "./Lesson47_img/second.png"
import three from "./Lesson47_img/three.png"
import four from "./Lesson47_img/four.png"
import five from "./Lesson47_img/five.png"

export const Lesson47 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">ScrollViewer. Створення прокручування</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Елемент ScrollViewer забезпечує прокручування вмісту. Може вміщати в себе тільки один елемент, тому всі елементи, що розміщуються всередині ScrollViewer, необхідно одягнути в ще один контейнер. Наприклад:</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">ScrollViewer підтримує як вертикальне, так і горизонтальне прокручування. Її можна встановити за допомогою властивостей HorizontalScrollBarVisibility та VerticalScrollBarVisibility . Ці властивості набувають одного з наступних значень:</p>  
                        <p className="content__paragraph">- Auto : наявність смуг прокручування встановлюється автоматично</p>  
                        <p className="content__paragraph">- Visible : смуги прокручування відображаються у вікні програми</p>  
                        <p className="content__paragraph">- Hidden : смуги прокручування не видно, але прокручування можливе за допомогою клавіш клавіатури</p>  
                        <p className="content__paragraph">- Disabled : смуги прокручування не використовуються, а сама прокручування навіть за допомогою клавіатури неможлива</p>  
                        <p className="content__paragraph">Серед властивостей слід відзначити ще CanContentScroll . Якщо вона встановлена ​​в True, то прокручування здійснюється не на кілька пікселів, а до початку наступного елемента.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Крім того, прокручування можна організувати програмним способом - за допомогою таких методів елемента ScrollViewer:</p>
                        <p className="content__paragraph">- LineUp(), LineDown(), LineRight(), LineLeft() : прокручування відповідно вгору, вниз, праворуч, ліворуч.</p> 
                        <p className="content__paragraph">- ScrollToEnd(), ScrollToHome() : прокручування в кінець вікна та на початок.</p> 
                        <p className="content__paragraph">- ScrollToRightEnd(), ScrollToLeftEnd() : прокручування в правий та лівий кінець вікна.</p>            
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Як приклад обернемо кілька елементів RadioButton елемент ScrollViewer:</p>  
                        <img src={three} alt="#" className="img"/> 
                        <p className="content__paragraph">А у файлі коду C# пропишемо обробники кнопок, які виконуватимуть програмне прокручування:</p>         
                        <img src={four} alt="#" className="img"/> 
                        <img src={five} alt="#" className="img"/> 
                    </div>
                    
                </div>
            </div>
        </div>    
    )
}

export default Lesson47