import "./Lesson.scss";
import first from "./Lesson33_img/first.png"
import second from "./Lesson33_img/second.png"
import three from "./Lesson33_img/three.png"
import four from "./Lesson33_img/four.png"
import five from "./Lesson33_img/five.png"

export const Lesson33= () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">GridSplitter</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Елемент GridSplitter допомагає створювати інтерфейси на кшталт елемента SplitContainer у WinForms, лише функціональніші. Він є деяким роздільником між стовпцями або рядками, шляхом зсуву якого можна регулювати ширину стовпців і висоту рядків. Як приклад можна навести стандартний інтерфейс провідника у Windows, де розділова смуга відокремлює деревоподібний список папок від панелі зі списком файлів. Наприклад,</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Рухаючи центральну лінію, що розділяє праву та ліву частини, ми можемо встановлювати їхню ширину.</p> 
                        <p className="content__paragraph">Отже, щоб використовувати елемент GridSplitter, нам треба помістити його в комірку Gride. По суті, це звичайний елемент, такий же, як кнопка. Як вище, у нас три осередки (оскільки три стовпці і один рядок), і GridSplitter поміщений у другий осередок. Зазвичай рядок або стовпець, які містять елемент, має для властивостей Height або Width значення Auto.</p> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Якщо ми маємо кілька рядків, і ми хочемо, щоб роздільник поширювався на кілька рядків, то ми можемо задати властивість Grid.RowSpan:</p>           
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">У разі, якщо ми задаємо горизонтальний роздільник, тоді відповідно треба використовувати властивістьGrid.ColumnSpan</p>
                        <p className="content__paragraph">Потім нам треба настроїти властивості. По-перше, треба налаштувати ширину (Width) для вертикальних сплітерів та висоту (Height) для горизонтальних. Якщо не задати відповідну властивість, то сплітер ми не побачимо, оскільки він дуже малий.</p>
                        <p className="content__paragraph">Потім нам треба задати вирівнювання. Якщо ми хочемо, що сплітер заповнював всю висоту доступної області (тобто якщо у нас вертикальний сплітер), то нам треба встановити для властивості VerticalAlignment значення Stretch.</p>
                        <p className="content__paragraph">Якщо ж у нас горизонтальний сплітер, то треба встановити властивість HorizontalAlignment вStretch</p>
                        <p className="content__paragraph">Також у прикладі вище використовується властивість ShowsPreview . Якщо воно дорівнює False, то зміна меж кнопок відбуватиметься відразу при переміщенні сплітера. Якщо ж воно одно True, тоді зміна меж буде відбуватися тільки після того, як переміщення сплітера завершиться, і при переміщенні спліттера ми побачимо його проекцію.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">На відміну від елемента SplitContainer у WinForms, у WPF можна встановити різну кількість динамічно регульованих частин вікна. Трохи вдосконалимо попередній приклад:</p>           
                        <img src={four} alt="#" className="img"/>
                        <img src={five} alt="#" className="img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson33