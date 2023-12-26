import "./Lesson.scss";
import first from "./Lesson41_img/first.png"
import second from "./Lesson41_img/second.png"
import three from "./Lesson41_img/three.png"
import four from "./Lesson41_img/four.png"
import five from "./Lesson41_img/five.png"
import six from "./Lesson41_img/six.png"
import seven from "./Lesson41_img/seven.png"
import eight from "./Lesson41_img/eight.png"
import nine from "./Lesson41_img/nine.png"
import ten from "./Lesson41_img/ten.png"

export const Lesson41 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Елементи керування</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Огляд елементів керування та їх властивостей</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Щоб якось взаємодіяти з користувачем, отримувати від користувача введення з клавіатури або миші та використовувати введені дані у програмі, нам потрібні елементи керування. WPF пропонує нам багатий стандартний набір елементів керування</p>
                        <p className="content__paragraph">Всі елементи управління можуть бути умовно поділені на кілька підгруп:</p>
                        <p className="content__paragraph">- Елементи керування вмістом , наприклад кнопки (Button), мітки (Label)</p>
                        <p className="content__paragraph">- Спеціальні контейнери , які містять інші елементи, але на відміну від елементів Grid або Canvas не є контейнерами компонування - ScrollViewer, GroupBox</p>
                        <p className="content__paragraph">- Декоратори , чиє призначення створює певний фон навколо вкладених елементів, наприклад, Border або Viewbox.</p>
                        <p className="content__paragraph">- Елементи керування списками , наприклад, ListBox, ComboBox.</p>
                        <p className="content__paragraph">- Текстові елементи керування , наприклад, TextBox, RichTextBox.</p>
                        <p className="content__paragraph">- Елементи, що базуються на діапазонах значень , наприклад, ProgressBar, Slider.</p>
                        <p className="content__paragraph">- Елементи для робіт з датами , наприклад, DatePicker та Calendar.</p>
                        <p className="content__paragraph">- Інші елементи управління , які не увійшли до попередніх підгруп, наприклад, Image.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Усі елементи управління успадковуються від загального класу System.Window.Controls.Control і мають низку загальних властивостей. А загальну ієрархію елементів управління можна так:</p>           
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Коротко розглянемо, що репрезентують усі ці типи в ієрархії.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">System.Threading.DispatcherObject</h3>
                    <div className="content__block">
                        <p className="content__paragraph">В основі WPF лежить модель STA (Single-Thread Affinity), згідно з якою за інтерфейс користувача відповідає один потік. І щоб інтерфейс користувача міг взаємодіяти з іншими потоками, WPF використовує концепцію диспетчера - спеціального об'єкта, що управляє обміном повідомленнями, через які взаємодіють потоки. Наслідування типів від класу DispatcherObject дозволяє отримати доступ до такого об'єкта-диспетчера та інших функцій з управління паралелізмом.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">System.Windows.DependencyObject</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Спадкування від цього класу дозволяє взаємодіяти з елементами у додатку через їхню спеціальну модель властивостей, які називаються властивостями залежностей (dependency properties). Ця модель спрощує застосування ряду особливостей WPF, наприклад прив'язки даних. Так, система властивостей залежностей відстежує залежності між значеннями властивостей, автоматично перевіряє їх і змінює зміну залежності.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">System.Windows.Media.Visual</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Клас Visual містить вказівки, які відповідають за малювання, візуалізацію об'єкта.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">System.Windows.UIElement</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Клас UIElement додає можливості компонування елемента, обробку подій та отримання введення.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">System.Windows.FrameworkElement</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Клас FrameworkElement додає підтримку прив'язки даних, анімації, стилій. Також додає ряд властивостей, пов'язаних з компонуванням (вирівнювання, відступи) та ряд інших.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">System.Windows.Controls.Control</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Клас Control є елементом управління, з яким взаємодіє користувач. Цей клас додає ряд додаткових властивостей для підтримки елементами шрифтів, кольорів фону, шрифту, а також додає підтримку шаблонів - спеціального механізму WPF, який дозволяє змінювати стандартне представлення елемента, кастомізувати його.</p> 
                        <p className="content__paragraph">І далі від класу Control успадковуються безпосередньо конкретні елементи управління або їх базові класи, які отримують весь функціонал, що додається до типів цієї ієрархії класів.</p> 
                        <p className="content__paragraph">Розглянемо деякі з основних властивостей, які успадковуються елементами керування.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Name</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ця властивість визначає ім'я елемента керування, через яке згодом можна буде звертатися до цього елемента, як у коді, так і xaml розмітці. Наприклад, у xaml-коді у нас визначена наступна кнопка:</p>           
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Тут у нас заданий атрибут Click з назвою методу обробника button1_Click, який буде визначений у файлі коду C# і буде викликатись натисканням кнопки. Тоді у зв'язаному файлі коду C# ми можемо звернутися до цієї кнопки:</p> 
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Оскільки властивість Name має значення button1, то це значення ми можемо звернутися до кнопки в коді.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">FieldModifier</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Властивість FieldModifierзадає модифікатор доступу до об'єкта:</p>
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">Як значення використовуються стандартні модифікатори доступу мови C#: private, protected, internal, protected internal та public. В даному випадку оголошення кнопок з модифікаторами буде рівноцінно наступному їх визначенню в коді:</p>
                        <img src={five} alt="#" className="img"/>
                        <p className="content__paragraph">Якщо елемент не визначений атрибут x:FieldModifier, то за умовчанням він дорівнює " protected internal " .</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Visibility</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ця властивість встановлює параметри видимості елемента і може набувати одного з трьох значень:</p> 
                        <p className="content__paragraph">- Visible - елемент видно і бере участь у компонуванні.</p>
                        <p className="content__paragraph">- Collapsed - елемент не видно і не бере участь у компонуванні.</p>
                        <p className="content__paragraph">- Hidden - елемент не видно, але при цьому бере участь у компонуванні.</p>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Відмінності між Collapsed та Hidden можна продемонструвати на прикладі:</p>  
                        <img src={six} alt="#" className="img"/>
                        <img src={seven} alt="#" className="img"/>         
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Властивості налаштування шрифтів</h3>
                    <div className="content__block">
                        <p className="content__paragraph">- FontFamily - визначає сімейство шрифту (наприклад, Arial, Verdana і т.д.)</p>
                        <p className="content__paragraph">- FontSize - визначає висоту шрифту</p>
                        <p className="content__paragraph">- FontStyle - визначає нахил шрифту, приймає одне з трьох значень - Normal , Italic , Oblique .</p>
                        <p className="content__paragraph">- FontWeight - визначає товщину шрифту та приймає ряд значень, як Black , Bold та ін.</p>
                        <p className="content__paragraph">- FontStretch - визначає, як розтягуватиме або стискатиме текст, наприклад, значення Condensed стискає текст, а Expanded - розтягує.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Наприклад:</p> 
                        <p className="content__paragraph">
                            {'<Button Content="Hello World!" FontFamily="Verdana" FontSize="13" FontStretch="Expanded" />'}
                        </p>          
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Cursor</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ця властивість дозволяє нам отримати або встановити курсор для елемента управління в одне з значень, наприклад, Hand , Arrow , Wait та ін.button1.Cursor=Cursors.Hand;</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">FlowDirection</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ця властивість задає напрямок тексту. Якщо вона дорівнює RightToLeft, то текст починається з правого краю, якщо - LeftToRight, то з лівого.</p>           
                        <img src={eight} alt="#" className="img"/>
                        <img src={nine} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Кольори фону та шрифту</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Властивості Background та Foreground задають відповідно колір фону та тексту елемента керування.</p> 
                        <p className="content__paragraph">Найпростіший спосіб завдання кольору у коді xaml: Background="#ffffff". В якості значення властивість Background (Foreground) може приймати запис у вигляді шістнадцяткового значення у форматі #rrggbb, де rrчервона складова, ggзелена складова, а bbсиня. Також можна встановити колір у форматі #aarrggbb.</p>
                        <p className="content__paragraph">Або можна використовувати назви кольорів безпосередньо:</p> 
                        <p className="content__paragraph">
                            {'<Button Width="60" Height="30" Background="LightGray" Foreground="DarkRed" Content="Цвет" />'}
                        </p>   
                        <p className="content__paragraph">Однак при компіляції буде створюватись об'єкт SolidColorBrush, який і задаватиме колір елемента. Тобто визначення кнопки вище фактично буде рівноцінним наступному:</p>       
                        <img src={ten} alt="#" className="img"/>
                        <p className="content__paragraph">SolidColorBrush є пензлем, що покриває елемент одним кольором. Пізніше ми докладніше поговоримо про квіти. А поки що треба знати, що ці записи еквівалентні, крім того, друга форма визначення кольору дозволяє задати інші пензлі - наприклад, градієнт.</p>  
                        <p className="content__paragraph">Це треба також враховувати при встановленні або отриманні кольору елемента в коді c#:</p>  
                        <p className="content__paragraph">button1.Background = new SolidColorBrush(Colors.Red); <br /> button1.Foreground = new SolidColorBrush(Color.FromRgb(0,255, 0));</p>  
                        <p className="content__paragraph">Клас Colorsпропонує ряд вбудованих констант кольорів, якими ми можемо скористатися. Якщо ж ми захочемо конкретизувати налаштування кольору з допомогою значень RGB, можна використовувати метод Color.FromRgb .</p>  
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson41