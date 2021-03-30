import React from 'react';

export class ErrorPage extends React.Component {

    state = {
        isError: false
    }

    
    static getDerivedStateFromError(error){
        return {isError:true}
    }

    render(){
        if(this.state.isError){
            return( <h1> Any data just hardcor just Front-End</h1> )
        }

        return this.props.children
    }
}
