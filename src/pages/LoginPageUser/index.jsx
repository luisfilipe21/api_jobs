import { Header } from "../../components/Header"
import { FormLogin } from "../../components/forms/FormLogin"
import capa from "../../assets/login.png"
import style from "./style.module.scss"
import { Link } from "react-router-dom"

export const LoginPageUser = () => {
    return (
        <>
            <Header />
            <section className="container">
                <div className={style.divContainer}>
                    <div className={style.divImg}>
                        <img src={capa} alt="" />
                    </div>
                    <div className={style.divForm}>
                        <h2 className="title-1B">Faça login</h2>
                        <FormLogin />
                        <p className="label">Não possui cadastro? <Link to={("/")}>Cadastre-se</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}