import "./Lesson.scss";
import first from "./Lesson61_img/first.png"
import second from "./Lesson61_img/second.png"
import three from "./Lesson61_img/three.png"
import four from "./Lesson61_img/four.png"
import five from "./Lesson61_img/five.png"
import six from "./Lesson61_img/six.png"

export const Lesson61 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Модель подій</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Маршрутизація подій</h3>
                    <div className="content__block">
                        <p className="content__paragraph">У попередньому розділі розглядалися різні елементи управління. Але щоб із ними взаємодіяти, нам треба використати модель подій. WPF на відміну інших технологій, наприклад, від Windows Forms, пропонує нову концепцію подій - маршрутизовані події ( routed events ).</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Для елементів керування WPF визначено велику кількість подій, які умовно можна розділити на кілька груп:</p>
                        <p className="content__paragraph">- Події клавіатури</p>
                        <p className="content__paragraph">- Події миші</p>
                        <p className="content__paragraph">- Події стілусу</p>
                        <p className="content__paragraph">- Події сенсорного екрану/мультитач</p>
                        <p className="content__paragraph">- Події життєвого циклу</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Підключення обробників подій</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Підключити обробники подій можна декларативно у файлі xaml-коду, а можна стандартним способом у файлі відокремленого коду.</p> 
                        <p className="content__paragraph">Декларативне підключення:</p> 
                        <p className="content__paragraph">
                            {`
                            <Button x:Name="Button1" Content="Click" Click="Button_Click" />
                            `}
                        </p>
                        <p className="content__paragraph">І підключимо ще один обробник у коді, щоб при натисканні на кнопку спрацьовували відразу два обробники:</p>           
                        <img src={first} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Визначення маршрутизованих подій</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Визначення маршрутизованих подій відрізняється від стандартного визначення подій у мові C#. Для визначення маршрутизованих подій у класі створилося статичне поле типу RoutedEvent :</p>           
                        <p className="content__paragraph">
                            {`
                                public static RoutedEvent ПодіяEvent;
                            `}
                        </p>
                        <p className="content__paragraph">Це поле, як правило, має суфікс Event . Потім ця подія реєструється у статичному конструкторі.</p>
                        <p className="content__paragraph">І також клас, у якому створюється подія, як правило визначає об'єкт-обгортку над звичайною подією. У цій обгортці за допомогою методу AddHandler відбувається додавання обробника для цієї події, а за допомогою методу RemoveHandler - видалення обробника.</p>
                        <p className="content__paragraph">Наприклад, візьмемо вбудований клас ButtonBase- базовий клас для всіх кнопок, який визначає ряд подій, у тому числі подія Click :</p>
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Маршрутизовані події реєструються за допомогою методу EventManager.RegisterRoutedEvent(). У цей метод передаються послідовно ім'я події, тип події (піднімається, пряме, що опускається), тип делегата, призначеного для обробки події, та клас, який володіє цією подією.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Маршрутизація подій</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Модель подій WPF відрізняється від подій WinForms як декларативним підключенням. Події, виникнувши одному елементі, можуть оброблятися іншому. Події можуть підніматися та опускатися по дереву елементів.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Так, події поділяються на три види:</p>  
                        <p className="content__paragraph">- Прямі (direct events) – вони виникають і відпрацьовують на одному елементі і нікуди далі не передаються. Діють, як звичайні події.</p> 
                        <p className="content__paragraph">- Піднімаються (bubbling events) - виникають на одному елементі, а потім передаються далі до батька - елемента-контейнера і далі, доки не досягне найвищого з батьків у дереві елементів.</p> 
                        <p className="content__paragraph">- Тунельні (tunneling events), що опускаються , - починає відпрацьовувати в кореневому елементі вікна програми і йде далі по вкладених елементах, поки не досягне елемента, що викликав цю подію.</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Всі події, що маршрутизуються, використовують клас RoutedEventArgs (або його спадкоємців), який представляє доступ до наступних властивостей:</p>  
                        <p className="content__paragraph">Source : елемент логічного дерева, що є джерелом події.</p>
                        <p className="content__paragraph">OriginalSource : елемент візуального дерева, що є джерелом події. Зазвичай те саме, що і Source</p>
                        <p className="content__paragraph">RoutedEvent : представляє ім'я події</p>
                        <p className="content__paragraph">Handled : якщо ця властивість встановлена ​​в True, подія не буде підніматися та опускатися, а обмежиться безпосереднім джерелом.</p>        
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Піднімаються події</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Допустимо, у нас є така розмітка xaml:</p> 
                        <img src={three} alt="#" className="img"/> 
                        <p className="content__paragraph">В даному випадку ми отримуємо наступне дерево елементів:</p> 
                        <img src={four} alt="#" className="img"/>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Три елементи мають прив'язку до одного оброблювача події, що виникає при натисканні правої кнопки миші чи тачпада. Визначимо цей обробник у файлі коду C#:</p>           
                        <p className="content__paragraph">
                            {`
                            private void Control_MouseDown(object sender, MouseButtonEventArgs e)
                            {
                                textBlock1.Text = textBlock1.Text + "sender: " + sender.ToString() + "\\n";
                                textBlock1.Text = textBlock1.Text + "source: " + e.Source.ToString() + "\\n\\n";
                            }
                            `}
                        </p>
                        <p className="content__paragraph">Обробник у разі виводить інформацію про подію в текстовий блок.</p> 
                        <p className="content__paragraph">І так як ця подія MouseDown піднімається, то при натисканні правою кнопкою миші на елемент найнижчого рівня - Ellipse, подія MouseDown буде підніматися до контейнерів і відпрацює три рази послідовно для всіх елементів Ellipse, Button, StackPanel:</p>
                        <img src={five} alt="#" className="img"/>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Тунельні події</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Тунельні події діють прямо протилежним способом. Як правило, всі вони починаються зі слова Preview. Візьмемо наведений вище приклад і замінимо подію MouseDown на PreviewMouseDown</p>           
                        <p className="content__paragraph">
                            {`
                            <StackPanel Grid.Column="0" VerticalAlignment="Center" PreviewMouseDown="Control_MouseDown">
                                <Button x:Name="button1" Width="80" Height="50" PreviewMouseDown="Control_MouseDown" Margin="10" >
                                    <Ellipse Width="30" Height="30" Fill="Red" PreviewMouseDown="Control_MouseDown" />
                                </Button>
                            </StackPanel>
                            `}
                        </p>
                        <p className="content__paragraph">Натисніть елемент Ellipse. Тоді подія спочатку відпрацює на елементі StackPanel, а потім послідовно на елементі Button і закінчиться на елементі Ellipse.</p> 
                        <img src={six} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Події, що прикріплюються (Attached events)</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Якщо у нас є кілька елементів одного і того ж типу і ми хочемо прив'язати їх до однієї події, то ми можемо скористатися подіями, що прикріплюються.</p>    
                        <p className="content__paragraph">Так, раніше у нас була група елементів RadioButton і щоб вивести при виборі будь-якого з них обране значення, нам доводилося у кожного визначати обробник події. Але це оптимальна модель. І саме тут ми і застосуємо події, що прикріплюються:</p>         
                        <p className="content__paragraph">
                            {`
                            <StackPanel x:Name="menuSelector" Grid.Column="0" RadioButton.Checked="RadioButton_Click">
                                <RadioButton GroupName="menu" Content="Салат Оливье" />
                                <RadioButton GroupName="menu" Content="Котлета по-киевски" />
                                <RadioButton GroupName="menu" Content="Пицца с овощами" />
                                <RadioButton GroupName="menu" Content="Мясной рулет" />
                            </StackPanel>
                            `}
                        </p>
                        <p className="content__paragraph">Обробник для події, що прикріплюється, задається у форматі Ім'я_класу. Назва_події="Обробник" . Тут атрибут RadioButton.Checked="RadioButton_Click"закріплює всі радіокнопки StackPanel за одним обробником. Тоді в коді можна прописати:</p> 
                        <p className="content__paragraph">
                            {`
                            private void RadioButton_Click(object sender, RoutedEventArgs e)
                            {
                                RadioButton selectedRadio = (RadioButton)e.Source;
                                textBlock1.Text = "Вы выбрали: " + selectedRadio.Content.ToString();
                            }
                            `}
                        </p>
                        <p className="content__paragraph">І на текстовий блок виводиться вибраний пункт.</p>  
                        <p className="content__paragraph">Також обробник для події, що прикріплюється, ми можемо задати в коді c#:</p> 
                        <p className="content__paragraph">
                            {`
                            menuSelector.AddHandler(RadioButton.CheckedEvent, new RoutedEventHandler(RadioButton_Click));
                            `}
                        </p> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson61