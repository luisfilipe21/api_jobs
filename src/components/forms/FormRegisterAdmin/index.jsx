import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../Input";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";

export const FormRegisterAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver()
    });

    const submit = (formData) => {
        console.log(formData);
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={style.divInput}>
                <Inputs 
                {...register("nomeEmpresa")} 
                placeholder={"Nome da empresa"} 
                errors={errors.message}
                />
                 
                <Inputs 
                {...register("email")} 
                placeholder={"E-mail"} 
                errors={errors.message}
                />

                 <Inputs 
                {...register("senha")} 
                placeholder={"Senha"} 
                errors={errors.message}
                />
                             
                <Inputs 
                {...register("confirmaSenha")} 
                placeholder={"Confirmar senha"} 
                errors={errors.message}
                />

             </div>
            <button className="btn">Cadastrar-se</button>
        </form>
    )
}