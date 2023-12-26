import "./Lesson.scss";
import first from "./Lesson22_img/first.png"
import second from "./Lesson22_img/second.png"
import three from "./Lesson22_img/three.png"
import four from "./Lesson22_img/four.png"
import five from "./Lesson22_img/five.png"
import six from "./Lesson22_img/six.png"
import seven from "./Lesson22_img/seven.png"


export const Lesson22= () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Файли відділеного коду</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">При створенні нового проекту WPF на додаток до створюваного файлу MainWindow.xaml створюється також файл відокремленого коду MainWindow.xaml.cs , де, як передбачається, має бути логіка програми пов'язана з розміткою MainWindow.xaml. Файли XAML дозволяють нам визначити інтерфейс вікна, але для створення логіки програми, наприклад, для визначення обробників подій елементів керування нам все одно доведеться скористатися кодом C#.</p>
                        <p className="content__paragraph">За промовчанням у розмітці вікна використовується атрибут x:Class :</p> 
                        <p className="content__paragraph">
                            {'<Window x:Class="XamlApp.MainWindow"'}
                            <br />
                            {'.......'}
                        </p>
                        <p className="content__paragraph">Атрибут x:Class вказує на клас, який представлятиме дане вікно і який компілюватиметься код в XAML при компіляції. Тобто під час компіляції генеруватиметься клас XamlApp.MainWindow , успадкований від класу System.Windows.Window.</p>                         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Крім того у файлі відокремленого коду MainWindow.xaml.cs , який Visual Studio створює автоматично, ми також можемо знайти клас з тим самим ім'ям - у даному випадку клас XamlApp.MainWindow. За замовчуванням він має певний код:</p>           
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Насправді порожній клас, але цей клас вже виконує деяку роботу. Під час компіляції цей клас поєднується з класом, згенерованим з коду XAML. Щоб таке злиття класів під час компіляції відбулося, клас XamlApp.MainWindow визначається як частковий модифікатор partial . А через метод InitializeComponent()клас MainWindow викликає скомпільований раніше код XAML, розбирає його і по ньому будує вікно графічний інтерфейс.</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Взаємодія коду C# та XAML</h3>
                    <div className="content__block">
                        <p className="content__paragraph">У програмі часто потрібно звернутися до якогось елемента керування. Для цього треба встановити елемент у XAML властивість Name.</p> 
                        <p className="content__paragraph">Ще однією точкою взаємодії між xaml та C# є події. За допомогою атрибутів XAML ми можемо задати події, які будуть пов'язані з оброблювачами в коді C#.</p>   
                        <p className="content__paragraph">Отже, створимо новий проект WPF, який назвемо XamlApp. У розмітці головного вікна визначимо два елементи: кнопку та текстове поле.</p>             
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">І змінимо файл відокремленого коду, додавши до нього обробник натискання кнопки:</p> 
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Визначивши імена елементів у XAML, ми можемо до них звертатися в коді c#: string text = textBox1.Text.</p>  
                        <p className="content__paragraph">При визначенні імен у XAML треба враховувати, що обидва простори імен "http://schemas.microsoft.com/winfx/2006/xaml/presentation" та "http://schemas.microsoft.com/winfx/2006/xaml" визначають атрибут Name , який встановлює ім'я елемента. У другому випадку атрибут використовується з префіксом x :. x:NameЯкий саме простір імен використовувати в даному випадку, не так важливо, а такі визначення імені x:Name="button1"та Name="button1"фактично будуть рівноцінні.</p>  
                        <p className="content__paragraph">У обробнику натискання кнопки просто виводиться повідомлення, введене у текстове поле. Після визначення обробника ми можемо пов'язати з подією натискання кнопки в xaml через атрибут Click: Click="Button_Click". В результаті після натискання на кнопку ми побачимо у вікні введене текстове поле повідомлення.</p>  
                        <img src={four} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Створення елементів у коді C#</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ще одну форму взаємодії C# та XAML представляє створення візуальних елементів у коді C#. Наприклад, змінимо код xaml наступним чином:</p>           
                        <img src={five} alt="#" className="img"/>
                        <p className="content__paragraph">Тут для елемента Grid встановлено властивість x:Name, якою ми можемо щодо нього звертатися у коді. Також змінимо код C#:</p>  
                        <img src={six} alt="#" className="img"/>
                        <p className="content__paragraph">У конструкторі сторінки створюється елемент Button і додається до Grid. І якщо ми запустимо програму, то побачимо додану кнопку:</p>  
                        <img src={seven} alt="#" className="img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson22