import { useContext, useState } from "react";
import style from "./style.module.scss";
import { useEffect } from "react";
import { JobContext } from "../../providers/JobsProvider";
import { CardVagas } from "./CardVagas";

export const Vagas = () => {

    const { job } = useContext(JobContext);


    return (
        <section>
            <div className="container">
                <div>
                    <h2 className="title-1B">Confira nossas vagas</h2>

                    <div>
                        <ul>
                            {job &&
                                job.map(data => {
                                    return (
                                        <CardVagas key={data.id} 
                                        data={data}/>

                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}