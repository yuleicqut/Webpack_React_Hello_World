//main.js 
// 'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class Hello extends component{
	render(){
		return (<div>Hello, {this.props.name}</div>);
	}

}
// render(<Hello name="world"/>, document.getElementById('root'));
export default Hello;
 // render(<div> hello, world</div>, document.getElementById('root'));

