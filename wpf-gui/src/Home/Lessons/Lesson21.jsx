import "./Lesson.scss";
import first from "./Lesson21_img/first.png"
import second from "./Lesson21_img/second.png"
import three from "./Lesson21_img/three.png"


export const Lesson21= () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">XAML</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Введення в мову XAML</h3>
                    <div className="content__block">
                        <p className="content__paragraph">XAML (eXtensible Application Markup Language) - мова розмітки, що використовується для ініціалізації об'єктів у технологіях на платформі .NET. Стосовно WPF (а також Silverlight) ця мова використовується перш за все для створення інтерфейсу користувача декларативним шляхом. Хоча функціональність XAML тільки графічними інтерфейсами не обмежується: ця мова також використовується в технологіях WCF і WF, де вона ніяк не пов'язана з графічним інтерфейсом. Тобто його область ширша. Стосовно WPF ми говоритимемо про нього найчастіше як мову розмітки, що дозволяє створювати декларативним шляхом інтерфейс, на кшталт HTML у веб-программировании. Однак знову ж таки повторюся, зводити XAML до одного інтерфейсу було б неправильно, і далі на прикладах ми це побачимо.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">XAML - не є обов'язковою частиною програми, ми можемо обходитися без нього, створюючи всі елементи у файлі пов'язаного з ним коду мовою C #. Однак використання XAML все-таки несе деякі переваги:</p>
                        <p className="content__paragraph">- Можливість відокремити графічний інтерфейс від логіки програми, завдяки чому над різними частинами програми можуть відносно автономно працювати різні фахівці: над інтерфейсом – дизайнери, над кодом логіки – програмісти.</p>
                        <p className="content__paragraph">- Компактність, зрозумілість, код XAML відносно легко підтримувати.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">При компіляції програми Visual Studio код у xaml-файлах також компілюється в бінарне представлення коду xaml, яке називається BAML (Binary Application Markup Language). І потім код baml вбудовується у фінальну збірку програми – exe або dll-файл.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Структура та простір імен XAML</h3>
                    <div className="content__block">
                        <p className="content__paragraph">При створенні нового проекту WPF він містить файли з кодом xaml. Так, створюваний за замовчуванням у проекті файл MainWindow.xaml матиме таку розмітку:</p>           
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Якщо ви зовсім не знайомі з xaml і xml, то навіть цей невеликий мінімальний код вікна може викликати труднощі.</p> 
                        <p className="content__paragraph">Подібно до структури веб-сторінки на html, тут є деяка ієрархія елементів. Елементів верхнього рівня є Window, Що являє собою вікно програми. При створенні інших вікон у додатку нам доведеться завжди розпочинати оголошення інтерфейсу з елемента Window, оскільки це елемент найвищого рівня.</p> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Крім Window існує ще два елементи верхнього рівня:</p>
                        <p className="content__paragraph">- Page</p>
                        <p className="content__paragraph">- Application</p>
                        <p className="content__paragraph">Елемент Window має вкладений порожній елемент Grid, а також подібно до html-елементів ряд атрибутів (Title, Width, Height) - вони задають заголовок, ширину і висоту вікна відповідно.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Простір імен XAML</h3>
                    <div className="content__block">
                        <p className="content__paragraph">При створенні коду мовою C#, щоб нам були доступні певні класи, ми підключаємо простір імен за допомогою директиви using, наприклад using System.Windows;.</p>
                        <p className="content__paragraph">Щоб залучити елементи до XAML, ми також підключаємо простір імен. Друга і третя рядки якраз і є простором імен, що підключаються до проекту за замовчуванням. А атрибут xmlns представляє спеціальний атрибут визначення простору імен в XML.</p>
                        <p className="content__paragraph">Так, простір імен http://schemas.microsoft.com/winfx/2006/xaml/presentation містить опис та визначення більшості елементів керування. Так як є простір імен за замовчуванням, то оголошується без жодних префіксів.</p>
                        <p className="content__paragraph">http://schemas.microsoft.com/winfx/2006/xaml - це простір імен, який визначає деякі властивості XAML, наприклад, властивість Name або Key. Префікс x, що використовується, у визначенні xmlns:xозначає, що ті властивості елементів, які укладені в цьому просторі імен, будуть використовуватися з префіксом x - x:Nameабо x:Key. Це ж простір імен використовується вже в першому рядку x:Class="XamlApp.MainWindow" - тут створюється новий клас MainWindow і відповідний файл коду, куди буде прописуватися логіка для даного вікна програми.</p>      
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Це два основні простори імен. Розглянемо інші:</p>
                        <p className="content__paragraph">- xmlns:d="http://schemas.microsoft.com/expression/blend/2008" : надає підтримку атрибутів у режимі дизайнера. Цей простір імен переважно призначений для іншого інструменту створення дизайну на XAML - Microsoft Expression Blend</p> 
                        <p className="content__paragraph">- xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" : забезпечує режим сумісності розміток XAML. У визначенні об'єкта Window двома рядками нижче можна знайти його застосування:</p> 
                        <p className="content__paragraph">mc:Ignorable="d"</p> 
                        <p className="content__paragraph">Цей вираз дозволяє ігнорувати парсерам XAML під час виконання програми дизайнерські атрибути з простору імен із префіксом d , тобто з "http://schemas.microsoft.com/expression/blend/2008"</p> 
                        <p className="content__paragraph">xmlns:local="clr-namespace:XamlApp" : простір імен поточного проекту. Так як у моєму випадку проект називається XamlApp, то простір імен називається аналогічно. І через префікс local я зможу отримати XAML різні об'єкти, які я визначив у проекті.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Важливо розуміти, що це простору імен не еквівалентні тим просторам імен, які підключаються з допомогою директиви usingв c#. Так, наприклад, http://schemas.microsoft.com/winfx/2006/xaml/presentation підключає до проекту такі простори імен:</p> 
                        <p className="content__paragraph">System.Windows</p>
                            <p className="content__paragraph">System.Windows.Automation</p>
                            <p className="content__paragraph">System.Windows.Controls</p>
                            <p className="content__paragraph">System.Windows.Controls.Primitives</p>
                            <p className="content__paragraph">System.Windows.Data</p>
                            <p className="content__paragraph">System.Windows.Documents</p>
                            <p className="content__paragraph">System.Windows.Forms.Integration</p>
                            <p className="content__paragraph">System.Windows.Ink</p>
                            <p className="content__paragraph">System.Windows.Input</p>
                            <p className="content__paragraph">System.Windows.Media</p>
                            <p className="content__paragraph">System.Windows.Media.Animation</p>
                            <p className="content__paragraph">System.Windows.Media.Effects</p>
                            <p className="content__paragraph">System.Windows.Media.Imaging</p>
                            <p className="content__paragraph">System.Windows.Media.Media3D</p>
                            <p className="content__paragraph">System.Windows.Media.TextFormatting</p>
                            <p className="content__paragraph">System.Windows.Navigation</p>
                            <p className="content__paragraph">System.Windows.Shapes</p>
                            <p className="content__paragraph">System.Windows.Shell</p>          
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Елементи та їх атрибути</h3>
                    <div className="content__block">
                        <p className="content__paragraph">XAML пропонує дуже просту та ясну схему визначення різних елементів та їх властивостей. Кожен елемент, як і будь-який елемент XML, повинен мати відкритий та закритий тег, як у випадку з елементом Window:</p>
                        <p className="content__paragraph">{"<Window></Window>"}</p> 
                        <p className="content__paragraph">Або елемент може мати скорочення форми з закриваючим слешем в кінці, на кшталт:</p>  
                        <p className="content__paragraph">{"<Window/>"}</p> 
                        <p className="content__paragraph">Але на відміну від елементів xml, кожен елемент у XAML відповідає певному класу C#. Наприклад, елемент Button відповідає класу System.Windows.Controls.Button. А характеристики цього класу відповідають атрибутам елемента Button.</p>              
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Наприклад, додамо кнопку в розмітку вікна, що створюється за умовчанням:</p>   
                        <img src={second} alt="#" className="img"/>  
                        <p className="content__paragraph">Спочатку йде елемент найвищого рівня – Window, потім йде вкладений елемент Grid – контейнер для інших елементів, і в ньому вже визначено елемент Button, що представляє кнопку.</p> 
                        <p className="content__paragraph">Для кнопки ми можемо визначити властивості як атрибутів. Тут визначено атрибути x:Name(ім'я кнопки), Width, Heightі Content. Причому атрибут x:Nameбереться в даному випадку з простору імен "http://schemas.microsoft.com/winfx/2006/xaml", який зіставляється з префіксом x . А решта атрибутів не використовують префікси, тому беруться з основного простору імен "http://schemas.microsoft.com/winfx/2006/xaml/presentation".</p> 
                        <p className="content__paragraph">Подібним чином ми можемо визначити інші атрибути, які нам потрібні. Або ми можемо не визначати атрибути, і тоді вони будуть використовувати значення за замовчуванням.</p> 
                        <p className="content__paragraph">Визначивши розмітку xaml, ми можемо запустити проект і нам відобразиться графічно весь код xaml - тобто наша кнопка:</p>       
                        <img src={three} alt="#" className="img"/>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Спеціальні символи</h3>
                    <div className="content__block">
                        <p className="content__paragraph">При визначенні інтерфейсу XAML ми можемо зіткнутися з деякими обмеженнями. Часто ми не можемо використовувати спеціальні символи, такі як знак амперсанда &amp;, лапки &quot; і кутові дужки &lt; і &gt;. Наприклад, ми хочемо, щоб текст кнопки був наступним: &lt;&quot;Hello&quot;&gt;. У кнопки є властивість Content, яка задає вміст кнопки. І можна припустити, що нам треба написати так:</p>           
                        <p className="content__paragraph">{"<Button Content=\"<\"Hello\">\" />"}</p>
                        <p className="content__paragraph">Ще одна проблема, з якою ми можемо зіткнутися в XAML – додавання пробілів. Візьмемо, наприклад, таке визначення кнопки:</p> 
                        <p className="content__paragraph">
                            {'<Button Content="&lt;&quot;Hello&quot;&gt;" />'}
                        </p>
                        <p className="content__paragraph">
                            {'<Button xml:space="preserve">'}
                            <br />
                            &nbsp;&nbsp;Hello         World
                            <br />
                            {'</Button>'}
                        </p>
                        <p className="content__paragraph">Тут властивість Content задається неявно як вміст між тегами {"<Button>....</Button>"}. Але незважаючи на те, що у нас кілька прогалин між словами "Hello" та "World", XAML за замовчуванням буде прибирати всі ці прогалини. І щоб зберегти прогалини, нам треба використовувати атрибут xml:space="preserve":</p>  
                        <p className="content__paragraph">
                            {'<Button xml:space="preserve">'}
                            <br />
                            &nbsp;&nbsp;Hello         World
                            <br />
                            {'</Button>'}
                        </p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson21