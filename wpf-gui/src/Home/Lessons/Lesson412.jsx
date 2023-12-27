import "./Lesson.scss";
import first from "./Lesson412_img/first.png"
import second from "./Lesson412_img/second.png"
import three from "./Lesson412_img/three.png"

export const Lesson412 = () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1">ListView</h1>
            <div className="main-block">
                <div className="content">
                    <div className="content__block">
                        <p className="content__paragraph">Цей елемент керування відображає інформацію на безлічі рядків та стовпців. Він успадкований від класу ListBox , тому може поводитися простий список:</p>
                        <img src={first} alt="#" className="img"/>
                        <p className="content__paragraph">Але щоб створити складніші за структурою дані використовується властивість View . Ця властивість приймає як значення об'єкт GridView, який керує відображенням даних. GridView визначає колекцію визначень стовпців - GridViewColumn , яке за допомогою властивості Header визначає назву стовпця, а за допомогою властивості DisplayMemberBinding можна визначити прив'язку стовпця до певної властивості об'єкта, що додається в ListView.</p> 
                        <p className="content__paragraph">
                            {'<GridViewColumn DisplayMemberBinding="{Binding Path=Company}">Компания</GridViewColumn>'}
                        </p>
                        <p className="content__paragraph">Допустимо у нас у проекті визначено клас Phone:</p> 
                        <p className="content__paragraph">
                            {'public class Phone'}
                            <br />
                            {'{'}
                            <br />
                            {'    public string Title { get; set; }'}
                            <br />
                            {'    public string Company { get; set; }'}
                            <br />
                            {'    public int Price { get; set; }'}
                            <br />
                            {'}'}
                        </p>
                        <p className="content__paragraph">Створимо в xaml-коді колекцію об'єктів Phone(в принципі це можна було б зробити і у файлі коду) і оголосимо прив'язку стовпців ListView до властивостей об'єктів Phone:</p>
                        <img src={second} alt="#" className="img"/>
                        <img src={three} alt="#" className="img"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Lesson412