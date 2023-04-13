import React from 'react'

export default function Alert(props) {

    const capitalize = (text)=>{
        return text[0].toUpperCase() + text.slice(1);
    }

    return (
        // Below line says if props.alert is exixst then only go to second statement
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
