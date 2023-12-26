import "./Lesson.scss";
import first from "./Lesson38_img/first.png"
import second from "./Lesson38_img/second.png"
import three from "./Lesson38_img/three.png"
import four from "./Lesson38_img/four.png"
import five from "./Lesson38_img/five.png"
import six from "./Lesson38_img/six.png"
import seven from "./Lesson38_img/seven.png"
import eight from "./Lesson38_img/eight.png"

export const Lesson38 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Властивості компонування елементів</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Елементи WPF мають набір властивостей, які допомагають позиціонувати дані елементи. Розглянемо деякі з цих властивостей.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Ширина та висота</h3>
                    <div className="content__block">
                        <p className="content__paragraph">У елемента можна встановити ширину за допомогою властивості Widthта висоту за допомогою властивості Height. Ці властивості набувають значення типу double. Хоча загальна рекомендація полягає в тому, що бажано уникати жорстко закодованих у коді ширини та висоти.</p>           
                        <p className="content__paragraph">Також ми можемо задати можливий діапазон ширини та висоти за допомогою властивостей MinWidth/MaxWidthта MinHeight/MaxHeight. І при розтягуванні або стисканні контейнерів елементи з заданими властивостями не виходитимуть за межі встановлених значень.</p>
                        <p className="content__paragraph">
                            {'Можливо, виникає питання, а в яких одиницях виміру встановлюються ширина та висота? '}
                            {'Та й загалом які одиниці виміру використовуються? У WPF можна використовувати кілька одиниць вимірювання: '}
                            {'сантиметри ( cm), точки ( pt), дюйми ( in) та пікселі ( px). Наприклад, поставимо розміри в інших одиницях: '}
                            {'<Button Content="Кнопка" Width="5cm" Height="0.4in" />'}
                        </p>
                        <p className="content__paragraph">Якщо одиниця виміру не задана явно, а просто стоїть число, використовуються за замовчуванням пікселі. Але ці пікселі не дорівнюють звичайним пікселям, а є свого роду "логічними пікселями", незалежними від конкретного пристрою. Кожен такий піксель становить 1/96 дюйма незалежно від роздільної здатності екрана.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Вирівнювання</h3>
                    <div className="content__block">
                        <h3 className="content__title-h3">Горизонтальне вирівнювання</h3>
                        <p className="content__paragraph">За допомогою спеціальних властивостей ми можемо вирівняти елемент щодо певної сторони контейнера по горизонталі чи вертикалі.</p>
                        <p className="content__paragraph">Властивість HorizontalAlignment вирівнює елемент по горизонталі щодо правої або лівої сторони контейнера і може приймати значення Left, Right, Center (положення по центру), Stretch (розтяг по всій ширині). Наприклад:</p>  
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>         
                    </div>
                    <div className="content__block">
                        <h3 className="content__title-h3">Вертикальне вирівнювання</h3>
                        <p className="content__paragraph">Також ми можемо задати для елемента вирівнювання по вертикалі за допомогою властивості VerticalAlignment , яка приймає наступні значення: Top (положення у верхній частині контейнера), Bottom (положення внизу), Center (положення по центру), Stretch (розтяг по всій висоті). Наприклад:</p>           
                        <img src={three} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Відступи margin</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Властивість Margin встановлює відступи навколо елемента. Синтаксис: Margin="лівий відступ верхній відступ правий відступ нижній відступ". Наприклад, встановимо відступи в однієї кнопки ліворуч і зверху, а в іншої кнопки праворуч і знизу:</p>           
                        <img src={five} alt="#" className="img"/>
                        <img src={six} alt="#" className="img"/>
                        <p className="content__paragraph">Якщо ми поставимо властивість таким чином: Margin = "20", то відразу встановимо відступ для всіх чотирьох сторін.</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Панель.ZIndex</h3>
                    <div className="content__block">
                        <p className="content__paragraph">При створенні інтерфейсу можлива ситуація, коли одні елементи повністю або частково перекриватимуть інші. За замовчуванням ті елементи, які пізніше визначені, перекривають ті елементи, які визначені раніше. Однак ми можемо змінити подібну дію за допомогою властивості Panel.ZIndex .</p>
                        <p className="content__paragraph">За замовчуванням для всіх створюваних елементів Panel.ZIndex="0". Однак, призначивши цій властивості більш високе значення, ми можемо пересунути його на передній план. Елементи з великим значенням цієї властивості перекриватимуть ті елементи, у яких менше значення цієї властивості:</p>  
                        <img src={seven} alt="#" className="img"/>
                        <img src={eight} alt="#" className="img"/>         
                    </div>
                </div>
            </div>
        </div>    
    )
}

//<a className="link" target="blank" href=""></a> 
// <img src={first} alt="#" className="img"/>
// import first from "./Lesson11_img/first.png"
export default Lesson38