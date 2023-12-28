import "./Lesson.scss";
import first from "./Lesson53_img/first.png"
import second from "./Lesson53_img/second.png"
import three from "./Lesson53_img/three.png"
import four from "./Lesson53_img/four.png"
import five from "./Lesson53_img/five.png"

export const Lesson53 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Створення властивостей залежностей</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">На попередніх темах ми розглянули теоретичні основи властивостей залежностей, тепер подивимося, як ми можемо визначати якісь свої властивості залежностей. Отже, визначимо у нашому проекті новий клас Phone:</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Якщо хочемо застосовувати властивості залежностей, нам треба успадкувати свій клас від абстрактного класу DependencyObject. У класі ми визначаємо дві властивості залежностей: TitlePropertyі PriceProperty. Зверніть увагу, що вони оголошуються з модифікаторами public static readonly.</p> 
                        <p className="content__paragraph">Потім властивості реєструються у статичному конструкторі нашого класу за допомогою методу Register . І в кінці для них створюються звичайні властивості-обертки, в яких ми отримуємо доступ до значення властивостей за допомогою методів GetValue та SetValue.</p> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Тепер використаємо наш клас. Для цього визначимо наступну розмітку XAML:</p>           
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Тут у ресурсах вікна визначається об'єкт Phone із встановленням його властивостей Price та Name:</p> 
                        <p className="content__paragraph">
                            {'<local:Phone Price="600" Title="iPhone 6S" x:Key="iPhone6s" />'}
                        </p>
                        <p className="content__paragraph">Цей ресурс має ключ iPhone6s, яким ми можемо до нього звернутися. Далі для контейнера Grid ми ставимо цей ресурс як контекст даних:</p> 
                        <p className="content__paragraph">
                            {'<Grid x:Name="grid1" DataContext="{StaticResource iPhone6s}">'}
                        </p>
                        <p className="content__paragraph">Встановлення контексту даних дозволяє всередині гриду прив'язати окремі елемети до властивості ресурсу, тобто об'єкта Phone:</p> 
                        <p className="content__paragraph">
                            {'<TextBox Text="{Binding Price, Mode=TwoWay}" Grid.Column="1" Grid.Row="1" />'}
                        </p>
                        <p className="content__paragraph">Те саме й у елемента TextBlock. Однак для TextBox у нас діє не просто прив'язка, а двостороння прив'язка, позначена параметром Mode=TwoWay. А це означає, що будь-які зміни якості Price в ресурсі будуть відображатися в текстовому полі. І навпаки – будь-які зміни в текстовому полі змінюватимуть значення в ресурсі.</p> 
                        <p className="content__paragraph">У цьому полягає одна з переваг використання властивостей залежностей - для звичайних властивостей подібні прив'язки не працювали б.</p>  
                        <p className="content__paragraph">Для перевірки значення ресурсу я додав кнопку, у якої встановив обробник натискання – Button_Click. І також додамо код цього оброблювача у файл коду C#:</p>
                        <p className="content__paragraph">
                            {`
                            private void Button_Click(object sender, RoutedEventArgs e)
                            {
                                Phone phone = (Phone)this.Resources["iPhone6s"]; // отримуємо ресурс за ключем
                                MessageBox.Show(phone.Price.ToString());
                            }
                            `}
                        </p>
                        <p className="content__paragraph">Запустимо програму, змінимо значення в текстовому полі, наприклад, на 800 і натиснемо на кнопку:</p> 
                        <img src={three} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Додавання валідації</h3>
                    <div className="content__block">
                        <p className="content__paragraph">WPF надає два способи валідації значення властивості:</p>   
                        <p className="content__paragraph">- ValidateValueCallback : делегат, який повертає true, якщо значення проходить валідацію, та false - якщо не проходить</p> 
                        <p className="content__paragraph">- CoerceValueCallback : делегат, який може підкоригувати вже існуюче значення властивості, якщо воно раптом не потрапляє в діапазон допустимих значень</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">При встановленні значення спочатку спрацьовує делегат ValidateValueCallback, який повертає true, якщо значення проходить валідацію. Далі спрацьовує делегат CoerceValueCallback, який може модифікувати це значення, якщо воно є некоректним. У випадку, якщо ці два делегати успішно відпрацювали, то спрацьовує делегат PropertyChangedCallback, який сповіщає систему про зміну значення властивості.</p> 
                        <p className="content__paragraph">При цьому нам необов'язково використовувати відразу обидва ці делеати, можна застосовувати лише один із них, а можна їх комбінувати разом.</p>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Спочатку застосуємо делегат ValidateValueCallback. Для цього змінимо код класу Phone на наступний:</p>           
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">Делегат ValidateValueCallbackвказує на метод ValidateValue, який як параметр приймає нове значення властивості. Якщо вона дорівнює нулю чи вище, оскільки негативні ціни немає сенсу, то значення проходить валідацію, і метод повертає true.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">При подібних перевірках слід враховувати, що в процесі запуску програми значення ресурсу Phone встановлюються двічі. Перший раз властивість Price отримує значення за замовчуванням для типів int, тобто число 0. І потім на наступному етапі ініціалізації воно отримує число 600, яке і встановлено в ресурсі Phone. Тому якщо ми, наприклад, змінимо логіку валідації:</p>           
                        <p className="content__paragraph">
                            {`
                            if (currentValue > 0)
                                return true;
                            `}
                        </p>
                        <p className="content__paragraph">То ми отримаємо помилку. Адже число 0 тепер не є допустимим, але на початковій ініціалізації об'єкта Phone саме 0 встановлюється як значення для властивості Price. Тому такі моменти треба враховувати.</p> 
                        <p className="content__paragraph">Тепер, якщо ми запустимо програму і спробуємо встановити число менше 0, воно не пройде валідацію, і ресурс Phone збереже старе значення для властивості Price.</p> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Тепер застосуємо делегат CoerceValueCallback:</p>    
                        <img src={five} alt="#" className="img"/>       
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">В даному випадку ми коригуватимемо значення властивості Price, оскільки воно змінюється через текстове поле. Для цього делегат CoerceValueCallback викликатиме метод CorrectValue. Даний метод повинен приймати два параметри: DependencyObject - об'єкт, що валідується (в даному випадку об'єкт Phone) і object - нове значення для властивості Price (або для іншої встановлюваної властивості).</p>  
                        <p className="content__paragraph">У самому методі CorrectValue()ми отримуємо нове значення та модифікуємо його, якщо воно некоректне.</p> 
                        <p className="content__paragraph">Єдине, що треба враховувати під час роботи з делегатом CoerceValueCallback, те, що він викликається лише тоді, коли виклик делегата ValidateValueCallback повертає значення true.</p>          
                        <p className="content__paragraph">Більше нам нічого міняти не треба, розмітка xaml залишається незмінною. І якщо ми запустимо програму та введемо в текстове поле некоректне значення, то спрацює цей делегат, який підкоригує значення.</p> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson53