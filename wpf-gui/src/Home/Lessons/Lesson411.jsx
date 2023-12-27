import "./Lesson.scss";
import first from "./Lesson411_img/first.png"
import second from "./Lesson411_img/second.png"
import three from "./Lesson411_img/three.png"
import four from "./Lesson411_img/four.png"
import five from "./Lesson411_img/five.png"
import six from "./Lesson411_img/six.png"
import seven from "./Lesson411_img/seven.png"
import eight from "./Lesson411_img/eight.png"
import nine from "./Lesson411_img/nine.png"
import ten from "./Lesson411_img/ten.png"
import eleven from "./Lesson411_img/eleven.png"
import twelve from "./Lesson411_img/twelve.png"
import thirteen from "./Lesson411_img/thirteen.png"


export const Lesson411 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">ComboBox</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Клас ComboBox представляє список, що випадає. Наприклад, визначимо елемент ComboBox у xaml:</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Тут як елементи списку, що випадає, використовуються рядки. І після запуску програми ми зможемо вибрати один із чотирьох елементів:</p> 
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Насправді як елементи можуть виступати будь-які об'єкти, наприклад, елементи TextBlock:</p>           
                        <img src={three} alt="#" className="img"/>
                        <p className="content__paragraph">Результат буде той самий, що й у попередньому випадку.</p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Однак також у WPF надає для ComboBoxe спеціальний тип - ComboBoxItem . ComboBoxItem представляє елемент керування вмістом, який через властивість Content ми можемо помістити інші елементи. Наприклад:</p>           
                        <img src={four} alt="#" className="img"/>
                        <img src={five} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Варто відзначити, що в приклади вище для демонстрації застосовується розмітка, що повторюється. У реальному ж додатку для створення подібних розміток застосовуються шаблон даних і механізм прив'язки, які розглядаються в наступних розділах.</p>   
                        <p className="content__paragraph">Як і інші елементи керування списками, ComboBox можна відображати об'єкти користувачів цих класів. Наприклад, визначимо порожній ComboBox:</p>         
                        <img src={six} alt="#" className="img"/>
                        <p className="content__paragraph">У файлі пов'язаного коду C# визначимо клас Person, який представляє дані, та додамо до списку кілька об'єктів цього класу:</p> 
                        <img src={seven} alt="#" className="img"/>
                        <img src={eight} alt="#" className="img"/>
                        <p className="content__paragraph">За замовчуванням ComboBox виводить рядкову виставу об'єкта. Якщо необхідно відображати значення певної властивості, застосовується властивість DisplayMemberPath, наприклад, виведемо значення властивості Name:</p>  
                        <p className="content__paragraph">
                            {'usersList.Items.Refresh();'}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Подія SelectionChanged та обробка вибору об'єкта</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Обробляючи подію SelectionChanged ми можемо динамічно отримувати виділений елемент. Для керування обраними об'єктами клас ComboBox надає такі властивості:</p>  
                        <p className="content__paragraph">SelectedItem : вибраний об'єкт списку</p>
                        <p className="content__paragraph">SelectedValue : вибране значення</p>
                        <p className="content__paragraph">SelectedIndex : індекс вибраного об'єкта у списку</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Визначимо в xaml наступний інтерфейс:</p> 
                        <img src={nine} alt="#" className="img"/> 
                        <p className="content__paragraph">Тут для події SelectionChangedвстановлено обробник "peopleComboBox_SelectionChanged", а для виведення обраного об'єкта визначено елемент TextBlock.</p>         
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">У коді C# визначимо обробник події:</p>  
                        <img src={ten} alt="#" className="img"/> 
                        <p className="content__paragraph">Оскільки елементами списку є об'єкти Person, то вибраний об'єкт ми можемо привести до типу Person</p>          
                        <p className="content__paragraph">
                            {'if (peopleComboBox.SelectedItem is Person person)'}
                        </p>
                        <p className="content__paragraph">І вивести в текстову позначку значення властивості Name:</p> 
                        <img src={eleven} alt="#" className="img"/> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Також ми могли б використовувати властивість SelectedValue , яка представляє обране значення. Для його використання визначимо наступний код xaml:</p>           
                        <img src={twelve} alt="#" className="img"/> 
                        <p className="content__paragraph">Зверніть увагу на властивість SelectedValuePath="Name"- тут ми вказуємо, що властивість "Name" виступатиме як властивість значення.</p> 
                        <p className="content__paragraph">Для обробки події вибору елемента визначимо наступний код C#:</p> 
                        <img src={thirteen} alt="#" className="img"/> 
                        <p className="content__paragraph">Тут перевіряємо, чи не дорівнює peopleComboBox.SelectedValuenull (хоча в прикладі вище це немає сенсу, оскільки ця властивість представляє рядок), і виводимо значення цієї властивості в текстовий блок. Результат буде аналогічним до попереднього.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Властивості</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Встановлення властивості IsEditable="True"дозволяє вводити в поле списку початкові символи, а потім функція автозаповнення підставить потрібний результат. За замовчуванням властивість має значення False.</p>
                        <p className="content__paragraph">Ця властивість працює в комбінації з властивістю IsReadOnly: вона вказує, чи є поле введення доступним тільки для читання. За замовчуванням має значення False, тому якщо IsEditable="True"ми можемо вводити туди довільний текст.</p>  
                        <p className="content__paragraph">Ще одна властивість StaysOpenOnEditпри встановленні Trueдозволяє зробити список розкритим на час введення значень в полі введення.</p>            
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson411