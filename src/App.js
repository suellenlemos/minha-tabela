import React from 'react';
import './App.css';
import Usuarios from './Componentes/Usuarios';

function App() {
    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Álbuns</th>
                        <th>Posts</th>
                        <th>Fotos</th>
                    </tr>
                </thead>
                <Usuarios />
            </table>
        </main>
        );
    }
    
    export default App;
