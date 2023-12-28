import "./Lesson.scss";

export const Lesson0= () => {

    return(
        <div className="lesson-block">
            <h1 className="title-h1"></h1>
            <div className="main-block">
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph"></p>
                        <a className="link" target="blank" href=""></a>
                    </div>
                </div>
                <div className="content">
                    <h3 className="content__title-h3"></h3>
                    <div className="content__block">
                        <p className="content__paragraph"></p>           
                    </div>
                </div>
            </div>
        </div>    
    )
}

//<a className="link" target="blank" href=""></a> 
// <img src={first} alt="#" className="img"/>
// import first from "./Lesson11_img/first.png"
export default Lesson0