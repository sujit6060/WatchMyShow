import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../Components/SingleContent/SingleContent'
import CustomPagination from '../../Components/Pagination/Pagination'


function Search() {

    const [page, setpage] = useState(1)
    const [content, setContent] = useState()
    const [numOfPages, setnumOfPages] = useState()
    const [searchText, setSearch] = useState("")

    const FetchSearch = () => {
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=2e49c21a38f4f29524d67a27bf371648&language=en-US&query=${searchText}&page=${page}`
        ).then((data) => {
            setContent(data.data.results);
            setnumOfPages(data.data.total_pages);
        })
    }
    useEffect(() => {
        window.scroll(0, 0);
        FetchSearch();
        // eslint-disable-next-line
    }, [page])
    return (
        <>

            <div>
                <span className="pageTitle"> Search </span>
            </div>
            <div style={{ display: "flex", margin: "15px 0px" }}>
                <TextField
                    style={{ flex: 1, color: "white", backgroundColor: "white" }}
                    className="searchBox" label="Search Here.."
                    variant="filled"
                    onChange={(event) => setSearch(event.target.value)}

                />
                <Button variant="outlined" color="error" style={{ marginLeft: 10 }} onClick={FetchSearch}><SearchIcon /></Button>
            </div>
            <div className="trending">
                {content &&
                    content.map((ele) => (
                        <SingleContent
                            key={ele.id}
                            id={ele.id}
                            poster={ele.poster_path}
                            title={ele.title || ele.name}
                            date={ele.first_air_date || ele.release_date}
                            media_type={ele.media_type}
                            vote_average={ele.vote_average}
                        />
                    ))}
            </div>

            {numOfPages > 1 && (
                <CustomPagination setpage={setpage} numOfPages={numOfPages} />)}
        </>
    )
}

export default Search
