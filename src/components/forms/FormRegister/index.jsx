import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../Input";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";

export const FormRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver()
    });

    const submit = (formData) => {
        console.log(formData);
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={style.divInput}>
                <Inputs {...register("nome")} placeholder={"Nome"} />
                <Inputs {...register("email")} placeholder={"E-mail"} />
                <Inputs {...register("senha")} placeholder={"Senha"} />
                <Inputs {...register("confirmaSenha")} placeholder={"Confirmar senha"} />
            </div>
            <button className="btn">Cadastrar-se</button>
        </form>
    )
}