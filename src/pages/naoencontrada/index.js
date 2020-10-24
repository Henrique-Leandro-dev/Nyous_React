import React from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'

const NaoEncontrada = () => {
    return(
        <div>
            <Menu />
            <h1 style={{color : 'red'}}> ERROR 404 Página não encontrada!</h1>
            <Rodape/>
        </div>
    )

}

export default NaoEncontrada;