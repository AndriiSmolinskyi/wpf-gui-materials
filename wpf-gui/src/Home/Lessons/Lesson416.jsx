import "./Lesson.scss";
import first from "./Lesson416_img/first.png"
import second from "./Lesson416_img/second.png"
import three from "./Lesson416_img/three.png"
import four from "./Lesson416_img/four.png"
import five from "./Lesson416_img/five.png"

export const Lesson416 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">TreeView</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Цей елемент керування призначений для деревоподібного відображення даних у вікні програми. Може містити як колекцію елементів TreeViewItem , так і інший вміст, наприклад текстові блоки:</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Однак все ж таки краще обгортати елементи в об'єкти TreeViewItem. За допомогою властивості Header ми можемо встановити текстову мітку або заголовок вузла дерева. Елемент TreeViewItem пропонує також ряд властивостей для керування станом: IsExpanded (приймає логічне значення і показує, чи розкритий вузол) та IsSelected (показує, чи вибраний вузол).</p>     
                        <p className="content__paragraph">Щоб відстежити вибір або розкриття вузла, ми можемо опрацювати відповідні події. Подія Expanded виникає при розкритті вузла, а подія Collapsed навпаки при його згортанні.</p>      
                        <p className="content__paragraph">Вибір вузла дерева ми можемо обробити за допомогою обробки події Selected . Наприклад:</p>     
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Тепер додамо у файл пов'язаного коду C# обробники для цих подій:</p> 
                        <img src={four} alt="#" className="img"/>
                        <img src={five} alt="#" className="img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson416