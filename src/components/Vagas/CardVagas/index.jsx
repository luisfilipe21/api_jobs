import style from "./style.module.scss";

export const CardVagas = ({ data }) => {
    return (
        <li>
            <div className={style.list}>
                <div>
                    -
                </div>
                <div>
                    <h3 className="boldParagraph">
                        {data.position}
                    </h3>
                </div>
                <div>
                    <button className="btn btn-candidatar">
                        Candidatar-se
                    </button>
                </div>

            </div>
            <div>
                <p >{data.description}</p>
            </div>
        </li>


    )
}