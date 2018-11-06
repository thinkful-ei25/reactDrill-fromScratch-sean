'use strict';
import React from 'react'; 
import Button from './Button'; 
import Image from './Image'; 


export default class Popup extends React.Component { 
  constructor(props){ 
    super(props); 

    this.state = { 
      isPopup : false
    }
  }




  render(){   
    if (!this.state.isPopup){ 
      return( 
        <Button click={()=> this.setState({isPopup: true})}/>
      ); 
    }
    return ( 
      <Image />
    ); 
  }
}