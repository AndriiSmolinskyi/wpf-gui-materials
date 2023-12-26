import "./Lesson.scss";
import first from "./Lesson49_img/first.png"
import second from "./Lesson49_img/second.png"
import three from "./Lesson49_img/three.png"
import five from "./Lesson49_img/five.png"
import six from "./Lesson49_img/six.png"
import seven from "./Lesson49_img/seven.png"
import eight from "./Lesson49_img/seven.png"
import nine from "./Lesson49_img/nine.png"
import ten from "./Lesson49_img/ten.png"
import eleven from "./Lesson49_img/eleven.png"
import twelve from "./Lesson49_img/twelve.png"
import thirteen from "./Lesson49_img/thirteen.png"
import fourteen from "./Lesson49_img/fourteen.png"
import fifteen from "./Lesson49_img/fifteen.png"
import sixteen from "./Lesson49_img/sixteen.png"
import seventeen from "./Lesson49_img/seventeen.png"
import eighteen from "./Lesson49_img/eighteen.png"

export const Lesson49 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Елементи керування списками</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph">Ці елементи представлені WPF досить широко. Всі вони є похідними від класу ItemsControl , який у свою чергу є спадкоємцем класу Control. Усі вони містять колекцію елементів. Елементи можуть бути додані безпосередньо до колекції, можлива також прив'язка деякого масиву даних до колекції.</p>
                        <p className="content__paragraph">Візьмемо найпростіший елемент-список - ListBox і визначимо у файлі MainWindow.xaml наступний інтерфейс:</p> 
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Всі елементи, розміщені у списковому елементі ListBox, представляють елементи списку.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Управління списком</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Колекція об'єктів усередині елемента-списку доступна як властивості Items . Для керування елементами цієї колекції ми можемо використовувати такі методи:</p> 
                        <p className="content__paragraph">- Add(object item) : додавання елемента</p> 
                        <p className="content__paragraph">- Clear() : повне очищення колекції</p> 
                        <p className="content__paragraph">- Insert(int index, object item) : вставка елемента за певним індексом у колекції</p> 
                        <p className="content__paragraph">- Remove(object item) : видалення елемента</p> 
                        <p className="content__paragraph">- RemoveAt(int index) : видалення елемента за індексом</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">А властивість Count дозволяє дізнатися, скільки елементів у колекції.</p> 
                        <p className="content__paragraph">Наприклад, залишимо попередній інтерфейс і у файлі пов'язаного коду MainWindow.xaml.cs додамо та видалимо програмно кілька елементів:</p>           
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">В даному випадку додаємо та видаляємо ряд елементів за допомогою різних методів і в результаті отримаємо наступний список:</p>
                        <img src={five} alt="#" className="img"/>
                        <p className="content__paragraph">При виклику методів, які використовують індекси, як вище методи RemoveAt(index)і Insert(index, object), слід враховувати, що індекси, що передаються, повинні бути дійсні. Природно ми можемо видалити, наприклад, другий об'єкт, якщо списку лише один об'єкт чи взагалі немає об'єктів. У цьому випадку ми можемо перевіряти довжину списку:</p> 
                        <img src={six} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Відображення складних даних</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Спискові елементи можуть відображати не лише прості рядки чи числа, та й складні дані. Наприклад, створимо в коді новий клас Person:</p>           
                        <img src={seven} alt="#" className="img"/>
                        <p className="content__paragraph">Тепер створимо в xaml набір об'єктів цього класу Person і виведемо їх у списку:</p>  
                        <img src={eight} alt="#" className="img"/>
                        <p className="content__paragraph">Оскільки ми використовуємо клас, визначений у поточному проекті, то відповідно у нас обов'язково має бути підключений простір імен до проекту. У моєму випадку проект (і простір імен) називається "MetanitApp". Відповідно, у мене цей простір імен проектується на префікс local :</p> 
                        <p className="content__paragraph">
                            {'xmlns:local="clr-namespace:MetanitApp"'}
                        </p>
                        <p className="content__paragraph">В принципі, за замовчуванням WPF вже його підключає. Після цього через префікс “local” можна звертатися до класу Person: “local:Person”.</p>
                        <p className="content__paragraph">Крім того, щоб не виникало проблем із розміткою XAML, бажано зробити перебудову проекту. І в результаті ListBox виведе всі об'єкти:</p> 
                        <img src={nine} alt="#" className="img"/>
                        <p className="content__paragraph">За замовчуванням, спискові елементи виводять те, що повертає метод ToString()об'єкта. Саме для цієї демонстрації і реалізовано цей метод у класі Person вище. Але також за допомогою властивості DisplayMemberPath можна встановити властивість об'єкта, значення якого відображатиметься у списку. Наприклад, відобразимо лише ім'я:</p> 
                        <img src={ten} alt="#" className="img"/>
                        <img src={eleven} alt="#" className="img"/>
                        <p className="content__paragraph">У цьому випадку в коді C# таким же чином можна додавати та видаляти дані:</p> 
                        <p className="content__paragraph">
                            {'var firstPerson = usersList.Items[0];   // отримуємо перший об\'єкт'}
                            <br />
                            {'usersList.Items.Remove(firstPerson);    // видаляємо його'}
                            <br />
                            {'usersList.Items.Add(new Person { Name = "Kate", Age = 23 }); // додаємо новий об\'єкт'}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">ItemsSource</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Нам необов'язково вручну заповнювати значення елемента керування списком, тому що ми можемо встановити властивість ItemsSource , задавши як параметр колекцію, з якої буде формуватися елемент керування списком. Наприклад, у коді xaml-розмітки визначимо порожній список:</p>           
                        <img src={twelve} alt="#" className="img"/>
                        <p className="content__paragraph">А у файлі відокремленого коду виконаємо наповнення списку:</p>
                        <img src={thirteen} alt="#" className="img"/>
                        <p className="content__paragraph">Але варто враховувати, що якщо ми наповнюємо елемент керування списком через властивість ItemsSource , то ми не зможемо використовувати вище розглянуті методи Add/Remove/RemoveAt/Insert/Clearдля додавання/видалення елементів списку. У цьому випадку для управління елементами безпосередньо до джерела даних. Наприклад, визначимо в коді xaml кнопку для додавання одного об'єкта:</p>  
                        <img src={fourteen} alt="#" className="img"/>
                        <p className="content__paragraph">Після натискання на кнопку викликатиметься метод Button_Click. І у файлі пов'язаного коду C# визначимо даний метод і наповнимо ListBox даними:</p> 
                        <img src={fifteen} alt="#" className="img"/>
                        <p className="content__paragraph">Тут як джерело даних виступає список людей, і з цього списку ListBox братиме дані.</p> 
                        <p className="content__paragraph">У обробнику натискання кнопки додаємо до списку людей один об'єкт Person для тесту. Зверніть увагу, що додаємо саме до стандартного списку List{"<Person>"}, а не в ListBox. ListBox у разі просто відображає дані. Але щоб ListBox оновив своє візуальне подання, після зміни списку людей оновлюємо дані в ListBox:</p>
                        <p className="content__paragraph">
                            {'usersList.Items.Refresh();'}
                        </p>
                        <img src={sixteen} alt="#" className="img"/>
                        <p className="content__paragraph">Варто зазначити, що якщо як джерело даних виступає ObservableCollection, то нам не потрібно викликає відновлення даних списку, оскільки колекція ObservableCollection сама сповіщає систему про зміни.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Вибір елементів</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Усі елементи керування списками підтримують виділення вхідних елементів. Виділений елемент(и) можна отримати за допомогою властивостей SelectedItem (SelectedItems), а отримати індекс виділеного елемента - за допомогою властивості SelectedIndex . Властивість SelectedValue дозволяє отримати значення виділеного елемента.</p>  
                        <p className="content__paragraph">При виділенні елемента у списку генерується подія SelectionChanged , яку ми можемо обробити. Наприклад, візьмемо попередній список:</p>          
                        <img src={seventeen} alt="#" className="img"/>
                        <p className="content__paragraph">А у файлі коду визначимо обробник для цієї події:</p> 
                        <img src={eighteen} alt="#" className="img"/>
                        <p className="content__paragraph">Важливо враховувати, що в розмітці xaml у списку визначені елементи Person, то коді ми можемо привести об'єкт usersList.SelectedItemдо типу Person.</p> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson49