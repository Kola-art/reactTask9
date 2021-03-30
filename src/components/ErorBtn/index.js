import React from 'react';


export class Test extends React.Component {

    constructor(props){
        super(props);
        this.state={
            error: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({error: true});
    }

    render(){
        if(this.state.error){
            throw new Error("Error");
        }
        return (
            <div>
            <h2> Error tester Button </h2>
            <button onClick={this.handleClick}> Cause Error</button>
            </div>
        )
    }
}