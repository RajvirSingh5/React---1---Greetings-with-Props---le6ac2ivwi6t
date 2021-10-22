// write code for Welcome component here
import React from 'react';

 const Welcome = (props) => {
   //let name = props
  return(<div>
  <h1>Hey!{ props.name }</h1>
  <h2> Welcome to Newton School.</h2>
</div>);

}

Welcome.defaultProps = 'Rajvir';

export default Welcome;
