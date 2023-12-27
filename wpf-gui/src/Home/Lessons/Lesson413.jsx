import "./Lesson.scss";
import first from "./Lesson413_img/first.png"
import second from "./Lesson413_img/second.png"

export const Lesson413 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">Створення вкладок та TabControl</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Для створення вкладок у WPF, як і WinForms, призначений елемент TabControl, а окрема вкладка представлена ​​елементом TabItem:</p>
                        <p className="content__paragraph">
                            {'<TabControl>'}
                            <br />
                            {'    <TabItem Header="Вкладка 1">Первая вкладка</TabItem>'}
                            <br />
                            {'    <TabItem Header="Вкладка 2">Вторая вкладка</TabItem>'}
                            <br />
                            {'</TabControl>'}
                        </p>
                        <p className="content__paragraph">Елемент TabItem є елементом керування вмістом, тому в нього можна вкласти інші елементи:</p>
                        <img src={first} alt="#" className="img"/>
                        <img src={second} alt="#" className="img"/>
                    </div>
                    <div className="content__block">
                        <p className="content__paragraph">Клас TabItem успадковується від класу HeaderedContentControl, тому крім властивості Content, що визначає вміст вкладки, має також властивість Header , яка визначає заголовок. І цей заголовок ми можемо вкласти різний вміст, як у прикладі вище.</p>  
                        <p className="content__paragraph">Також, як і у випадку з ListBoxItem і ComboBoxItem, ми можемо вкласти в TabControl та інші елементи, які неявно утворюють окремі вкладки:</p>           
                        <p className="content__paragraph">
                            {'<TabControl>'}
                            <br />
                            {'    <TextBlock>Первая вкладка</TextBlock>'}
                            <br />
                            {'    <TextBlock>Вторая вкладка</TextBlock>'}
                            <br />
                            {'    <TextBlock>Третья вкладка</TextBlock>'}
                            <br />
                            {'</TabControl>'}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3">Програмне додавання вкладок</h3>
                    <div className="content__block">
                        <p className="content__paragraph">Припустимо, у нас на формі є TabControl:</p> 
                        <p className="content__paragraph">
                            {'<TabControl x:Name="products"></TabControl>'}
                            <br />
                            {'<TabControl x:Name="products"><font></font></TabControl><font></font>'}
                        </p> 
                        <p className="content__paragraph">Через код C# додамо до нього вкладку:</p>  
                        <p className="content__paragraph">
                            {'// формуємо вміст вкладки у вигляді списку<font></font>'}
                            <br />
                            {'ListBox notesList = new ListBox();<font></font>'}
                            <br />
                            {'notesList.Items.Add("Macbook Pro");<font></font>'}
                            <br />
                            {'notesList.Items.Add("HP Pavilion 5478");<font></font>'}
                            <br />
                            {'notesList.Items.Add("Acer LK-08");<font></font>'}
                            <br />
                            {'// додавання вкладки<font></font>'}
                            <br />
                            {'products.Items.Add(new TabItem<font></font>'}
                            <br />
                            {'{<font></font>'}
                            <br />
                            {'    Header = new TextBlock { Text = "Ноутбуки" }, // встановлення заголовка вкладки<font></font>'}
                            <br />
                            {'    Content = notesList // встановлення вмісту вкладки<font></font>'}
                            <br />
                            {'});<font></font>'}
                        </p>        
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson413