import "./Lesson.scss";
import first from "./Lesson419_img/first.png"
import second from "./Lesson419_img/second.png"
import three from "./Lesson419_img/three.png"
import four from "./Lesson419_img/four.png"
import five from "./Lesson419_img/five.png"
import six from "./Lesson419_img/six.png"

export const Lesson419 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Робота із датами. Calendar та DatePicker</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елементи для роботи з даними представлені такими класами: Calendar та DatePicker .</p>
                        <p className="content__paragraph">Calendar є елемент у вигляді календаря, тоді як DatePicker - текстове поле для введення дати з календарем, що випадає, після введення.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Вони мають деякі загальні властивості:</p>    
                        <p className="content__paragraph">
                            {'BlackoutDates'}
                            <br />
                            {'Приймає значення об\'єкт CalendarDateRange , що задає за допомогою властивостей Start і End діапазон дат, які будуть закреслені в календарі.'}
                        </p>
                            <p className="content__paragraph">
                            {'DisplayDateStart та DisplayDateEnd'}
                            <br />
                            {'Задають відповідно початкову та кінцеву дату діапазону, який відображатиметься у календарі.'}
                        </p>
                        <p className="content__paragraph">
                            {'IsTodayHighlighted'}
                            <br />
                            {'Зазначає, чи буде виділено поточну дату.'}
                        </p>
                        <p className="content__paragraph">
                            {'SelectedDate ( SelectedDates )'}
                            <br />
                            {'Задає виділену дату (діапазон виділених дат).'}
                        </p>
                        <p className="content__paragraph">
                            {'FirstDayOfWeek'}
                            <br />
                            {'Задає перший день тижня.'}
                        </p> 
                        <div className="content__block">
                            <p className="content__paragraph">Також Calendar має ще дві важливі властивості: DisplayMode (формат відображення дат) та SelectionMode (спосіб виділення).</p>           
                            <p className="content__paragraph">DisplayMode може приймати одне з наступних значень:</p>
                            <p className="content__paragraph">- Month (за промовчанням) відображає всі дні поточного місяця</p>
                            <p className="content__paragraph">- Month (за промовчанням) відображає всі дні поточного місяця</p>
                            <p className="content__paragraph">- Year відображає всі місяці поточного року</p>
                            <p className="content__paragraph">SelectionMode може приймати одне з наступних значень:</p>
                            <p className="content__paragraph">- SingleDate (за замовчуванням) виділяє лише одну дату</p>
                            <p className="content__paragraph">- None забороняє виділення</p>
                            <p className="content__paragraph">- SingleRange по натисканню на Ctrl виділяє кілька послідовно дат, що йдуть.</p>
                            <p className="content__paragraph">- MultipleRange за натисканням на Ctrl виділяє кілька послідовно не йдуть діапазонів дат</p>
                            <p className="content__paragraph">Наприклад:</p> 
                            <img src={first} alt="#" className="img"/>
                            <p className="content__paragraph">Зверніть увагу, що за завдання дати ми спочатку пишемо місяць, а потім число.</p> 
                            <p className="content__paragraph">Щоб використовувати у програмі вибір дати користувачем, ми можемо опрацювати подію SelectedDatesChanged в коді c#:</p> 
                            <img src={second} alt="#" className="img"/>
                            <img src={three} alt="#" className="img"/>
                        </div> 
                        <div className="content__block">
                            <p className="content__paragraph">Для створення набору виділених дат нам треба підключити в xaml простір імен System:</p>           
                            <img src={four} alt="#" className="img"/>
                            <img src={five} alt="#" className="img"/>
                        </div>     
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">DatePicker</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Крім вище названих властивостей, елемент DatePicker визначає ще ряд властивостей, серед яких IsDropDownOpen (показує, чи буде пов'язаний з елементом спливаючий календар залишатися відкритим після вибору дати) і SelectedDateFormat (формат дати, приймає значення Short - формат у вигляді дд.мм.гггг або мм .дд.гггг та значення Long - з повними назвами місяців):</p>    
                        <p className="content__paragraph">
                            {'<DatePicker Name="datePicker1" IsDropDownOpen="True" SelectedDateFormat="Short" />'}
                        </p>
                        <img src={six} alt="#" className="img"/>
                        <p className="content__paragraph">І при натисканні на елемент з'явиться той самий календар для подальшого вибору дати.</p>         
                    </div>
                </div>
            </div>
        </div>    
    )
}

//<a className="link" target="blank" href=""></a> 
// <img src={first} alt="#" className="img"/>
// import first from "./Lesson11_img/first.png"
export default Lesson419