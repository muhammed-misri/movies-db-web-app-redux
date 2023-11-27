import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { getAllMoviee, getMovieSearch } from '../redux/actions/movieAction'

const NavBar = () => {

  const onSearch = (word) => {
    search(word)
  }
  const dispatch = useDispatch();

  // to search in api
  // https://api.themoviedb.org/3/search/movie?api_key=389e393ab519dd49fdb3e2f9e77541db&query=%D8%A7%D8%AD%D9%85%D8%AF&language=ar
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMoviee())
    } else {
      dispatch(getMovieSearch(word))
    }
  }

  
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src='logo.png' alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;