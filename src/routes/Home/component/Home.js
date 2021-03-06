import React from 'react'
import PropTypes from 'prop-types'
import styles from '../asset/home.scss'
import HomeButtons from './HomeButtons'
import { Button } from 'react-bootstrap'
import AppHelper from 'shared/AppHelper'

export const Home = props => {
  console.log('this is home props',props)
  return (
    <div className={ styles.ComponentAlign }>
      <h1> Home </h1>
      <p> { AppHelper.getRoute() }</p>
       <h2> { props.showHeader && props.headerText }</h2>
       <HomeButtons {...props} />
      <Button bsStyle="danger">Hellow world</Button>
    </div>
  )
}

Home.propTypes = {
  changeHomePage: PropTypes.func,
  showHeader: PropTypes.bool,
  headerText: PropTypes.string,
  showHeaderAtHome: PropTypes.func,
  clearHeaderAtHome: PropTypes.func
}


export default Home
