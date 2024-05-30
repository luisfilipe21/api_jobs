import { Header } from "../../components/Header";
import { FormRegisterAdmin } from "../../components/forms/FormRegisterAdmin";
import style from "./style.module.scss";
import seta from "../../assets/seta.svg";

export const RegisterPageAdmin = () => {
    return (
        <>
            <Header />
            <section className={`container ${style.divRelative}`}>
                <div className={style.divContainer}>
                    <div className={style.divBox}>
                        <h2 className="title-1B">Cadastre-se</h2>
                        <FormRegisterAdmin />
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