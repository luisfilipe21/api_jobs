import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import X from "../../assets/x.svg";
import { FormRegisterPosition } from "../forms/FormRegisterPosition";
import { JobContext } from "../../providers/JobsProvider";
import { useContext } from "react";

export const Modal = () => {

    const { setModal, modalData } = useContext(JobContext);

    const navigate = useNavigate();

    const closeModal = () => {

    }

    return (
        <div className={style.modalContainer}>
            <div className={`${style.modal} container`}>
                <div className={style.divContainer}>
                    <span className={style.spanX} onClick={() => setModal(false)}> <img src={X} alt="" /></span>
                    <div className={style.divText}>
                        <h3 className="title-1B">Candidatar-se</h3>
                        <p className="paragraph">Você está se cadastrando para <span className="span">{modalData.position}</span> em <span className="span">Kenzie Academy Brasil</span></p>
                    </div>

                    <div className={style.divForm}>
                        <FormRegisterPosition />
                    </div>
                </div>
            </div>
        </div>
    )
}