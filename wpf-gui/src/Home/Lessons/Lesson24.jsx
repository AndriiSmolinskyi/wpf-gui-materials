import "./Lesson.scss";
import first from "./Lesson24_img/first.png"
import second from "./Lesson24_img/second.png"
import three from "./Lesson24_img/three.png"
import four from "./Lesson24_img/four.png"

export const Lesson24 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Простір імен з C# в XAML</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">За замовчуванням у WPF XAML підключається встановлений набір просторів імен xml. Але ми можемо задіяти будь-які інші простори імен та їх функціональність у тому числі стандартні простори імен платформи .NET, наприклад, System або System.Collections. Наприклад, за умовчанням у визначенні елемента Window підключається локальний простір імен:</p>
                        <p className="content__paragraph">xmlns:local="clr-namespace:XamlApp"</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Локальний простір імен, як правило, називається на ім'я проекту (у моєму випадку проект називається XamlApp) і дозволяє підключити всі класи, які визначені в коді C# в нашому проекті. Наприклад, додамо до проекту наступний клас:</p>           
                        <img src={first} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Використовуємо цей клас у коді xaml:</p>  
                        <img src={second} alt="#" className="img"/>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Оскільки простір імен проекту проектується префікс local , всі класи проекту використовують у формі local:Название_Класса. Так у цьому випадку об'єкт Phone встановлюється як вміст кнопки через властивість Content. Для складних об'єктів ця властивість приймає їх рядкове уявлення, яке повертається методом ToString():</p> 
                        <img src={three} alt="#" className="img"/>           
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Ми можемо підключити будь-які інші простори імен, класи яких ми хочемо використовувати у додатку. Наприклад:</p>           
                        <img src={four} alt="#" className="img"/>  
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Тут визначено два додаткові простори імен:</p> 
                        <p className="content__paragraph">xmlns:col="clr-namespace:System.Collections;assembly=mscorlib" <br />xmlns:sys="clr-namespace:System;assembly=mscorlib"</p>
                        <p className="content__paragraph">Завдяки цьому нам стають доступними об'єкти із просторів імен System.Collections та System. І потім використовуючи префікс, ми можемо використовувати об'єкти, що входять до даних простору імен:{'<col:ArrayList....'}</p>
                        <p className="content__paragraph">Загальний синтаксис підключення просторів імен: xmlns:Префикс="clr-namespace:Пространство_имен;assembly=имя_сборки". Так у попередньому випадку ми підключили простір імен System.Collections, класи якого перебувають у збиранні mscorlib. І цей підключений простір імен у нас відображено на префікс col.</p>       
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson24