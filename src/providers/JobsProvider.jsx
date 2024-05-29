import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const JobContext = createContext({});

export const JobProvider = ({ children }) => {

    const [job, setJob] = useState();
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({});



        useEffect(() => {
            const getJobs = async () => {
                try {
                    const { data } = await api.get("/jobs")
                    setJob(data)
                } catch (error) {
                    console.log(error)
                }
            }

            getJobs();
        }, [])



    return (
        <JobContext.Provider value={({ job, setJob, modal, setModal, modalData, setModalData })}>
            {children}
        </JobContext.Provider>
    )
}