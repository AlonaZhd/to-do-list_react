import React from "react";
import "./list-body.css";
import Delete from "../delete/delete";
import Edit from "../edit";

const ListBody = (props) => {
    console.log(props)

    return (
        props.data.map((e, i) => {
                return (                       
                    <div className="list-body" key={i * 3 + "r"}>
                        <span className="list-body_text">{e.id}. {e.title}</span>
                        <div className="list-body_btn">
                            <Edit></Edit>
                            <Delete></Delete>
                        </div>
                        
                    </div>
                )
            })
    );
};

export default ListBody;
