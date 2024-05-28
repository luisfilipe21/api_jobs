import style from "./style.module.scss"
import photo from "../../assets/fotoHome.png"

export const About = () => {

    
    return (
        <section>
            <div className={style.jobs}>
                <div className="container">
                    <h1 className={`title-1 ${style.titleJobs}`}>
                        Trabalho é na jobs
                    </h1>
                </div>
            </div>

            <div className="container">
                <div className={style.boxAbout}>
                    <div className={style.about}>
                        <h2 className="title-1B">
                            Sobre a jobs
                        </h2>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem quam minima nostrum quos, porro dolor? Error, beatae ex eos corporis in cupiditate sit tenetur quae? Eum porro amet cupiditate?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nesciunt consectetur, sapiente nobis, alias eligendi voluptatum unde numquam quaerat, quidem esse est excepturi! Repellendus placeat quia accusamus, sint minus iure?
                        </p>
                    </div>

                    <div className={style.img}>
                        <img src={photo} alt="foto" />
                    </div>
                </div>
            </div>
        </section>
    )
}