import React, {useState} from 'react'
import Header from './components/Header'

import './App.css'
import background from '../assets/background.webp'

/**
 * Componente
 * Propriendade
 * Estado
 */

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

    //useState retorna um array com 2 posições
    //
    // 1. Variável com o seu valor inicial
    // 2. Função para atualizarmos esse valor


    function handleAddProject() {
      //  projects.push(`Novo projeto ${Date.now()}`)

      setProjects([...projects, `Novo projeto ${Date.now()}`])
    }

    return (
        <>
            <Header title="homepage" />
            
            <img src={background} alt=""/>
        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicinar projeto</button>
        </>
    )
}

export default App