// Root.jsx
import React, {Component} from 'react';
import {render} from 'react-dom';
// import Hello from './main.jsx'

class Hello extends component{
	construtor()
	{
		// super(this.props);
	}
	render(){
		return (<div>Hello, {this.props.name}</div>);
	}

}


render(<Hello name="world"/>, document.getElementById('root'));