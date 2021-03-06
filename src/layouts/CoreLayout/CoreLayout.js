import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    const { children } = this.props;

    return(
      <div className='container text-center'>
        <Header/>
        <div className={classes.mainContainer}>
          {children}
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
