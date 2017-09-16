import React from 'react';

export const Card = ({image, title, subtitle, children, color, onClick, overlayColor, label, imageTitle}) => {

    const style = {
        cursor: onClick ? "pointer" : "inherit",
    };

    const backgroundImageStyle = image ? {
        background:`url(${image})`,
    } : ""

    const overlayStyle = overlayColor ? {
        backgroundColor: overlayColor,
        backgroundBlendMode: "multiply",
    } : {}

    const backgroundColorStyle = color ? { backgroundColor:`url(${image})` } : ""

    const styles = {...style, ...backgroundColorStyle, ...backgroundImageStyle, ...overlayStyle}


    return (

        <div className="card" style={styles} onClick={onClick}>

            {title && <h2>{title}</h2>}
            {imageTitle && <h2 className="image-title">{imageTitle}</h2>}
            {subtitle && <p>{subtitle}</p>}
            {label && <div className="card-label">{label}</div>}

            {children}

        </div>

    )

}