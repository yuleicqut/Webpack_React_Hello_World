//main.js 
'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class Hello extends component{
	render(){
		return <div>Hello, {this.props.name}</div>;
	}

}

react-dom(<Hello name="world"/>, mountNode);
