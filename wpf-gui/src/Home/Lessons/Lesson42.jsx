import "./Lesson.scss";
import first from "./Lesson42_img/first.png"
import second from "./Lesson42_img/second.png"
import three from "./Lesson42_img/three.png"
import four from "./Lesson42_img/four.png"
import five from "./Lesson42_img/five.png"
import six from "./Lesson42_img/six.png"
import seven from "./Lesson42_img/seven.png"
import eight from "./Lesson42_img/seven.png"
import nine from "./Lesson42_img/nine.png"
import ten from "./Lesson42_img/ten.png"
import eleven from "./Lesson42_img/eleven.png"
import twelve from "./Lesson42_img/twelve.png"
import thirdteen from "./Lesson42_img/thirdteen.png"
import fourteen from "./Lesson42_img/fourteen.png"

export const Lesson42 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Елементи керування вмістом</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Елементи управління вмістом (content controls) представляють такі елементи управління, які містять інший елемент. Усі елементи керування вмістом успадковуються від класу ContentControl , який у свою чергу успадковується від класу System.Window.Controls.Control.</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">До елементів керування вмістом належать такі елементи як Button, Label, ToggleButton, ToolTip, RadioButton, CheckBox, GroupBox, TabItem, Expander, ScrollViewer. Також елементом керування вмістом є і головний елемент вікна – Window.</p>
                        <p className="content__paragraph">Відмінною рисою всіх цих елементів є наявність властивості Content , яка і встановлює вкладений елемент. У цьому елементи керування вмістом схожі на контейнери компонування. Тільки контейнери можуть мати безліч вкладених елементів, а елементи керування вмістом лише один.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Властивість Content може представляти будь-який об'єкт, який може належати до одного з двох типів:</p>    
                        <p className="content__paragraph">- Об'єкт класу, що не успадковує UIElement. Для такого об'єкта викликається метод ToString(), який повертає рядкове подання об'єкта. Потім цей рядок встановлюється як вміст.</p>  
                        <p className="content__paragraph">- Об'єкт класу успадковує UIElement. Для такого об'єкта викликається метод UIElement.OnRender(), який виконує малювання всередині елемента керування вмістом.</p>        
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Розглянемо на прикладі кнопки, яка є елементом керування вмістом:</p> 
                        <p className="content__paragraph">
                            {'<Button Content="Hello World!" />'}
                        </p>  
                        <p className="content__paragraph">Як вміст встановлюється звичайний рядок. Цей приклад ми можемо в XAML прописати інакше:</p>                   
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Або ми можемо використовувати скорочене неявне визначення якості Content:</p> 
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Візьмемо інший приклад. Визначимо кнопку з іменем button1:</p>
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">А у файлі коді MainWindow.xaml.cs надамо її властивості Content якийсь об'єкт:</p>
                        <img src={five} alt="#" className="img"/> 
                        <p className="content__paragraph">У результаті ми отримаємо наступну кнопку:</p> 
                        <img src={six} alt="#" className="img"/> 
                        <p className="content__paragraph">У результаті число конвертується в рядок і встановлюється як вміст.</p> 
                        <p className="content__paragraph">Інакше все буде працювати, якщо ми як вміст використовуємо об'єкт, успадкований від UIElement:</p> 
                        <img src={seven} alt="#" className="img"/> 
                        <p className="content__paragraph">Тепер як вміст використовуватиметься інша кнопка, для якої при візуалізації буде викликатися метод OnRender():</p> 
                        <img src={eight} alt="#" className="img"/> 
                        <p className="content__paragraph">Для створення тієї ж кнопки через код C# ми могли б прописати наступне вираз:</p>
                        <p className="content__paragraph">
                            {'button1.Content = new Button { Content = "Hello" };'}
                        </p> 
                        <p className="content__paragraph">На відміну від контейнерів компонування для елементів керування вмістом, ми можемо задати лише один вкладений елемент. Якщо ж нам потрібно вкласти в елемент керування вмістом кілька елементів, то ми можемо використовувати ті ж контейнери компонування:</p> 
                        <img src={nine} alt="#" className="img"/>
                        <img src={ten} alt="#" className="img"/>
                        <p className="content__paragraph">Те саме ми могли б прописати через код C#:</p> 
                        <img src={eleven} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Позиціонування контенту</h3>
                    <div className="content__block">
                        <h3 className="content__title-h3">Content Alignment</h3>
                        <p className="content__paragraph">Вирівнювання вмісту всередині елемента визначається властивостями HorizontalContentAlignment (вирівнювання по горизонталі) і VerticalContentAlignment (вирівнювання по вертикалі), аналогічні властивостям VerticalAlignment/HorizontalAlignment. Властивість HorizontalContentAlignmentприймає значення Left, Right, Center (положення центром), Stretch (розтяг по всій ширині). Наприклад:</p>           
                        <img src={twelve} alt="#" className="img"/>
                        <p className="content__paragraph">VerticalContentAlignmentприймає значення Top (положення у верху), Bottom (положення внизу), Center (положення по центру), Stretch (розтяг по всій висоті)</p>   
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Padding</h3>
                    <div className="content__block">
                        <p className="content__paragraph">За допомогою властивості Padding ми можемо встановити відступ вмісту елемента:</p>           
                        <img src={thirdteen} alt="#" className="img"/>
                        <img src={fourteen} alt="#" className="img"/>
                        <p className="content__paragraph">Властивість Padding задається у форматі Padding="отступ_слева отступ_сверху отступ_справа отступ_снизу".</p>  
                        <p className="content__paragraph">Якщо з усіх чотирьох сторін передбачається той самий відступ, то, як і у випадку з Margin, ми можемо задати одне число:</p> 
                        <p className="content__paragraph">
                            {'<Button x:Name="button2" Padding="20" Content="Hello World" />'}
                        </p>
                        <p className="content__paragraph">Важливо розуміти, від якої точки задається відступ. У випадку першої кнопки в ній контект вирівнюється по лівому краю, тому відступ зліва буде припускати відступ від лівого краю елемента Button. А друга кнопка знаходиться по центру. Тому для неї відступ ліворуч передбачає відступ від тієї точки, в якій вміст знаходився б при центруванні без застосування Padding.</p>  
                        <p className="content__paragraph">Комбінація значень властивостей HorizontalContentAlignment/VerticalContentAlignment та Padding дозволяє оптимальним чином задати розташування вмісту.</p>  
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson42