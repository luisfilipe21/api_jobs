import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../Input";

export const FormRegisterPosition = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver()
    });

    const submit = async (formData) => {
       console.log(formData);
    };
    

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={style.divInput}>
                <Inputs
                    {...register("name")}
                    placeholder="Nome"
                    errors={errors.name}
                    type="text" />
                <Inputs
                    {...register("email")}
                    placeholder="E-mail"
                    errors={errors.email}
                    type="email" />
                <Inputs
                    {...register("linkedIn")}
                    placeholder="LinkedIn"
                    errors={errors.linkedIn}
                    type="text" />
            </div>
            <button className="btn"
                onClick={submit}>
                Candidatar-se
            </button>
        </form>
    )
}