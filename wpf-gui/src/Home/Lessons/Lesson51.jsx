import "./Lesson.scss";
import first from "./Lesson51_img/first.png"

export const Lesson51 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Відмінністьоб'єкта та властивості залежностей</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Вступ до Dependency Property</h3>
                    <div className="content__block">
                        <p className="content__paragraph">У попередньому розділі було розглянуто базові елементи WPF та його основні властивості. Однак розглянуті властивості елементів, як, наприклад, Width або Height, є не просто стандартними властивостями мови C#. Вони фактично приховують властивості залежностей або dependency property . Без властивостей залежностей були б неможливі багато ключових рис WPF, як прив'язка даних, стилі, анімація і т.д.</p>
                        <p className="content__paragraph">Розглянемо як вони визначаються. Візьмемо, наприклад, елемент TextBlock, який має властивість Text :</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Статична властивість TextPropertyє властивістю залежностей, представляючи об'єкт System.Windows.DependencyProperty . За угодами по іменуванню всі властивості залежностей представляють статичні громадські поля (public static) з суфіксом Property .</p> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Потім у статичному конструкторі класу відбувається реєстрація властивості за допомогою методу DependencyProperty.Register() , який передається ряд параметрів:</p>    
                        <p className="content__paragraph">- ім'я якості (у разі "Text"). Як правило, відповідає назві властивості залежностей без суфіксу Property</p>
                        <p className="content__paragraph">- тип властивості (у разі string)</p>
                        <p className="content__paragraph">- тип, який має властивість - власне той тип, у якому властивість визначено або в даному випадку тип TextBlock</p>
                        <p className="content__paragraph">- Необов'язковий параметр FrameworkPropertyMetadata встановлює додаткові параметри властивості</p>
                        <p className="content__paragraph">- Як п'ятий необов'язковий параметр може використовуватися посилання на метод, який виробляє валідацію властивості. У цьому випадку цей параметр опущено.</p>       
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">- Перші три обов'язкові властивості досить прості, тому докладніше зупинимося на четвертому необов'язковому параметрі, що представляє об'єкт FrameworkPropertyMetadata . Цей об'єкт містить низку властивостей для конфігурації якості залежностей:</p>  
                        <p className="content__paragraph">- AffectsArrange : якщо має значення true, то властивість залежностей впливатиме на процес компонування елемента</p>
                        <p className="content__paragraph">- AffectsMeasure : якщо має значення true, то властивість залежностей буде враховуватися при встановленні розмірів елемента при компонуванні</p>
                        <p className="content__paragraph">- AffectsParentArrange : якщо має значення true, то властивість залежностей впливатиме на процес компонування у батьківському елементі</p>
                        <p className="content__paragraph">- AffectsParentMeasure : якщо має значення true, то властивість залежностей буде враховуватися при встановленні розмірів батьківського елемента при його компонуванні</p>
                        <p className="content__paragraph">- AffectsRender : якщо має значення true, то властивість залежностей впливатиме на рендеринг та візуалізацію елемента</p>
                        <p className="content__paragraph">- BindsTwoWayByDefault : якщо має значення true, то властивість залежностей буде використовувати двосторонню прив'язку даних</p>
                        <p className="content__paragraph">- CoerceValueCallback : зберігає посилання на метод, який застосовується для перевірки допустимості значення до його валідації. Якщо значення не допустиме, воно може коригуватися, щоб відповідати допустимим діапазонам.</p>
                        <p className="content__paragraph">- DefaultValue : встановлює значення за промовчанням для властивості залежностей</p>
                        <p className="content__paragraph">- Inherits : якщо має значення true, то вкладені елементи стосовно себе можуть змінювати значення якості залежностей. Наприклад, якщо контейнер Windows задає властивість FontSize, то TextBlock автоматично підхоплює його значення, якщо в ньому самому ця властивість не встановлено</p>
                        <p className="content__paragraph">- IsAnimationProhibited : якщо має значення true, то властивість залежностей не застосовується при анімації</p>
                        <p className="content__paragraph">- IsNotDataBindable : якщо має значення true, то властивість залежностей не підтримуватиме прив'язку даних  </p>
                        <p className="content__paragraph">- Journal : якщо має значення true, то значення якості залежностей буде журналюватися (зберігатися)</p>
                        <p className="content__paragraph">- PropertyChangedCallback : зберігає посилання на метод, який викликається за зміни значення властивості</p>
                        <p className="content__paragraph">- SubPropertiesDoNotAffectRender : якщо має значення true, то елемент не перемальовуватиметься, якщо якщо якась підвластивість властивості залежностей змінить своє значення</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">У цьому випадку застосовується один із конструкторів:</p>    
                        <p className="content__paragraph">
                            {'new FrameworkPropertyMetadata(string.Empty, '}
                            <br />
                            {'    FrameworkPropertyMetadataOptions.AffectsMeasure | FrameworkPropertyMetadataOptions.AffectsRender, '}
                            <br />
                            {'    new PropertyChangedCallback(OnTextChanged), new CoerceValueCallback(CoerceText))'}
                        </p>  
                        <p className="content__paragraph">Цей конструктор встановлює як значення за замовчуванням порожній рядок, вказує, що при зміні значення елемент перемальовуватиметься (власне, що ми і бачимо - при зміні значення властивості Text нове значення відображається), і при зміні значення властивості викликатимуться методи OnTextChanged і CoerceText.</p>  
                        <p className="content__paragraph">Далі після реєстрації властивості йде обгортка - звичайна властивість . Ці методи визначені в класі System.Windows.DependencyObject , який є базовим всім елементів WPF, зокрема і для TextBlock.</p> 
                        <p className="content__paragraph">Остання обставина привносить обмеження - властивості залежностей можуть бути визначені тільки в класах, які успадкуються від DependencyObject.</p>     
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Крім того, DependencyObject підтримує ще ряд властивостей для управління властивостями залежностей:</p>     
                        <p className="content__paragraph">- ClearValue : очищає значення об'єкта DependencyProperty</p> 
                        <p className="content__paragraph">- InvalidateProperty : повторно обчислює чинне значення об'єкта DependencyProperty</p>       
                        <p className="content__paragraph">- ReadLocalValue : зчитує значення об'єкта DependencyProperty</p> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Наприклад:</p>    
                        <p className="content__paragraph">
                            {`TextBlock textBlock = new TextBlock();`}
                            <br />
                            {`textBlock.Text = "Привіт";`}
                            <br />
                            {`string text = (string)textBlock.ReadLocalValue(TextBlock.TextProperty); // Привіт`}
                            <br />
                            {`textBlock.ClearValue(TextBlock.TextProperty); // тепер значення відсутнє`}
                        </p>       
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Провайдери властивостей</h3>
                    <div className="content__block">
                        <p className="content__paragraph">У WPF визначення значення властивостей є багатоетапним процесом. На різних стадіях цього процесу застосовують різні провайдери властивостей, які допомагають отримати значення для властивості залежностей.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">При отриманні значення властивості система використовує 10 провайдерів:</p>  
                        <p className="content__paragraph">1. Отримання локального значення властивості (тобто те, яке встановлено розробником через XAML чи код C#)</p> 
                        <p className="content__paragraph">2. Обчислення значення за допомогою тригерів із шаблону батьківського елемента</p> 
                        <p className="content__paragraph">3. Обчислення значення із шаблону батьківського елемента</p> 
                        <p className="content__paragraph">4. Обчислення значення за допомогою тригерів із стилів, що застосовуються</p> 
                        <p className="content__paragraph">5. Обчислення значення за допомогою тригерів із шаблону, що застосовується</p> 
                        <p className="content__paragraph">6. Отримання значення з сеттерів стилів, що застосовуються</p> 
                        <p className="content__paragraph">7. Обчислення значення за допомогою тригерів із застосовуваних тем</p> 
                        <p className="content__paragraph">8. Отримання значення з сетерів застосовуваних тем</p> 
                        <p className="content__paragraph">9. Отримання успадкованого значення (якщо властивість FrameworkPropertyMetadata.Inheritsмає значення true)</p> 
                        <p className="content__paragraph">10. Вилучення значення за замовчуванням, яке встановлюється через об'єкт FrameworkPropertyMetadata</p>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Всі ці етапи виконуються послідовно згори донизу. Якщо одному етапі було отримано значення, то етапи нижче не виконуються. Далі ми розглянемо докладніше тригери, стилі, теми, шаблони, але в даному випадку досить розуміти, що отримання значення властивості - представляє складний багатоетапний процес. І навіть якщо в XAML для елемента не встановлено значення будь-якої властивості, то все одно воно може мати значення, отримане на одному з перерахованих вище кроків.</p>  
                        <p className="content__paragraph">Усі десять перерахованих етапів зазвичай поєднуються в одну стадію - отримання базового значення .</p>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Але окрім отримання значення є ще процес встановлення значення. Він залучає низку додаткових кроків:</p>           
                        <p className="content__paragraph">1. Вищеописані 10 кроків – отримання базового значення</p> 
                        <p className="content__paragraph">2. Якщо значення властивості, отримане на кроці 1, є складним виразом (наприклад, вираз прив'язки даних), то WPF обчислює значення цього виразу і отримує конкретний результат</p> 
                        <p className="content__paragraph">3. Якщо для властивості застосовується анімація, далі вона використовується для отримання нового значення</p> 
                        <p className="content__paragraph">4. Після отримання значення WPF застосовує делегат CoerceValueCallback , який задається в об'єкті FrameworkPropertyMetadata під час реєстрації властивості. За допомогою методу, на який вказує даний делегат, перевіряється, чи входить значення діапазон допустимих значень. Якщо не входить, то в залежності від логіки задається нове значення</p> 
                        <p className="content__paragraph">5. Наприкінці застосовується делегат ValidateValueCallback (якщо він вказаний при реєстрації якості п'ятого параметра), який виконує валідацію. Метод, на який посилається делегат, повертає trueпід час проходження валідації. Інакше повертається falseта генерується виняток</p> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson51