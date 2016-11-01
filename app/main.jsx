//main.js 
// 'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class Hello extends Component{
	construtor(){
		// super(this.props);
	}
	render(){
		return (<h3>Hello, {this.props.name}</h3>);
	}

}


// var Hello = React.createClass(
// {
// 	render: function(){
// 		return <h3>hello, {this.props.name}!</h3>;
// 	}
// })

// render(<Hello name="world"/>, document.getElementById('root'));
export default Hello;
 // render(<div> hello, world</div>, document.getElementById('root'));

