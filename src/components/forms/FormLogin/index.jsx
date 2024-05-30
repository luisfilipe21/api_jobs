import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../Input";
import {useForm} from "react-hook-form";
import style from "./style.module.scss";


export const FormLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver()
    });

    const submit = (fomrData) => {
        console.log(fomrData)
    }

    return (
        <form onSubmit={handleSubmit(submit)} >
            <div className={style.divInput}>
                <Inputs {...register("email")}
                placeholder={"E-mail"} 
                type="email"
                errors={errors.email} />
                <Inputs {...register("password")} 
                placeholder={"Senha"} 
                type="password"
                errors={errors.senha} />
            </div>
            <button className="btn">Entrar</button>
        </form>
    )
}