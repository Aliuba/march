import React, {Component} from 'react';

class User extends Component {
    state={user:null}
    componentDidMount() {
        let{id}=this.props
        fetch('https://jsonplaceholder.typicode.com/users'+'/'+id)
            .then(response => response.json())
            .then(json =>this.setState({user:json}))


    }

    render() {

        let{user}=this.state
        return (
            <div>
                {user&&<div>{user.id}--{user.name}</div>}
            </div>
        );
    }
}

export default User;
