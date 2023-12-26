import "./Lesson.scss";
import first from "./Lesson32_img/first.png"
import second from "./Lesson32_img/second.png"
import three from "./Lesson32_img/three.png"
import four from "./Lesson32_img/four.png"
import five from "./Lesson32_img/five.png"
import six from "./Lesson32_img/six.png"
import seven from "./Lesson32_img/seven.png"

export const Lesson32= () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Grid</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Це найбільш потужний контейнер, що часто використовується, що нагадує звичайну таблицю. Він містить стовпці та рядки, кількість яких задає розробник. Для визначення рядків використовується властивість RowDefinitions , а для визначення стовпців - властивість ColumnDefinitions :</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Кожен рядок задається за допомогою вкладеного елемента RowDefinition, який має тег, що відкриває і закриває. У цьому задавати додаткову інформацію необов'язково. Тобто у цьому випадку у нас визначено у гриді 3 рядки.</p> 
                        <p className="content__paragraph">Кожна колонка задається за допомогою вкладеного елемента ColumnDefinition. Таким чином, тут ми визначили 3 стовпці. ТО є в результаті у нас вийде таблиця 3х3.</p> 
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Щоб задати позицію елемента керування з прив'язкою до певної комірки Grid, в розмітці елемента потрібно прописати значення властивостей Grid.Column і Grid.Row , тим самим вказуючи, в якому стовпчику і рядку буде елемент. Крім того, якщо ми хочемо розтягнути елемент керування на кілька рядків або стовпців, то можна вказати властивості Grid.ColumnSpan та Grid.RowSpan , як у наступному прикладі:</p>           
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">Атрибут ShowGridLines="True"у елемента Grid задає видимість сітки, за умовчанням воно одно False.</p>  
                        <p className="content__paragraph">Тобто в нас вийде така картина:</p> 
                        <img src={three} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Встановлення розмірів</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Але якщо в попередньому випадку у нас рядки і стовпці дорівнювали один одному, то тепер спробуємо їх налаштувати стовпці по ширині, а рядки - по висоті. Є кілька варіантів налаштування розмірів.</p>           
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Автоматичні розміри</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Тут стовпець чи рядок посідає те місце, яке їм потрібне</p>   
                        <p className="content__paragraph">
                            {'<ColumnDefinition Width="Auto" />'}
                            <br />
                            {'<RowDefinition Height="Auto" />'}
                        </p>        
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Абсолютні розміри</h3>
                    <div className="content__block">
                        <p className="content__paragraph">В даному випадку висота та ширина вказуються в одиницях, незалежних від пристрою:</p>           
                        <p className="content__paragraph">
                            {'<ColumnDefinition Width="150" />'}
                            <br />
                            {'<RowDefinition Height="150" />'}
                        </p>
                        <p className="content__paragraph">Також абсолютні розміри можна встановити в пікселях, дюймах, сантиметрах або точках:</p>  
                        <p className="content__paragraph">пікселі - px; дюйми - in; сантиметри - cm; крапки - pt.</p> 
                        <p className="content__paragraph">Наприклад</p>
                        <p className="content__paragraph">
                            {'<ColumnDefinition Width="1 in" />'}
                            <br />
                            {'<RowDefinition Height="10 px" />'}
                        </p>

                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Пропорційні розміри.</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Наприклад, нижче задаються два стовпці, другий з яких має ширину за чверть від ширини першого:</p>           
                        <p className="content__paragraph">
                            {'<ColumnDefinition Width="*" />'}
                            <br />
                            {'<ColumnDefinition Width="0.25*" />'}
                        </p>
                        <p className="content__paragraph">Якщо рядок або стовпець має висоту, рівну *, то цей рядок або стовпчик буде займати все місце, що залишилося. Якщо у нас є декілька стік або стовпців, висота яких дорівнює *, то все доступне місце ділиться порівну між усіма такими термінами та стовпцями. Використання коефіцієнтів (0.25*) дозволяє зменшити або збільшити виділене місце на цей коефіцієнт. У цьому все коефіцієнти складаються (коефіцієнт * аналогічний 1*) і потім весь простір ділиться у сумі коефіцієнтів.</p>
                        <p className="content__paragraph">Наприклад, якщо у нас три стовпці:</p>  
                        <p className="content__paragraph">
                            {'<ColumnDefinition Width="*" />'}
                            <br />
                            {'<ColumnDefinition Width="0.5*" />'}
                            <br />
                            {'<ColumnDefinition Width="1.5*" />'}
                        </p>
                        <p className="content__paragraph">І тут сума коефіцієнтів дорівнює 1* + 0.5* + 1.5* = 3*. Якщо у нас грид має ширину 300 одиниць, то коефіцієнт 1* буде відповідати простору 300 / 3 = 100 одиниць. Тому перший стовпець матиме ширину 100 одиниць, другий - 100*0.5=50 одиниць, а третій - 100 * 1.5 = 150 одиниць.</p> 
                        <p className="content__paragraph">Можна поєднувати всі типи розмірів. У цьому випадку від ширини/висоти грида віднімається ширина/висота стовпців/рядків з абсолютними або автоматичними розмірами, а потім місце розподіляється між стовпцями/рядками з пропорційними розмірами:</p> 
                        <img src={five} alt="#" className="img"/> 
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">UniformGrid</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Аналогічний контейнеру Grid контейнер UniformGrid , тільки в цьому випадку всі стовпці та рядки однакового розміру і використовується спрощений синтаксис для їх визначення:</p>           
                        <img src={six} alt="#" className="img"/> 
                        <img src={seven} alt="#" className="img"/> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson32