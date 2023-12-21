import "./Lesson.scss";
import first from "./Lesson12_img/first.png"
import second from "./Lesson12_img/second.png"
import three from "./Lesson12_img/three.png"
import four from "./Lesson12_img/four.png"
import five from "./Lesson12_img/five.png"
import six from "./Lesson12_img/six.png"
import seven from "./Lesson12_img/seven.png"
import eight from "./Lesson12_img/eight.png"
import nine from "./Lesson12_img/nine.png"

export const Lesson12 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Перший додаток з .NET CLI</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Для створення програми на WPF та C# необхідні дві речі: текстовий редактор для написання коду програми та компілятор для компіляції коду у програму.</p>
                        <p className="content__paragraph">Як текстовий редактор можна взяти будь-який, наприклад, <a className="link" target="blank" href="https://code.visualstudio.com/download">Visual Studio Code</a></p>  
                        <p className="content__paragraph">А для компіляції та запуску програми нам знадобиться .NET SDK. Для його встановлення перейдемо на офіційний сайт за посиланням <a className="link" target="blank" href="https://dotnet.microsoft.com/en-us/download">.NET SDK</a></p>  
                    </div>
                    <div className="content__block">
                        <img src={first} alt="#" className="img"/>    
                        <p className="content__paragraph">Після встановлення .NET SDK для першого проекту визначимо якусь папку. Наприклад, у моєму випадку це буде папка C:\dotnet\wpf\helloapp . Відкриємо термінал/командний рядок і перейдемо до створеної папки проекту за допомогою cd</p>       
                        <p className="content__paragraph">cd C:\dotnet\wpf\helloapp</p>  
                        <p className="content__paragraph">У цьому випадку ми для створення та запуску проекту ми будемо використовувати вбудовану інфраструктуру .NET CLI, яка встановлюється разом із .NET SDK.</p>  
                        <p className="content__paragraph">Для створення проекту в .NET CLI використовується команда dotnet new , після якої вказується тип проекту. Для створення проекту WPF застосовується шаблон - wpf . Тому введемо в терміналі команду dotnet new wpf :</p>  
                        <img src={second} alt="#" className="img"/>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Структура проекту WPF</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Розглянемо базову структуру найпростішого стандартного проекту WPF:</p>           
                        <p className="content__paragraph">- helloapp.csproj : стандартний файл проекту C#, який відповідає назві проекту (за умовчанням назві каталогу) та описує всі його налаштування.</p>  
                        <p className="content__paragraph">- App.xaml задає ресурси програми та ряд конфігураційних налаштувань у вигляді коду XAML. Зокрема, у файлі App.xaml задається файл вікна програми, яке відкриватиметься під час запуску програми. Якщо ви відкриєте цей файл, то можете знайти в ньому рядок StartupUri="MainWindow.xaml" - тобто в даному випадку, коли ми запустимо програму, буде створюватись інтерфейс з файлу MainWindow.xaml .</p>  
                        <p className="content__paragraph">  App.xaml.cs - це файл коду на C#, пов'язаний з файлом App.xaml , який також дозволяє задати ряд загальних ресурсів та загальну логіку для програми, але у вигляді коду C#.</p>  
                        <p className="content__paragraph">- AssemblyInfo.cs містить інформацію про складання, що створюється в процесі компіляції</p>  
                        <p className="content__paragraph">- MainWindow.xaml представляє візуальний інтерфейс вікна програми у вигляді коду XAML.</p>  
                        <p className="content__paragraph">  MainWindow.xaml.cs - це файл логіки коду C#, пов'язаний з вікном MainWindow.xaml .</p>  
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Наприклад, подивимося на вміст файлу helloapp.csproj</p>  
                        <img src={three} alt="#" className="img"/>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Для компіляції програми WPF наведено такі настройки:</p>   
                        <p className="content__paragraph">-OutputType : визначає вихідний тип проекту. Повинен мати значення WinExe - тобто додаток, що виконується з розширенням exe під Windows</p>   
                        <p className="content__paragraph">-TargetFramework : визначає версію фреймворку .NET, що застосовується для компіляції. Оскільки при створенні проекту в моєму випадку було обрано версію .NET 8, а сам проект залежить від компонентів Windows, то тут має бути значення net8.0-windows</p>   
                        <p className="content__paragraph">-Nullable : підключає до проекту функціональність посилальних nullable-типів</p>   
                        <p className="content__paragraph">-UseWPF : вказує, чи буде використовувати проект WPF (для цього встановлюється значення true)</p>   
                        <p className="content__paragraph">-ImplicitUsings : включає в проект функціональність глобальних просторів імен, що неявно підключаються.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Запуск проекту</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Проект за замовчуванням вже має деяку базову примітивну логіку. Отже, запустимо проект. Для цього виконаємо команду</p>           
                        <p className="content__paragraph">dotnet run</p>  
                        <p className="content__paragraph">Під час запуску запускається графічне вікно, код якого визначають файли MainWindow.xaml/MainWindow.xaml.cs:</p>  
                        <img src={four} alt="#" className="img"/>  
                        <p className="content__paragraph">Після запуску програми студія компілює його у файл із розширенням exe. Знайти цей файл можна, зайшовши в папку проекту і далі до каталогу \bin\Debug\net8.0-windows</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Створення першої програми</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Однак програма з порожнім вікном - не дуже показовий приклад. Додамо до нього трохи більше функціоналу. Для цього відкриємо файл логіки коду вікна програми - MainWindow.xaml.cs . Зараз він має наступний код:</p>           
                        <img src={five} alt="#" className="img"/> 
                        <p className="content__paragraph">Тут визначено клас MainWindow, який успадковується від класу Window і бере від нього базову функціональність вікон. А в конструкторі цього класу викликається метод InitializeComponent(), який дозволяє застосувати інтерфейс із файлу</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">MainWindow.xaml.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Тепер змінимо файл MainWindow.xaml.cs наступним чином:</p>   
                        <img src={six} alt="#" className="img"/>  
                        <p className="content__paragraph">Тут доданий метод Button_Click, який виступатиме як обробник натискання кнопки. Обробники натискання кнопки повинні приймати два типи параметрів objectі RoutedEventArgs. У самому обробнику викликається метод MessageBox.Show , який відображає вікно з повідомленням. Повідомлення, що відображається, передається як параметр.</p>         
                        <p className="content__paragraph">Тепер визначимо саму кнопку. Для цього перейдемо до файлу MainWindow.xaml , який містить розмітку візуального інтерфейсу у вигляді коду XAML. За замовчуванням він має такий вміст:</p>   
                        <img src={seven} alt="#" className="img"/>
                        <p className="content__paragraph">XAML загалом нагадує мову розмітки HTML: тут у нас спочатку визначено елемент верхнього рівня Window– вікно програми, у ньому визначено елемент Grid– контейнер верхнього рівня, до якого ми можемо додавати інші елементи. Кожен елемент може мати певні атрибути. Більш детально з мовою XAML та елементами ми познайомимося пізніше, а поки що змінимо цю розмітку на наступну:</p>      
                        <img src={eight} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Для визначення кнопки всередині елемента Grid визначено елемент Button . Для цього елемента за допомогою атрибутів можна встановити різні характеристики. Так, у цьому випадку встановлюються такі атрибути:</p>
                        <p className="content__paragraph">-Content : вміст кнопки</p>    
                        <p className="content__paragraph">-FontSize : висота шрифту</p>
                        <p className="content__paragraph">-Width : ширина кнопки</p>
                        <p className="content__paragraph">-Height : висота кнопки</p>
                        <p className="content__paragraph">-Click : обробник натискання кнопки. Тут підключається створений вище у файлі коду C# метод Button_Click. У результаті після натискання на цю кнопку спрацює метод Button_Click</p>               
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Запустимо програму та натиснемо на кнопку, і нам має відобразитися повідомлення:</p>
                        <img src={nine} alt="#" className="img"/>           
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

export default Lesson12