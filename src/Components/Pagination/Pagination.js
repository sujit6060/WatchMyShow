import Pagination from '@mui/material/Pagination';
import React from 'react'

function CustomPagination({setpage,numOfPages = 10}) {

    const handler =(page) =>{
         setpage(page);
        window.scroll(0,0);
    };

    return (
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:10,
            backgroundColor:"white",
           
        }}>
            <Pagination count={numOfPages} onChange={(e)=>handler(e.target.textContent)}
            
            hideNextButton
            hidePrevButton
            color="primary"
            />
        </div>
    )
    
}

export default CustomPagination
