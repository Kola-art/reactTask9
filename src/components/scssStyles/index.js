import React from "react";
import styles from './style.module.scss';

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: false
        };
        this.subError = this.subError.bind(this);
    }

    subError(){
        this.setState({error:true});
    }


    render(){
        if(this.state.error) {throw new Error('Only Front-end Bro :)')}
        return(
            <div className={styles.container}>
                    <h2> Form with scss styles</h2>  
                <form  onSubmit={this.subError} className={styles.column}>
                    <input type="text" />
                    <textarea />
                    <button  type="submit">Submit</button>
                </form>
            </div>
        );
    }
}