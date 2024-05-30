import { Header } from "../../components/Header";
import { FormRegister } from "../../components/forms/FormRegister";
import style from "./style.module.scss";
import seta from "../../assets/seta.svg";

export const RegisterPageUser = () => {
    
    return (
        <>
            <Header />
            <section className={`container ${style.divRelative}`}>
                <div className={style.divContainer}>
                    <div className={style.divBox}>
                        <h2 className="title-1B">Cadastre-se</h2>
                        <FormRegister />
                    </div>
                </div>
                <div className={style.divAbsolute}>
                    <img src={seta} alt="voltar" />
                    <p className="label-2">voltar</p>
                </div>
            </section>
        </>
    )
}