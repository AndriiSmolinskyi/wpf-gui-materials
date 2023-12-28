import "./Lesson.scss";
import first from "./Lesson418_img/first.png"
import second from "./Lesson418_img/second.png"

export const Lesson418 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">ProgressBar та Slider</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">ProgressBar та Slider представляють елементи, що базуються на діапазонах значень. Тобто вони зберігають та відображають числові дані на певному діапазоні.</p>
                        <p className="content__paragraph">Всі вони є спадкоємцями класу RangeBase , тому успадковують такі його властивості, як:</p> 
                        <p className="content__paragraph">- Value вказує на поточне значення елемента (представлено типом Double)</p> 
                        <p className="content__paragraph">- Maximum/Minimum вказує на максимальне/мінімальне значення елемента</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Slider</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Являє собою звичайний повзунок. Він додає такі властивості:</p>   
                        <p className="content__paragraph">- Orientation : вказує на орієнтацію повзунка - горизонтальну (Horizontal) або вертикальну (Vertical)</p>
                        <p className="content__paragraph">- Delay : вказує час у мілісекундах, після якого повзунок переміститься на одну одиницю після клацання.</p>
                        <p className="content__paragraph">- Interval : вказує час у мілісекундах, після якого повзунок може переміщатися</p>
                        <p className="content__paragraph">- TickPlacement : задає візуалізацію шкали повзунка. За замовчуванням значення None (відсутність шкали). Значення BottomRight створюють шкалу в нижній частині повзунка, TopLeft – у верхній, Both – по обидва боки.</p>
                        <p className="content__paragraph">- TickFrequency : вказує частоту появи позначок на шкалі повзунка.</p>
                        <p className="content__paragraph">- IsSelectionRangeEnabled : задає затінення ділянки повзунка. Якщо воно встановлено в True, то початкова та кінцева позначка затінювання задаються за допомогою властивостей SelectionStart та SelectionEnd .</p>
                        <p className="content__paragraph"></p>        
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Найпростіший слайдер:</p>   
                        <p className="content__paragraph">
                            {'<Slider Value="0" Minimum="0" Maximum="100" SelectionStart="0" Height="30" '}
                            <br />
                            {'        IsSelectionRangeEnabled="True" ValueChanged="Slider_ValueChanged" />'}
                        </p>
                        <p className="content__paragraph">У файлі коду ми можемо прописати обробник Slider_ValueChanged, який спрацьовуватиме при виникненні події ValueChanged - зміні значення слайдера. У цьому випадку обробник цієї події змінюватиме виділення слайдера:</p>           
                        <p className="content__paragraph">
                            {'private void Slider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)'}
                            <br />
                            {'{'}
                            <br />
                            {'    ((Slider)sender).SelectionEnd = e.NewValue;'}
                            <br />
                            {'}'}
                        </p>
                        <img src={first} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">ProgressBar</h3>
                    <div className="content__block">
                        <p className="content__paragraph">ProgressBar є індикатором, що відображає виконання певного процесу. Також має властивість Orientation , яка встановлює вертикальне або горизонтальне розташування індикатора. Для зв'язку з реальними процесами вся логіка зміни індикатора його властивості Value повинна відпрацьовуватися в коді.</p>           
                        <p className="content__paragraph">
                            {'<ProgressBar Minimum="0" Maximum="100" Value="50" Height="25" />'}
                        </p>
                        <img src={second} alt="#" className="img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson418