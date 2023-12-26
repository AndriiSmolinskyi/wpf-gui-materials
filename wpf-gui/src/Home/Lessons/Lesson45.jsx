import "./Lesson.scss";
import first from "./Lesson45_img/first.png"
import second from "./Lesson45_img/second.png"
import three from "./Lesson45_img/three.png"
import four from "./Lesson45_img/four.png"
import five from "./Lesson45_img/five.png"
import six from "./Lesson45_img/six.png"
import seven from "./Lesson45_img/seven.png"
import eight from "./Lesson45_img/eight.png"
import nine from "./Lesson45_img/nine.png"

export const Lesson45 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Підказки ToolTip і Popup</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">ToolTip</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент ToolTip представляє підказку під час наведення на який-небудь елемент. Для визначення підказки, що спливає, у елементів вже є властивість ToolTip, якому можна задати текст, що відображається при наведенні:</p>
                        <p className="content__paragraph">
                            {'<Button Content="Tooltip" ToolTip="Всплывающая подсказка для кнопки" Height="30" Width="80" />'}
                        </p>
                        <p className="content__paragraph">Також ми можемо більш точно налаштувати підказку за допомогою властивості Button.ToolTip:</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Підказки, що випливають, можна застосовувати не тільки кнопкам, але і до всіх інших елементів управління, наприклад, до текстового блоку:</p>
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Обидва визначення підказки будуть аналогічні.</p> 
                        <p className="content__paragraph">Оскільки ToolTip є елементом керування вмісту, то в нього можна вбудувати інші елементи для створення більшої функціональності. Наприклад:</p> 
                        <img src={three} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">Тут у нас два перемикачі, і на одному з них визначено розширений елемент ToolTip: а саме в нього вкладено елемент Image, що виводить зображення та елемент TextBlock. Таким чином, можна створювати підказки з різним наповненням.</p>
                        <p className="content__paragraph">Зображення елемента Image у цьому випадку було додано до проекту.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Властивості ToolTip</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Деякі корисні властивості елемента Tooltip:</p> 
                        <p className="content__paragraph">- HasDropShadow : визначає, чи підказка відкидатиме тінь.</p> 
                        <p className="content__paragraph">- Placement : визначає, як позиціонуватиметься підказка на вікні програми. За замовчуванням верхній лівий кут її позиціонується на покажчик миші.</p> 
                        <p className="content__paragraph">- HorizontalOffset/VerticalOffset : визначає зміщення щодо початкового розташування.</p> 
                        <p className="content__paragraph">- PlacementTarget : визначає позицію підказки щодо іншого елемента управління.</p>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Застосуємо властивості:</p>  
                        <img src={five} alt="#" className="img"/>    
                        <img src={six} alt="#" className="img"/>      
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Тут у нас три перемикачі. У першому ми задаємо властивості через елемент ToolTip. Для другого перемикача ми також можемо задати властивості, незважаючи на те, що тут ми підказку просто задаємо ToolTip="Цена: 29990 рублей" Content="Nexus 5X". У цьому випадку ми можемо використовувати прикріплені властивості класу ToolTipService :</p>
                        <p className="content__paragraph">- InitialShowDelay: задає затримку перед відображенням підказки.</p> 
                        <p className="content__paragraph">- ShowDuration: встановлює час відображення підказки.</p> 
                        <p className="content__paragraph">- BetweenShowDelay: встановлює час, протягом якого користувач зможе перейти до іншого елемента з підказкою, і для цього елемента не працюватиме властивість InitialShowDelay (якщо воно вказано)</p> 
                        <p className="content__paragraph">- ToolTip: встановлює вміст підказки.</p> 
                        <p className="content__paragraph">- HasDropShadow: визначає, чи буде підказка відкидати тінь</p> 
                        <p className="content__paragraph">- ShowOnDisabled: встановлює поведінку підказки для недоступного елемента (зі значенням IsEnabled="True"). Якщо ця властивість дорівнює true, підказка відображається для недоступних елементів. За замовчуванням одно false.</p> 
                        <p className="content__paragraph">- Placement / HorizontalOffset / VerticalOffset / PlacementTarget: ті ж властивості, що й у елемента ToolTip, які встановлюють положення підказки.</p>            
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Програмне створення спливаючої підказки</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Допустимо, у коді XAML у нас визначена наступна кнопка:</p> 
                        <p className="content__paragraph">
                            {'<Button x:Name="button1" Content="Hello" />'}
                        </p>        
                        <p className="content__paragraph">Тоді у файлі коду C# ми могли б визначити підказку для кнопки так:</p> 
                        <img src={seven} alt="#" className="img"/>   
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Popup</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент Popup також представляє спливаюче вікно, тільки в даному випадку воно має іншу функціональність. Якщо Tooltip відображається автоматично при наведенні і автоматично ховається через деякий час, то у випадку з Popup всі ці дії нам треба задавати вручну.</p>
                        <p className="content__paragraph">Так, щоб відобразити при наведенні миші елемент спливаюче вікно, нам треба відповідним чином обробити подію MouseEnter.</p>
                        <p className="content__paragraph">Другий момент, який треба врахувати, це встановлення якості StaysOpen="False". За умовчанням воно дорівнює True, а це означає, що при відображенні вікна воно більше не зникне, поки ми не встановимо явно значення цієї властивості в False.</p>
                        <p className="content__paragraph">Отже, створимо спливаюче вікно:</p> 
                        <img src={eight} alt="#" className="img"/>
                        <p className="content__paragraph">І обробник наведення курсору миші на кнопку в коді c#:</p> 
                        <p className="content__paragraph">
                            {'private void Button_MouseEnter_1(object sender, MouseEventArgs e)'}
                            <br />
                            {'{'}
                            <br />
                            {'    popup1.IsOpen = true;'}
                            <br />
                            {'}'}
                        </p> 
                        <img src={nine} alt="#" className="img"/> 
                        <p className="content__paragraph">І при наведенні покажчика миші елемент з'явиться спливаюче вікно з повідомленням.</p>         
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson45