import React from 'react';

export class ErrorBoundary extends React.Component {

    state = {
        isError: false
    }

    // componentDidCatch(error, errorInfo){
    //     this.setState({isError: true});
    // }
    static getDerivedStateFromError(error){
        return {isError:true}
    }

    render(){
        if(this.state.isError){
            return( <h1> Oops! Something went wrong...</h1> )
        }

        return this.props.children
    }
}

