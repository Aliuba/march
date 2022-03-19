import React, {Component} from 'react';
import User from "./User";

class App extends Component {
    myDiv = React.createRef();
    state = {inputValue: 0, user: false}
    click = () => {
        console.log(this.myDiv.current.innerText)
    }
    onFormSubmit = (e) => {
        e.preventDefault();


    }
    input = () => {
        this.setState({inputValue: this.myDiv.current.value, user:false})
    }
    onUser = () => {
        this.setState({user: true})
    }


    render() {
        let {inputValue, user} = this.state;
        let disabled;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>

                    <input ref={this.myDiv} onClick={this.click} type={"number"} onInput={this.input}
                           value={inputValue}/>
                    {((inputValue < 1) || (inputValue > 10)) ? (disabled = true) : disabled = false}
                    <button disabled={disabled} onClick={this.onUser}> send</button>

                </form>
                {user&& <User id={inputValue}/>}
            </div>
        );
    }
}

export default App;
