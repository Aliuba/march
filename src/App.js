import React, {Component} from 'react';
import User from "./User";

class App extends Component {

    state = {inputValue: 1, user: false}
    inputMain = React.createRef()
    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.inputMain.current.value)


    }
    onInputFill = () => {

        this.setState({inputValue: this.inputMain.current.value})
        this.setState({user: false})

    }
    onClick = () => {
        this.setState({user: true})

    }

    render() {
        let {inputValue, user} = this.state;

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input ref={this.inputMain} onInput={this.onInputFill} type={'number'} value={inputValue}/>
                    {((inputValue < 11) && (inputValue > 0)) && (<button onClick={this.onClick} >send</button>)                   }

 {user && <User id={inputValue} key={inputValue}/>  }
                </form>
            </div>
        );
    }
}

export default App;
