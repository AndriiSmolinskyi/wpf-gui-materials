import "./Lesson.scss";
import first from "./Lesson63_img/first.png"
import second from "./Lesson63_img/second.png"
import three from "./Lesson63_img/three.png"
import four from "./Lesson63_img/four.png"
import five from "./Lesson63_img/five.png"
import six from "./Lesson63_img/six.png"

export const Lesson63 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1"></h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">У WPF для миші визначено такі події:</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Якщо раптом ми не хочемо, щоб елемент генерував події миші, ми можемо в нього встановити властивістьIsHitTestVisible="False"</p> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Більшість обробників подій миші як параметр отримують об'єкт MouseEventArgs, що має ряд цікавих властивостей і методів, які ми можемо використовувати:</p>           
                        <p className="content__paragraph">- ButtonState : повертає стан кнопки миші. Зберігає одне з значень перерахування MouseButtonState :</p>  
                        <p className="content__paragraph">--- Pressed: кнопка наата</p>  
                        <p className="content__paragraph">--- Released: кнопка віджата</p>  
                        <p className="content__paragraph">- ChangedButton : отримує кнопку, яка асоційована з цією подією. Зберігає одне із значень перерахування MouseButton :</p>  
                        <p className="content__paragraph">--- Left: ліва кнопка миші</p>  
                        <p className="content__paragraph">--- Middle: середня кнопка миші</p>  
                        <p className="content__paragraph">--- Right: права кнопка миші</p>  
                        <p className="content__paragraph">--- XButton1: додаткова кнопка миші</p>  
                        <p className="content__paragraph">--- XButton2: додаткова кнопка миші</p>  
                        <p className="content__paragraph">- ClickCount : зберігає кількість зроблених натискань</p>  
                        <p className="content__paragraph">- LeftButton : зберігає стан лівої кнопки миші у вигляді MouseButtonState</p>  
                        <p className="content__paragraph">- MiddleButton : зберігає стан середньої кнопки миші у вигляді MouseButtonState</p>  
                        <p className="content__paragraph">- RightButton : зберігає стан правої кнопки миші у вигляді MouseButtonState</p>  
                        <p className="content__paragraph">- XButton1 : зберігає стан першої додаткової кнопки</p>  
                        <p className="content__paragraph">- XButton2 : зберігає стан другої додаткової кнопки</p>  
                        <p className="content__paragraph">- GetPosition() : метод, який повертає координати натискання у вигляді об'єкта Point</p>  
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Наприклад, використовуємо метод GetPosition(). Для цього встановимо для ґріда обробник:</p>  
                        <p className="content__paragraph">&lt;Grid MouseDown="Grid_MouseDown"&gt;</p>
                        <p className="content__paragraph">І визначимо цей оброблювач:</p>      
                        <p className="content__paragraph">
                            {`private void Grid_MouseDown(object sender, MouseButtonEventArgs e)
                            {
                                Point p = e.GetPosition(this);
                                MessageBox.Show("Координата x=" +p.X.ToString()+ " y="+p.Y.ToString());
                            }`}
                        </p>     
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Події перетягування</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Події перетягування (drag & drop) пов'язані з перетягуванням елементів, коли користувач, натискаючи на елементі мишкою та утримуючи мишу натиснутою, переміщає покажчик на інший елемент, тим самим переміщуючи цей елемент раніше натиснутий.</p>           
                        <img src={three} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Ці події використовують об'єкт DragEventArgs , який має ряд властивостей та методів:</p>
                        <p className="content__paragraph">- GetPosition : повертає позицію миші</p> 
                        <p className="content__paragraph">- Data : об'єкт, що представляє буфер обміну - тобто дані, які переміщаються</p> 
                        <p className="content__paragraph">- Effects і AllowedEffects : являють собою ефект перетягування. Зберігають одне із значень перерахування DragDropEffects :</p> 
                        <p className="content__paragraph">--- All: дані копіюються з джерела в цільовий елемент із видаленням з джерела</p> 
                        <p className="content__paragraph">--- Copy: дані просто копіюються з джерела в цільовий елемент</p> 
                        <p className="content__paragraph">--- Link: дані джерела зв'язуються з даними цільового елемента</p> 
                        <p className="content__paragraph">--- Move: дані переміщуються з джерела в цільовий елемент</p> 
                        <p className="content__paragraph">--- None: відсутність ефекту</p> 
                        <p className="content__paragraph">--- Scroll: дані прокручуються при копіюванні в цільовий елемент</p> 
                        <p className="content__paragraph">- KeyStates : зберігає значення з переліку DragDropKeyStates , яке вказує, яка клавіша клавіатури або миші затиснута під час перетягування: LeftMouseButton, RightMouseButton, MiddleMouseButton, ShiftKey, ControlKey, AltKey, None</p>            
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Подивимося на прикладі. Допустимо, у нас наступна розмітка xaml:</p> 
                        <img src={four} alt="#" className="img"/> 
                        <p className="content__paragraph">Тут ми переміщатимемо введений текст із текстового поля на кнопку. Щоб кнопка могла приймати об'єкти, що переміщаються, встановимо її властивість AllowDrop="True". Одні елементи на інші, то нам треба в елементів-приймачів завжди встановлювати цю властивість.</p>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Тут також підключені два обробники події, які ми поставимо в коді C#:</p>   
                        <img src={five} alt="#" className="img"/>   
                        <p className="content__paragraph">Щоб захопити елемент для перенесення, нам треба викликати метод DragDrop.DoDragDrop, який як перший параметр приймає елемент-джерело, з якого йде перетягування, другий параметр - що перетягуємо (в даному випадку текст), і третій параметр - тип ефекту. Так як у цьому випадку у нас копіювання, то встановлюємо DragDropEffects.Copy. Також ми можемо використовувати інші константи: Move, None, Link, Scroll, All.</p> 
                        <p className="content__paragraph">Введемо текст у текстове поле, виділимо його, натиснемо лівою кнопкою і, не відпускаючи, перемістимо курсор у межі кнопки. І відпустимо. Тут вже виникне подія Drop кнопки, обробник якої також простий: ми присвоюємо її вмісту дані перетягування. І оскільки ми перетягуємо текст, то як параметр виставляємо DataFormats.Text</p>       
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Події отримання/втрати фокусу</h3>
                    <div className="content__block">
                        <p className="content__paragraph">При обробці подій фокусу слід пам'ятати, що елемент може отримувати фокус лише у тому випадку, якщо його властивість Focusable має значення true.</p>  
                        <p className="content__paragraph">Щоб програмним способом передати елементу фокус, треба викликати у нього методи Focus або MoveFocus:</p> 
                        <p className="content__paragraph">textBox1.Focus();</p>    
                        <img src={six} alt="#" className="img"/> 
                        <p className="content__paragraph">Обробимо подію отримання фокусу для текстового поля:</p>  
                        <p className="content__paragraph">
                            {`
                            <TextBox GotFocus="TextBox_GotFocus"  />
                            `}
                        </p> 
                        <p className="content__paragraph">У файлі коду пропишемо обробник:</p>
                        <p className="content__paragraph">
                            {`
                            private void TextBox_GotFocus(object sender, RoutedEventArgs e)
                            `}
                            <br/>
                            {`
                                {
                            `}
                            <br/>
                            {`
                                MessageBox.Show("Получение фокуса");
                            `}
                            <br/>
                            {`
                                }
                            `}
                        </p>    
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson63