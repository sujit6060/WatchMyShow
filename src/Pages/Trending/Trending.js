import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import CustomPagination from '../../Components/Pagination/Pagination'
import SingleContent from '../../Components/SingleContent/SingleContent'
import './Trending.css'


function Trending() {

    const [content, setContent] = useState([])
    const [page, setpage] = useState(1)
    const FetchTrending = () => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=2e49c21a38f4f29524d67a27bf371648&page=${page}`).then((data) => {
            setContent(data.data.results)
        })
    }

    useEffect(() => {
        FetchTrending();

        // eslint-disable-next-line
    }, [page])

    return (
        <>
            <div>
                <span className="pageTitle">Trending</span>
            </div>
            <div className="trending">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    ))}
            </div>
            <CustomPagination setpage={setpage} />
        </>
    )
}

export default Trending
