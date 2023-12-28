import "./Lesson.scss";
import first from "./Lesson417_img/first.png"
import second from "./Lesson417_img/second.png"
import three from "./Lesson417_img/three.png"
import four from "./Lesson417_img/four.png"
import five from "./Lesson417_img/five.png"
import six from "./Lesson417_img/six.png"
import seven from "./Lesson417_img/seven.png"
import eight from "./Lesson417_img/eight.png"

export const Lesson417 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">DataGrid</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">DataGrid багато в чому схожий на ListView, але складніший за характером і допускає редагування вмісту таблиці.</p>
                        <p className="content__paragraph">У розділі ListView ми створили клас Phone, об'єкти якого виводили в список:</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Тепер виведемо об'єкти в таблицю DataGrid. Щоб DataGrid автоматично розбивав таблицю на стовпці, встановимо властивість AutoGenerateColumns="True":</p>
                        <img src={second} alt="#" className="img"/>
                        <p className="content__paragraph">У цьому випадку префікс localпосилається на простір імен поточного проекту, в якому визначено клас Phone (xmlns:local="clr-namespace:Controls"), а - colпрефікс-посилання на простір імен System.Collections (xmlns:col="clr-namespace :System.Collections;assembly=mscorlib"). І це дасть у результаті такий висновок:</p>
                        <img src={three} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Програмне встановлення джерела для DataGrid:</p>  
                        <img src={four} alt="#" className="img"/>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Деякі корисні властивості DataGrid</h3>
                    <div className="content__block">
                        <p className="content__paragraph">
                            {'RowBackground та AlternatingRowBackground'}
                            <br />
                            {'Встановлюють рядок фону. Якщо встановлено обидві властивості, колірне тло чергується: RowBackground - для непарних рядків і AlternatingRowBackground - для парних'}
                        </p>
                        <p className="content__paragraph">
                            {'ColumnHeaderHeight'}
                            <br />
                            {'Встановлює висоту рядка назв стовпців.'}
                        </p>
                        <p className="content__paragraph">
                            {'ColumnWidth'}
                            <br />
                            {'Встановлює ширину шпальт.'}
                        </p>
                        <p className="content__paragraph">
                            {'RowHeight'}
                            <br />
                            {'Встановлює висоту рядків.'}
                        </p>
                        <p className="content__paragraph">
                            {'GridLinesVisibility'}
                            <br />
                            {'Встановлює видимість ліній, що розділяють стовпці та рядки. Має чотири значення - All- видно всі лінії, Horizontal- видно лише горизонтальні лінії, Vertical- видно лише вертикальні лінії, None- лінії відсутні'}
                        </p>
                        <p className="content__paragraph">
                            {'HeadersVisibility'}
                            <br />
                            {'Задає видимість заголовків'}
                        </p>
                        <p className="content__paragraph">
                            {'HorizontalGridLinesBrush та VerticalGridLinesBrush'}
                            <br />
                            {'Задає колір горизонтальних та вертикальних ліній відповідно'}
                        </p>   
                        <p className="content__paragraph">Хоча попередній приклад досить простий, у ньому є кілька недоліків. По-перше, у нас немає можливості вплинути на розміщення стовпців. По-друге, заголовки визначені за назвами властивостей, які англійською мовою, а хотілося б російською. В цьому випадку ми повинні визначити властивості відображення стовпців самі. Для цього потрібно скористатися властивістю DataGrid.Columns та визначити колекцію стовпців для відображення у таблиці.</p>  
                        <p className="content__paragraph">Причому можна задати також інший тип стовпця, відмінний від текстового. DataGrid підтримує такі варіанти стовпців:</p>       
                        <p className="content__paragraph">
                            {'DataGridTextColumn'}
                            <br />
                            {'Відображає елемент TextBlock або TextBox під час редагування'}
                        </p>
                        <p className="content__paragraph">
                            {'DataGridHyperlinkColumn'}
                            <br />
                            {'Представляє гіперпосилання та дозволяє переходити за вказаною адресою'}
                        </p>
                        <p className="content__paragraph">
                            {'DataGridCheckBoxColumn'}
                            <br />
                            {'Відображає елемент CheckBox'}
                        </p>
                        <p className="content__paragraph">
                            {'DataGridComboBoxColumn'}
                            <br />
                            {'Відображає список, що випадає - елемент ComboBox'}
                        </p>
                        <p className="content__paragraph">
                            {'DataGridTemplateColumn'}
                            <br />
                            {'Дозволяє задати специфічний шаблон для відображення стовпця'}
                        </p>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Перепишемо попередній приклад з урахуванням нової інформації:</p> 
                        <img src={five} alt="#" className="img"/>
                        <img src={six} alt="#" className="img"/>          
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Серед властивостей DataGrid однією з найцікавіших є RowDetailsTemplate . Воно дозволяє встановити шаблон відображення додаткової інформації щодо даного рядка. Зміни елементу DataGrid:</p>           
                        <img src={seven} alt="#" className="img"/>
                        <img src={eight} alt="#" className="img"/> 
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson417 