import "./Lesson.scss";
import first from "./Lesson13_img/first.png"
import second from "./Lesson13_img/second.png"
import three from "./Lesson13_img/three.png"
import four from "./Lesson13_img/four.png"
import five from "./Lesson13_img/five.png"
import six from "./Lesson13_img/six.png"
import seven from "./Lesson13_img/seven.png"
import eight from "./Lesson13_img/eight.png"


export const Lesson13= () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Перший додаток у Visual Studio</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Для створення програм за допомогою технології WPF ми можемо обмежитися текстовим редактором та .NET CLI. Тим не менш, ми також можемо використовувати середовище розробки Visual Studio, яке в деяких аспектах спрощує написання програми. Наприклад, візьмемо її безкоштовну та повнофункціональну версію - Visual Studio Community 2022 , яку можна завантажити за наступною адресою: <a className="link" target="blank" href="https://visualstudio.microsoft.com/ru/downloads/">Посилання</a>.</p>
                        <img src={first} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Щоб додати Visual Studio підтримку проектів для WPF і C# і .NET 7, у програмі установки серед робочих навантажень потрібно вибрати тільки пункт Розробка класичних додатків .NET . Можна вибрати і більше опцій або взагалі всі опції, проте варто враховувати вільний розмір на жорсткому диску - чим більше опцій буде обрано, тим більше місця на диску буде зайнято.</p>           
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Після встановлення середовища та всіх його компонентів, запустимо Visual Studio і створимо проект графічної програми. На стартовому екрані оберемо Create a new project (Створити новий проект)</p>           
                        <img src={three} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">На наступному вікні як тип проекту виберемо WPF Application :</p>
                        <img src={four} alt="#" className="img"/>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Далі на наступному етапі нам буде запропоновано вказати ім'я проекту та каталог, де буде розміщуватися проект.</p>           
                        <img src={five} alt="#" className="img"/>  
                        <p className="content__paragraph">У полі Project Name дамо проекту якусь назву. У моєму випадку це HelloApp .</p>   
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Наступне вікно Visual Studio запропонує нам вибрати версію .NET, яка буде використовуватися для проекту. За замовчуванням тут вибрано останню на даний момент версію .NET (у моєму випадку .NET 8.0). Залишимо і натисніть кнопку Create (Створити) для створення проекту.</p>           
                        <img src={six} alt="#" className="img"/>  
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Після цього Visual Studio відкриє проект із створеними за замовчуванням файлами:</p>           
                        <img src={seven} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Структура проекту</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Праворуч знаходиться вікно Solution Explorer, де можна побачити структуру нашого проекту. В даному випадку у нас згенерована за умовчанням структура, яка аналогічна тій, що створюється за допомогою .NET CLI:</p> 
                        <p className="content__paragraph">- Dependencies - це вузол містить складання dll, які додані до проекту за замовчуванням. Ці збірки містять класи бібліотеки .NET, які використовуватиме C#</p>  
                        <p className="content__paragraph">- App.xaml задає ресурси програми та ряд конфігураційних налаштувань у вигляді коду XAML. Зокрема, у файлі App.xaml задається файл вікна програми, яке відкриватиметься під час запуску програми. Якщо ви відкриєте цей файл, то можете знайти в ньому рядок StartupUri="MainWindow.xaml" - тобто в даному випадку, коли ми запустимо програму, буде створюватись інтерфейс з файлу MainWindow.xaml .</p>  
                        <p className="content__paragraph">App.xaml.cs - це файл коду на C#, пов'язаний з файлом App.xaml , який також дозволяє задати ряд загальних ресурсів та загальну логіку для програми, але у вигляді коду C#.</p>  
                        <p className="content__paragraph">- AssemblyInfo.cs містить інформацію про складання, що створюється в процесі компіляції</p>  
                        <p className="content__paragraph">- MainWindow.xaml представляє візуальний інтерфейс вікна програми у вигляді коду XAML.</p>  
                        <p className="content__paragraph">MainWindow.xaml.cs - це файл логіки коду C#, пов'язаний з вікном MainWindow.xaml.</p>  
                        <p className="content__paragraph">За промовчанням ці файли відкриті у текстовому редакторі Visual Studio. Причому файл MainWindow.xaml має два уявлення: візуальне - у режимі WYSIWIG відображає весь графічний інтерфейс цього вікна програми, і під ним декларативне оголошення інтерфейсу XAML. Якщо ми змінимо декларативну розмітку, наприклад, визначимо там кнопку, то ці зміни відображатимуться у візуальному поданні. Таким чином, ми зможемо відразу отримати уявлення про інтерфейс вікна програми.</p>            
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Запуск проекту</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Щоб запустити програму в режимі налагодження, натисніть клавішу F5 або зелену стрілку на панелі Visual Studio. І після цього запуститься порожнє вікно за промовчанням.</p>           
                        <img src={eight} alt="#" className="img"/> 
                        <p className="content__paragraph">Після запуску програми студія компілює його у файл із розширенням exe. Знайти цей файл можна, зайшовши в папку проекту і далі до каталогу \bin\Debug\net7.0-windows</p> 
                    </div>
                </div>
            </div>
        </div>    
    )
}


export default Lesson13