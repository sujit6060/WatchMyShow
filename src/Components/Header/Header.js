import React from 'react'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';


function Header() {
    return (
        <div>
            <div onClick={()=>{window.scroll(0,0)}} className="header"><i className="fas fa-theater-masks"></i>. Watch MyShow .<i className="fas fa-theater-masks"></i></div>
        </div>
    )
}

export default Header
