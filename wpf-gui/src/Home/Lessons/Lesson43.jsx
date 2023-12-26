import "./Lesson.scss";
import first from "./Lesson43_img/first.png"
import second from "./Lesson43_img/second.png"
import three from "./Lesson43_img/three.png"

export const Lesson43 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Кнопки</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">У WPF кнопки представлені цілим рядом класів, які успадковуються від базового класу ButtonBase:</p>
                        <img src={first} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Button</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент Button представляє звичайну кнопку:</p>  
                        <p className="content__paragraph">
                            {'<Button x:Name="button1" Width="60" Height="30" Background="LightGray" />'}
                        </p>
                        <p className="content__paragraph">Від класу ButtonBase кнопка успадковує ряд подій, наприклад, Click, які дозволяють обробляти введення користувача.</p>
                        <p className="content__paragraph">Щоб зв'язати кнопку з обробником події натискання, нам потрібно визначити в кнопці атрибут Click. А значенням цього атрибуту буде назва обробника у коді C#. А потім у самому коді C# визначити цей обробник.</p>
                        <p className="content__paragraph">Наприклад, код xaml:</p> 
                        <p className="content__paragraph">
                            {'<Button x:Name="button1" Width="60" Height="30" Content="Нажать" Click="Button_Click" />'}
                        </p>
                        <p className="content__paragraph">І обробник у коді C#:</p> 
                        <p className="content__paragraph">
                            {'private void Button_Click(object sender, RoutedEventArgs e)'}
                            <br />
                            {'{'}
                            <br />
                            {'    MessageBox.Show("Кнопка нажата");'}
                            <br />
                            {'}'}
                        </p>
                        <p className="content__paragraph">Або можна не задавати обробник через атрибут, а стандартним чином для C# прописати в коді:button1.Click+=Button_Click;</p>  
                        <p className="content__paragraph">Кнопка має такі властивості як IsDefault та IsCancel , які набувають значення true та false.</p>  
                        <p className="content__paragraph">Якщо властивість IsDefault встановлена ​​в true, то при натисканні клавіші Enter буде викликатися обробник натискання цієї кнопки.</p>  
                        <p className="content__paragraph">Аналогічно якщо властивість IsCancel буде встановлена ​​в true, то при натисканні на клавішу Esc буде викликатися обробник натискання цієї кнопки.</p>  
                        <p className="content__paragraph">Наприклад, визначимо код xaml:</p>  
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">А в коді MainWindow.xaml.cs визначимо наступний код C#:</p> 
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Тепер при натисканні на клавішу Enter відображатиметься повідомлення, а при натисканні на Esc відбуватиметься вихід із програми та закриття вікна.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">RepeatButton</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Відмінна риса елемента RepeatButton - безперервна генерація події Click, поки натиснута кнопка. Інтервал генерації події коригується властивостями Delay та Interval .</p>  
                        <p className="content__paragraph">Сам по собі елемент RepeatButton рідко використовується, проте він може бути основою для створення повзунка в елементах ScrollBar і ScrollViewer, в яких натискання на повзунок ініціює прокручування.</p>            
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">ToggleButton</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Являє елементарний перемикач. Може бути у трьох станах - true, false і " нульовому " (непозначеному) стані, яке значення представляє значення типу bool?у мові C#. Стан можна встановити або отримати за допомогою IsChecked властивості . Також додає три події - Checked (перехід у зазначений стан), Unchecked (зняття позначки) та Intermediate (якщо значення дорівнює null). Щоб відпрацьовувати всі три події, необхідно встановити властивість IsThreeState="True"</p>   
                        <p className="content__paragraph">ToggleButton, як правило, сам по собі теж рідко використовується, проте при цьому він служить основою для створення інших функціональніших елементів, таких як checkbox і radiobutton.</p>          
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson43