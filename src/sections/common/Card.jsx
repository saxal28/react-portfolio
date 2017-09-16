import React from 'react';

export const Card = ({image, title, subtitle, children, color, onClick, noOverlay, label}) => {

    const style = {
        cursor: onClick ? "pointer" : "inherit",
    };

    const backgroundImageStyle = image ? { background:`url(${image})` } : ""
    const backgroundColorStyle = color ? { backgroundColor:`url(${image})` } : ""

    const styles = {...style, ...backgroundColorStyle, ...backgroundImageStyle}


    return (

        <div className="card" style={styles} onClick={onClick}>

            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
            {label && <div className="card-label">{label}</div>}

            {children}

        </div>

    )

}