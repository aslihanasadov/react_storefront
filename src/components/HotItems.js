import React from 'react';
import { Link } from "react-router-dom"

const HotItems = props => {
    const{id, name, image_url, category_id} = props.item

    return (
        <>
            <div>
                <h3>
                <Link to={`/store/${name}/${id}`}>{name}</Link>
                </h3>
                <Link to={`/store/${name}/${id}`}>
                    <img src={image_url} alt={name} height="100" width="100" />
                </Link>
                <span>Category:
                    <Link to={`/store/${props.category}/${id}`}>{category_id}</Link>
                </span>
            </div>
        </>
    )
}

export default HotItems