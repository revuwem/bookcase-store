import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component{

    constructor(props){

        super(props);

        this.state={
            error: false
        }
    }

    componentDidCatch(){
        this.setState({
            error: true
        });
    }

    render(){
        return (!this.state.error) 
            ? this.props.children 
            : <ErrorIndicator />;
    }
}