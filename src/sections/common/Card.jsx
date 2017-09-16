import React from 'react';

export const Card = ({image, title, subtitle, children, color, onClick, noOverlay}) => {

    const style = {
        cursor: onClick ? "pointer" : "inherit",
    };

    const backgroundImageStyle = image ? { background:`url(${image})` } : ""
    const backgroundColorStyle = color ? { backgroundColor:`url(${image})` } : ""

    return (

        <div className="card" style={style} onClick={onClick}>

            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}

            {children}

        </div>

    )

}