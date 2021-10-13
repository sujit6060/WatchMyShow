import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../Components/SingleContent/SingleContent'
import CustomPagination from '../../Components/Pagination/Pagination'

function Series() {

  const [page, setpage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPages, setnumOfPages] = useState()

  const FetchSeries = () => {
    axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=2e49c21a38f4f29524d67a27bf371648&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    ).then((data) => {
      setContent(data.data.results);
      setnumOfPages(data.data.total_pages);
    })
  }
  useEffect(() => {
    FetchSeries();
    // eslint-disable-next-line
  }, [page])

  return (
    <>
      <div>
        <span className="pageTitle"> TV Series </span>
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
              media_type="tv"
              vote_average={ele.vote_average}
            />
          ))}
      </div>
      <CustomPagination setpage={setpage} numOfPages={numOfPages} />
    </>
  )
}

export default Series
