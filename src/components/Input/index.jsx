import { forwardRef } from "react";
import style from "./style.module.scss";

export const Inputs = forwardRef(({ errors, ...rest }, ref) => {
    return (
        <div className={style.inputDiv}>
            <input  ref={ref} {...rest} />
            {errors ? <p>{errors.message}</p> : null}
        </div>
    )
})