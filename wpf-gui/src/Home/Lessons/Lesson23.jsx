import "./Lesson.scss";
import first from "./Lesson23_img/first.png"
import second from "./Lesson23_img/second.png"


export const Lesson23= () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Складні властивості та конвертери типів</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph">У попередніх темах було розглянуто створення елементів у XAML. Наприклад, ми могли б визначити кнопку так:</p>
                        <p className="content__paragraph">
                            {'<Button x:Name="myButton" Width="120" Height="40" Content="Кнопка" HorizontalAlignment="Center" Background="Red" />'}
                        </p>
                        <p className="content__paragraph">За допомогою атрибутів ми можемо встановити різні властивості кнопки. Height та Width є простими властивостями. Вони зберігають числове значення. А наприклад, властивості HorizontalAlignmentабо Backgroundє складнішими за своєю структурою. Так, якщо ми будемо визначати цю кнопку в коді c#, то нам треба використовувати наступний набір інструкцій:</p>  
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Щоб вирівняти кнопку по центру, застосовується перелік HorizontalAlignment, а встановлення фонового кольору - клас SolidColorBrush. Хоча в коді XAML ми нічого такого не побачили та встановлювали ці властивості набагато простіше за допомогою рядків: Background="Red". Справа в тому, що до коду XAML застосовуються спеціальні об'єкти - type converter або конвертери типів, які можуть перетворити значення з XAML до тих типів тих об'єктів, які використовуються в коді C#.</p>  
                        <p className="content__paragraph">WPF має вбудовані конвертери для більшості типів даних: Brush, Color, FontWeight і т.д. Всі конвертери типів є похідними від класу TypeConverter . Наприклад, для перетворення значення Background="Red"в об'єкт SolidColorBrush використовується похідний клас BrushConverter . За необхідності можна створити конвертери для якихось власних типів даних.</p>  
                        <p className="content__paragraph">Фактично встановлення значення XAML Background="Red"зводилася б до наступного виклику в коді c#:</p>  
                        <p className="content__paragraph">
                            {'myButton.Background = (Brush)System.ComponentModel.TypeDescriptor'}
                            <br />
                            {'    .GetConverter(typeof(Brush)).ConvertFromInvariantString("Red");'}
                        </p>
                        <p className="content__paragraph">У цьому випадку програма намагається отримати конвертер типу Brush (базового класу для SolidColorBrush) і потім перетворити рядок " Red " на конкретний колір. Для отримання потрібного конвертера, програма звертається до метаданих класу Brush. Зокрема, він має такий атрибут:</p> 
                        <p className="content__paragraph">[TypeConverter(typeof(BrushConverter))] <br />public abstract class Brush</p>       
                        <p className="content__paragraph">Цей атрибут дозволяє системі визначити, який тип конвертера використовувати.</p>   
                        <p className="content__paragraph">У той же час ми можемо явніше використовувати ці об'єкти в коді XAML:</p>   
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Перевагою такого підходу і те, що з об'єктів ми можемо встановити додаткові параметри.</p> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson23