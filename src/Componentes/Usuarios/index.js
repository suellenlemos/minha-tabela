import React, { Component } from 'react';
import axios from "axios";
import QtdeItens from '../Itens';

class Usuarios extends Component {
    
    state = { 
        usuarios: []
    }
    
    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then(result => {
            this.setState({ usuarios: result.data });
          });

    }

    render() { 
        return ( 
            <tbody>                
                {this.state.usuarios.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <QtdeItens idUsuario={item.id} item="albums" />
                        <QtdeItens idUsuario={item.id} item="posts" />
                        <QtdeItens idUsuario={item.id} item="photos" />
                    </tr>                    
                ))}
            </tbody>
        );
    }

}
 
export default Usuarios;
