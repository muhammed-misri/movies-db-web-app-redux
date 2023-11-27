import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import PaginationComponent from './PaginationComponent'; 
import { useDispatch, useSelector } from 'react-redux'
import { getAllMoviee } from '../redux/actions/movieAction'


const MoviesList = () => {

  // to save movies details
  const [movies, setMovies] = useState([])

  // to solve pages number
  // const [pageCount, setPageCount] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllMoviee())
  }, [])

  const dataMovies = useSelector((state) => state.movies)

  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies])


  
  return (
    <Row className="mt-3 ">
      {movies.length >=1 ? (movies.map( (movie)=>{
        return(
          <CardMovie key={movie.id} movie={movie}/>
        )
      })) : <h3 className='text-center p-5'> . . . لا يوجد أفلام </h3>}

      {movies.length >= 1 ? (<PaginationComponent/>) : null}
      
    </Row>
    
  )
}

export default MoviesList
