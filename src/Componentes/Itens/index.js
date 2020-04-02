import React, { Component } from 'react';
import axios from "axios";

class QtdeItens extends Component {

    constructor(props) {
        super(props);

        this.state = {
            idUsuario: props.idUsuario,
            item: props.item,
            qtde: 0
        }
    }    

    componentDidMount = () => {

        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.idUsuario}/${this.state.item}`)
            .then(result => {
                this.setState({ qtde: result.data.length });
            });

    }

    render() { 
        return (
            <td>{this.state.qtde}</td>
        );
    }
}
 
export default QtdeItens;