import "./Lesson.scss";
import first from "./Lesson420_img/first.png"
import second from "./Lesson420_img/second.png"
import three from "./Lesson420_img/three.png"

export const Lesson420 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Робота із зображеннями. Image та InkCanvas</h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">Елемент Image</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Елемент Image призначений для роботи із зображеннями. Властивість Source дозволяє задати шлях до зображення, наприклад:</p>
                        <p className="content__paragraph">
                            {'<Image Source="myPhoto.jpg" />'}
                        </p>
                        <p className="content__paragraph">WPF підтримує різні формати зображень: .bmp, .png, .gif, .jpg і т.д.</p>
                    </div>
                </div>
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Також елемент дозволяє проводити деякі найпростіші трансформації із зображеннями. Наприклад, за допомогою об'єкта FormatConvertedBitmap та його властивості DestinationFormat можна отримати нове зображення:</p>           
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph">InkCanvas є полотном, на якому можна малювати. Спочатку воно призначалося для стілус, але в WPF є підтримка також і для миші для звичайних ПК. Його дуже просто використовувати:</p>   
                        <p className="content__paragraph">
                            {'<InkCanvas Background="LightCyan" />'}
                        </p>
                        <p className="content__paragraph">Або ми можемо вкласти в InkCanvas якесь зображення і на ньому вже малювати:</p>          
                        <p className="content__paragraph">
                            {'<InkCanvas>'}
                            <br />
                            {'    <Image Source="2.jpg"  Width="300" Height="250"  />'}
                            <br />
                            {'</InkCanvas>'}
                        </p>
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Все малювання в результаті представляється у вигляді штрихів - елементів класу System.Windows.Ink.Strokeта зберігається в колекції Strokes, визначеній у класі InkCanvas.</p>  
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Режим малювання</h3>
                    <div className="content__block">
                        <p className="content__paragraph">InkCanvas має кілька режимів, вони задаються за допомогою властивості EditingMode , значення для якого беруться з переліку InkCanvasEditingMode. . Ці значення бувають такими:</p> 
                        <p className="content__paragraph">Ink : використовується за умовчанням і передбачає малювання стілусом або мишею</p> 
                        <p className="content__paragraph">InkAndGesture : малювання за допомогою миші/стилусу, а також за допомогою жестів (Up, Down, Tap та ін.)</p> 
                        <p className="content__paragraph">GestureOnly : малювання лише за допомогою жестів користувача</p> 
                        <p className="content__paragraph">EraseByStroke : стирання всього штриха стілус</p> 
                        <p className="content__paragraph">EraseByPoint : стирання тільки частини штриха, до якої торкнувся стілус</p> 
                        <p className="content__paragraph">Select : виділення всіх штрихів під час торкання</p> 
                        <p className="content__paragraph">None : відсутність будь-якої дії</p> 
                        <p className="content__paragraph">Використовуючи ці значення та обробляючи події InkCanvas, такі як StrokeCollected (штрих намальований), StrokeErased (штрих стерлі) та ін., можна керувати набором штрихів та створювати більш функціональні програми на основі InkCanvas.</p>           
                    </div>
                </div>  
            </div>
        </div>    
    )
}

export default Lesson420