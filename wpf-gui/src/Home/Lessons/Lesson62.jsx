import "./Lesson.scss";
import first from "./Lesson62_img/first.png"
import second from "./Lesson62_img/second.png"
import three from "./Lesson62_img/three.png"
import four from "./Lesson62_img/four.png"

export const Lesson62 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Події клавіатури</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">До подій клавіатури можна віднести такі події:</p>
                        <img src={first} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Більшість подій клавіатури (KeyUp/PreviewKeyUp, KeyDown/PreviewKeyDown) приймає як аргумент об'єкт KeyEventArgs, у якого можна відзначити такі властивості:</p>  
                        <p className="content__paragraph">- Key дозволяє отримати натиснуту або відпущену клавішу</p>
                        <p className="content__paragraph">- SystemKey дозволяє дізнатися, чи натиснута системна клавіша, наприклад, Alt</p>
                        <p className="content__paragraph">- KeyboardDevice отримує об'єкт KeyboardDevice, що представляє пристрій клавіатури</p>
                        <p className="content__paragraph">- IsRepeat вказує, що кнопка утримується в натиснутому положенні</p>
                        <p className="content__paragraph">- IsUp та IsDown вказує, чи була клавіша натиснута чи відпущена</p> 
                        <p className="content__paragraph">- IsToggled вказує, чи була клавіша включена - відноситься тільки до клавіш Caps Lock, Scroll Lock, Num Lock</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Наприклад, обробимо подію KeyDown для текстового поля та виведемо дані про натиснуту клавішу в текстовий блок:</p>           
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">А у файлі коду пропишемо обробник TextBox_KeyDown:</p> 
                        <p className="content__paragraph">
                            {`
                            private void TextBox_KeyDown(object sender, KeyEventArgs e)
                            {
                                textBlock1.Text += e.Key.ToString();
                            }
                            `}
                        </p>
                        <p className="content__paragraph">Тут до текстового блоку додається текстове подання натиснутої клавіші в текстовому полі:</p> 
                        <img src={three} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Правда, в даному випадку реальну користь від текстового представлення ми можемо отримати тільки для алфавітно-цифрових клавіш, у той час як при натисканні спеціальних клавіш або лапок будуть додаватися повні текстові уявлення, наприклад, для лапок - OemQuotes.</p>
                        <p className="content__paragraph">Якщо нам потрібно відловити натискання якоїсь клавіші, то ми можемо її перевірити через перерахування Key :</p>            
                        <p className="content__paragraph">
                            {`
                            if (e.Key == Key.OemQuotes)
                                textBlock1.Text += "'";
                            else
                                textBlock1.Text += e.Key.ToString();
                            `}
                        </p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Об'єкт KeyboardDeviceдозволяє нам отримати ряд додаткових даних про події клавіатури через ряд властивостей та методів:</p>  
                        <p className="content__paragraph">- Modifiers дозволяє дізнатися, яка клавіша була натиснута разом із основною (Ctrl, Shift, Alt)</p> 
                        <p className="content__paragraph">- IsKeyDown() визначає, чи була натиснута певна клавіша під час події</p> 
                        <p className="content__paragraph">- IsKeyUp() дозволяє дізнатися, чи була віджата певна клавіша під час події</p> 
                        <p className="content__paragraph">- IsKeyToggled() дозволяє дізнатися, чи була під час події включена клавіша Caps Lock, Scroll Lock або Num Lock</p> 
                        <p className="content__paragraph">- GetKeyStates() повертає одне із значень перерахування KeyStates, яке вказує на стан клавіші</p>          
                        <div className="content__block">
                            <p className="content__paragraph">Приклад використання KeyEventArgs при одночасному натисканні двох клавіш Shift та F1:</p>           
                            <p className="content__paragraph">
                                {`
                                private void TextBox_KeyDown(object sender, KeyEventArgs e)
                                {
                                    if (e.KeyboardDevice.Modifiers == ModifierKeys.Shift && e.Key == Key.F1)
                                        MessageBox.Show("HELLO");
                                }
                                `}
                            </p>  
                            <p className="content__paragraph">Події TextInput/PreviewTextInput як параметр приймають об'єкт TextCompositionEventArgs . З його властивостей варто відзначити, мабуть, лише властивість Text, яка отримує введений текст, саме текст, а не текстове уявлення кнопки. Для цього додамо до текстового поля обробник:</p>         
                            <p className="content__paragraph">
                                {`
                                <TextBox Height="40" Width="260" PreviewTextInput="TextBox_TextInput" />
                                `}
                            </p>
                            <p className="content__paragraph">І визначимо обробник у файлі коду:</p> 
                            <p className="content__paragraph">
                                {`
                                private void TextBox_TextInput(object sender, TextCompositionEventArgs e)
                                {
                                    textBlock1.Text += e.Text;
                                }
                                `}
                            </p>
                            <p className="content__paragraph">Причому в даному випадку я обробляю саме подію PreviewTextInput, а не TextInput, тому що елемент TextBox пригнічує подію TextInput і замість неї генерує подію TextChanged. Більшість інших елементів управління, наприклад, кнопок, подія TextInput чудово спрацьовує.</p>       
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Валідація текстового введення</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Події відкривають великий простір для валідації текстового введення. Нерідко під час введення використовуються ті чи інші обмеження: не можна вводити цифрові символи чи, навпаки, можна лише цифрові тощо. Подивимося, як ми можемо виконати валідацію введення. Наприклад, візьмемо номер телефону. Спочатку задамо обробку двох подій у xaml:</p>           
                        <p className="content__paragraph">
                            {`
                            <TextBox PreviewTextInput="TextBox_PreviewTextInput" PreviewKeyDown="TextBox_PreviewKeyDown" />
                            `}
                        </p>
                        <p className="content__paragraph">І визначимо у файлі коду обробники:</p> 
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">Для валідації введення нам потрібно використовувати обробники для двох подій – PreviewKeyDown та PreviewTextInput. Справа в тому, що натискання не всіх клавіш PreviewTextInput обробляє. Наприклад, натискання клавіші пробілу не обробляється. Тому також застосовується обробка та PreviewKeyDown.</p> 
                        <p className="content__paragraph">Самі обробники перевіряють введення і якщо введення відповідає критеріям, він відхиляється за допомогою установки e.Handled = true . Тим самим ми говоримо, що подія оброблена, а введені текстові сиволи не з'являтимуться у текстовому полі. Саме в даному випадку користувач може вводити лише цифрові символи та пропуск відповідно до формату телефонного номера.</p> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson62