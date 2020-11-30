import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ isButton = true, type="button", title, action, href, moreStyle }) => {
    const style = `font-bold rounded-md px-3 py-2 text-base cursor-pointer animate focus:outline-none ${moreStyle}`
    return ( 
        <React.Fragment>
            {
                isButton ? <button type={type} className={style} > {title} </button> : <Link to={href} className={style} > {title} </Link>
            }
        </React.Fragment>
     );
}
 
export default Button;