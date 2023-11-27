import { AllMOVIES, MovieApi } from '../types/moviesType'
import axios from 'axios'
// import { useSelector } from 'react-redux'

// we will use middlewares for getting data fron API .. in react .. because async await is not work
// redux-thunk

// hiegher function order ... func return func
export const getAllMoviee = () => {
    return async (dispatch) => {
        const res = await axios.get(MovieApi)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })
        // i used dispatch() here to make the process wating step inside my method
        // so dispatch here as return
        // thunk with applayMidelwares in store..function return async..await axios..dispatch data here
    }
}

export const getMovieSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=389e393ab519dd49fdb3e2f9e77541db&query=${word}&language=ar`)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })        
    }
}


export const getPage = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page=${page}`)

        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}