import "./Lesson.scss";
import first from "./Lesson52_img/first.png"
import second from "./Lesson52_img/second.png"
import three from "./Lesson52_img/three.png"

export const Lesson52 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Які прикріплюються властивості</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph">Прикріплювані властивості також є властивостями залежностей з тією різницею, що вони визначаються в одному класі, а застосовуються в іншому. Наприклад, при встановленні стовпця або рядка гриду, в яких розміщується елемент управління, використовуються властивості Grid.Rowі Grig.Column, які якраз і представляють властивості, що прикріплюються. Тобто ці властивості визначені у класі Grid, але використовуються в інших вкладених елементах:</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">У коді C# установка значення для прикріплених властивостей провадиться за допомогою статичних методів у форматі Класс.Set[Свойство](). Наприклад, встановимо для вище певної кнопки стовпець і рядок гриду:</p> 
                        <p className="content__paragraph">
                            {`Grid.SetRow(button1, 1); // другий рядок`}
                            <br />
                            {`Grid.SetColumn(button1, 1); // другий стовбець`}
                        </p>
                        <p className="content__paragraph">За допомогою методів типу Класс.GetСвойство()ми можемо отримувати в коді значення властивостей, що прикріплюються:</p> 
                        <p className="content__paragraph">
                            {`int column = Grid.GetColumn(button1); // отримуємо номер стовбця`}
                        </p>
                        <p className="content__paragraph">Якщо більш детально поглянути на властивості, що прикріплюються, то можна побачити, що їх визначення трохи відрізняється від стандартних властивостей залежностей. Для реєстрації властивості, що прикріплюється, застосовується метод RegisterAttached():</p> 
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Метод RegisterAttached()приймає у принципі самі параметри, як і метод Register(). </p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Інша відмінність від звичайних властивостей залежностей полягає в тому, що для властивостей, що прикріплюються, не створюється обгортка у вигляді стандартної властивості C#. Замість цього використовується пара статичних методів SetСвойство() GetСвойство():</p>           
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">В принципі, ми вже розглянули їх застосування на прикладі Grid.SetColumn/Grid.SetRow і Grid.GetColumn.</p> 
                    </div>
                </div>







                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph"></p>           
                    </div>
                </div>
            </div>
        </div>    
    )
}

//<a className="link" target="blank" href=""></a> 
// <img src={first} alt="#" className="img"/>
// import first from "./Lesson11_img/first.png"
export default Lesson52