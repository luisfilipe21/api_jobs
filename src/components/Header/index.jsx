import { Link, useNavigate } from "react-router-dom"
import { IoIosSearch } from "react-icons/io";
import style from "./style.module.scss";
import jobs from "../../assets/jobs.svg";

export const Header = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return (
        <header>
            <div className="container">
                <div className={style.boxContainer}>
                    <div className={style.home}>
                        <img src={jobs} onClick={goHome}/>
                    </div>

                    <div className={style.boxLinks}>
                        <Link to={"/"} className="boldParagraph">acesso empresa</Link>
                        <Link to={"/"} className={`${style.btnVagas} btn`}>Confira nossas vagas</Link>
                        <Link to={"/"}><IoIosSearch className={style.icon}
                        color={`var(--blue)`}/> </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}