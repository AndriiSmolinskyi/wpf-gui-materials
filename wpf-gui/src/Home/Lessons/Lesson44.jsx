import "./Lesson.scss";
import first from "./Lesson44_img/first.png"
import second from "./Lesson44_img/second.png"
import three from "./Lesson44_img/three.png"
import four from "./Lesson44_img/four.png"
import five from "./Lesson44_img/five.png"
import six from "./Lesson44_img/six.png"
import seven from "./Lesson44_img/seven.png"
import eight from "./Lesson44_img/eight.png"
import nine from "./Lesson44_img/nine.png"

export const Lesson44 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">CheckBox та RadioButton</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">CheckBox</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент CheckBox є звичайним прапорцем. Цей елемент є похідним від класу ToggleButton і тому може приймати також три стани: Checked , Unchecked та Intermediate .</p>
                        <p className="content__paragraph">Щоб отримати або встановити певний стан, треба використовувати властивість IsChecked , яка також успадкована від ToggleButton:</p> 
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Встановлення властивості {'IsChecked="{x:Null}"'} визначає невизначений стан для елемента checkbox. Інші два стани задаються за допомогою True і False. У цьому прикладі також прив'язаний до двох прапорців обробник події Checked. Ця подія виникає при установці checkbox у зазначений стан.</p>
                        <p className="content__paragraph">А атрибут IsThreeState="True"вказує, що прапорець може перебувати у трьох станах.</p>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Ключовими подіями прапорця є події Checked (генерується при встановленні прапорця у зазначений стан), Unchecked (генерується при знятті позначки з прапорця) та Indeterminate (прапорець переведений у невизначений стан). Наприклад, визначимо прапорець:</p>           
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">А у файлі коду C# пропишемо для нього обробники:</p> 
                        <img src={four} alt="#" className="img"/> 
                        <p className="content__paragraph">Програмне додавання прапорця:</p> 
                        <img src={five} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">RadioButton</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент управління, також похідний від ToggleButton, що представляє перемикач. Головна його особливість – підтримка груп. Кілька елементів RadioButton можна об'єднати в групи, і ми можемо вибрати з цієї групи лише один перемикач. Наприклад,</p>           
                        <img src={six} alt="#" className="img"/> 
                        <img src={seven} alt="#" className="img"/> 
                        <p className="content__paragraph">Щоб включити елемент до певної групи, використовується властивість GroupName. В даному випадку у нас дві групи – Languages ​​та Technologies. Ми можемо відзначити не більше одного елемента RadioButton в межах однієї групи, зафіксувавши тим самим вибір кількох можливостей.</p> 
                        <p className="content__paragraph">Щоб простежити за вибором того чи іншого елемента, ми також можемо визначити у елементів подію Checkedта її обробляти у коді:</p> 
                        <p className="content__paragraph">
                            {'<RadioButton GroupName="Languages" Content="VB.NET" Checked="RadioButton_Checked" />'}
                        </p>
                        <p className="content__paragraph">Обробник у файлі коду:</p> 
                        <img src={eight} alt="#" className="img"/> 
                        <p className="content__paragraph">Програмне додавання елемента RadioButton:</p>
                        <img src={nine} alt="#" className="img"/> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson44