// Root.jsx
import React, {Component} from 'react';
import {render} from 'react-dom';
import Hello from './main.jsx'

// class Hello extends component{
// 	construtor()
// 	{
// 		// super(this.props);
// 	}
// 	render(){
// 		return (<div>Hello, {this.props.name}</div>);
// 	}

// }

// var Hello = React.createClass(
// {
// 	render: function(){
// 		return <h3>hello, {this.props.name}!</h3>;
// 	}
// })


render(<Hello name="world"/>, document.getElementById('root'));