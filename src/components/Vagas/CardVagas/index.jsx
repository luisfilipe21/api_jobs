import { useContext, useEffect, useState } from "react";
import style from "./style.module.scss";
import menos from "../../../assets/menos.svg"
import mais from "../../../assets/mais.svg"
import { JobContext } from "../../../providers/JobsProvider";

export const CardVagas = ({ data }) => {

    const {setModal, setModalData} = useContext(JobContext);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setModalData(data)
    },[])

    const openCard = () => {
        setOpen(!open);
    }

    const applyToJob = () => {
        setModal(true)
    }
    

    return (
        <li className="container">
            <div className={style.list}>
                <div onClick={openCard} className={style.open}>
                    {open ? <img src={mais} alt="" /> : <img src={menos} alt="" />}
                </div>
                <div>
                    <h3 className="title-3">
                        {data.position}
                    </h3>
                </div>
                <div>
                    <button onClick={applyToJob} 
                    className="btn btn-candidatar">
                        Candidatar-se
                    </button>
                </div>
            </div>

            {
                open ?
                    <div className={style.description}>
                        <p >{data.description}</p>
                    </div> : null
            }
        </li>


    )
}