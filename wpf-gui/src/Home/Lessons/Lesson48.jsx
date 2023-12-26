import "./Lesson.scss";
import first from "./Lesson48_img/first.png"
import second from "./Lesson48_img/second.png"
import three from "./Lesson48_img/three.png"
import four from "./Lesson48_img/four.png"
import five from "./Lesson48_img/five.png"
import six from "./Lesson48_img/six.png"

export const Lesson48 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Текстові елементи керування</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">TextBlock</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент призначений для виведення текстової інформації, створення простих написів:</p>
                        <p className="content__paragraph">
                            {'<StackPanel>'}
                            <br />
                            {'    <TextBlock>Текст1</TextBlock>'}
                            <br />
                            {'    <TextBlock Text="Текст2" />'}
                            <br />
                            {'</StackPanel>'}
                        </p>
                        <p className="content__paragraph">Ключовою властивістю тут є властивість Text, яка задає текстовий вміст. Причому у разі {'<TextBlock>Текст1</TextBlock>'} дана властивість задається неявно.</p> 
                        <p className="content__paragraph">За допомогою таких властивостей, як FontFamily, TextDecorations та ін, ми можемо налаштувати відображення тексту. Однак ми можемо задати і складніше форматування, наприклад:</p> 
                        <p className="content__paragraph">
                            {'<TextBlock TextWrapping="Wrap">'}
                            <br />
                            {'    <Run FontSize="20" Foreground="Red" FontWeight="Bold">О</Run>'}
                            <br />
                            {'    <Run FontSize="16" Foreground="LightSeaGreen">негин был, по мненью многих...</Run>'}
                            <br />
                            {'</TextBlock>'}
                        </p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Елементи Runє шматками звичайного тексту, для яких можна задати окреме форматування.</p> 
                        <p className="content__paragraph">Для зміни параметрів тексту, що відображається, даний елемент має такі властивості, як LineHeight , TextWrapping і TextAlignment .</p> 
                        <p className="content__paragraph">Властивість LineHeight дозволяє вказувати висоту рядків.</p> 
                        <p className="content__paragraph">Властивість TextWrapping дозволяє переносити текст при встановленні цієї властивості TextWrapping="Wrap". За промовчанням ця властивість має значення NoWrap, тому текст не переноситься.</p> 
                        <p className="content__paragraph">
                            Властивість TextAlignment вирівнює текст по центру (значення Center), правому (Right) або лівому краю (Left):
                            {'<TextBlock TextAlignment="Right">'}
                        </p>
                        <p className="content__paragraph">Для прикраси тексту використовується властивість TextDecorations , наприклад, якщо TextDecorations="Underline", то текст буде підкреслено.</p> 
                        <p className="content__paragraph">Якщо нам раптом потрібно буде перенести текст на інший рядок, тоді ми можемо використовувати елемент LineBreak:</p> 
                        <p className="content__paragraph">
                            {'<TextBlock>'}
                            <br />
                            {'    Однажды в студеную зимнюю пору'}
                            <br />
                            {'    <LineBreak />'}
                            <br />
                            {'    Я из лесу вышел'}
                            <br />
                            {'</TextBlock>'}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">TextBox</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Якщо TextBlock просто виводить статичний текст, цей елемент представляє поле для введення текстової інформації.</p>   
                        <p className="content__paragraph">Він також, як і TextBlock, має властивості TextWrapping , TextAlignment та TextDecorations .</p>
                        <p className="content__paragraph">За допомогою властивості MaxLength можна задати граничну кількість символів, що вводяться.</p>        
                        <p className="content__paragraph">
                            {'<TextBox MaxLength="250" TextChanged="TextBox_TextChanged">Начальный текст</TextBox>'}
                        </p>
                        <p className="content__paragraph">У коді C# ми можемо опрацювати подію зміни тексту:</p> 
                        <p className="content__paragraph">
                            {'private void TextBox_TextChanged(object sender, TextChangedEventArgs e)'}
                            <br />
                            {'{'}
                            <br />
                            {'    TextBox textBox = (TextBox)sender;'}
                            <br />
                            {'    MessageBox.Show(textBox.Text);'}
                            <br />
                            {'}'}
                        </p>
                        <p className="content__paragraph">За замовчуванням, якщо текст, що вводиться, перевищує встановлені межі поля, то текстове поле зростає, щоб вмістити весь текст. Але візуально це не дуже добре виглядає. Тому, як і у випадку з TextBlock, ми можемо перенести текст, що не міститься, на новий рядок, встановивши властивість TextWrapping="Wrap".</p> 
                        <p className="content__paragraph">Щоб перекладати за натисканням на клавішу Enter курсор на наступний рядок, нам треба встановити властивість AcceptsReturn="True".</p> 
                        <p className="content__paragraph">Також ми можемо додати полю можливість створювати табуляцію за допомогою кнопки Tab, встановивши властивістьAcceptsTab="True"</p> 
                        <p className="content__paragraph">Для відображення смуг прокручування TextBox підтримує властивості VerticalScrollBarVisibility та NorizontalScrollBarVisibility :</p> 
                        <p className="content__paragraph">
                            {'<TextBox AcceptsReturn="True" Height="100" VerticalScrollBarVisibility="Auto"'}
                            <br />
                            {'         HorizontalScrollBarVisibility="Auto">Начальный текст</TextBox>'}
                        </p>
                        <p className="content__paragraph">Можливо, при створенні програми нам потрібно зробити текстове поле недоступним для введення (на час залежно від умов або взагалі), тоді для цього потрібно встановити властивість IsReadOnly="True".</p>
                        <p className="content__paragraph">Для виділення тексту є властивості SelectionStart , SelectionLength та SelectionText . Наприклад, виділимо програмно текст натискання кнопки:</p>
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Обробник натискання кнопки:</p>
                        <img src={three} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Перевірка орфографії</h3>
                    <div className="content__block">
                        <p className="content__paragraph">TextBox має вбудовану підтримку орфографії. Щоб її задіяти, треба встановити властивість SpellCheck.IsEnabled="True". Крім того, за замовчуванням перевірка орфографії поширюється тільки на англійську мову, тому, якщо додаток заточений під іншу мову, нам треба його вказати явним чином через властивість Language :</p>           
                        <p className="content__paragraph">
                            {'<DockPanel>'}
                            <br />
                            {'    <TextBox SpellCheck.IsEnabled="True" Language="ru-ru">Привет, как дела?</TextBox>'}
                            <br />
                            {'</DockPanel>'}
                        </p>
                        <img src={four} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Мітка (Label)</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Головною особливістю тегів є підтримка мнемонічних команд-клавіш швидкого доступу, які передають фокус пов'язаному елементу. Наприклад,</p>           
                        <p className="content__paragraph">
                            {'<Label Target="{Binding ElementName=TextBox1}">_привет</Label>'}
                            <br />
                            {'<TextBox Name="TextBox1" Margin="0 30 0 0" Height="30" Width="100"></TextBox>'}
                        </p>
                        <p className="content__paragraph">Тепер, натиснувши клавішу "п", ми переведемо фокус на пов'язане текстове поле. Під час дзвінка підкреслення не відображається, щоб відображати підкреслення, потрібно натиснути клавішу Alt. Тоді, щоб перевести фокус на пов'язане текстове поле, необхідно буде натиснути поєднання Alt + "п". Якщо не передбачається використання клавіш швидкого доступу, то для виведення звичайного тексту замість міток краще використовувати елемент TextBlock.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">PasswordBox</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент призначено для введення парольної інформації. По суті, це теж текстове поле, тільки для введення символів використовується маска. Властивість PasswordChar встановлює символ маски, що відображається під час введення пароля. Якщо ця властивість не задано, то для маски символу за замовчуванням використовується чорна точка. Властивість Password встановлює парольний рядок, який відображається за замовчуванням під час завантаження вікна програми.</p>           
                        <img src={five} alt="#" className="img"/>
                        <img src={six} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">RichTextBox</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Для виведення текстового вмісту, насиченого форматуванням, графікою призначений RichTextBox. Можна навіть сказати, що він виводить не просто текст, а документи зі складнішим форматуванням, ніж звичайний TextBox. Більш детально про нього, а також як на його основі створити простий текстовий редактор, ми поговоримо у розділі, присвяченому документам.</p>           
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson48