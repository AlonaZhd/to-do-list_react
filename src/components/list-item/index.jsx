import React from "react";
import "./list-item.css";
import Button from "../button";

const ListItem = ({data}) => {

    return (
        <>
            {
                Array.isArray(data) && data.length > 0
                ? 
                data.map((data, i) => {
                    return (
                        <div className="list-item" key={i * 3 + "r"}>
                            <span className="list-item_text">{data}</span>
                            <div className="list-item_btn">
                                <Button name='edit' classe="btn-edit"></Button>
                                <Button name='delete' classe="btn-delete"></Button>
                            </div>
                        </div>
                    )
                })
                : 
                <div className="list-item list-item--empty">List empty...</div>
            }                       
        </>
    )
};

export default ListItem;
