import "./Lesson.scss";
import first from "./Lesson410_img/first.png"
import second from "./Lesson410_img/second.png"
import three from "./Lesson410_img/three.png"
import four from "./Lesson410_img/four.png"

export const Lesson410 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1"></h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3">ListBox</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Є звичайним списком. Містить колекцію елементів ListBoxItem, які є типовими елементами керування вмістом. Також ListBox може містити будь-які інші елементи, наприклад:</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Всі ці елементи будуть знаходитися в колекції phonesList.Itemsі, таким чином, за лічильником можна до них звертатися, наприклад, phonesList.Items[0]перший елемент ListBox, який в даному випадку представляє TextBlock. Також ми можемо встановити елемент: phonesList.Items[2]="LG G 4";</p>
                        <p className="content__paragraph">Компонент ListBoxItem представляє елемент керування вмістом, тому ми можемо задавати через його властивість Content більш складні композиції елементів, наприклад:</p>             
                        <img src={three} alt="#" className="img"/>
                        <img src={four} alt="#" className="img"/>
                        <p className="content__paragraph">Ми можемо використовувати елементи як всередині ListBoxItem, так і безпосередньо вставляючи їх в список. Однак на наступному прикладі видно, що використання ListBoxItem має невелику перевагу, тому що ми можемо задати деякі додаткові властивості, наприклад відступи.</p> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Виділення елементів</h3>
                    <div className="content__block">
                        <p className="content__paragraph">ListBox підтримує множинний вибір. Для цього необхідно встановити властивість SelectionMode="Multiple"або SelectionMode="Extended". У разі, щоб виділити кілька елементів, потрібно тримати натиснутою клавішу Ctrl чи Shift. За умовчанням SelectionMode="Single", тобто допускається лише єдине виділення.</p>           
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson410