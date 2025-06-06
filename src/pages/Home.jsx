import { useState } from 'react'
import CartaoDeAventureiro from "../components/CartaoDeAventureiro";
import Inventario from "../components/Inventario";
import MensagemInicial from "../components/MensagemInicial";
import TituloPrincipal from '../components/TituloPrincipal';

export default function Home() {
  const [classe, setClasse] = useState('Aventureiro')
  const [nivel, setNivel] = useState(1)

  return (
    <div>
      <TituloPrincipal mensagem={' Chamado à Jornada do Dev'} />
      <MensagemInicial nome={'Everson'} />

      <div>
        <h2>Escolha sua Classe:</h2>
        <button onClick={() => setClasse('Guerreiro')}>Guerreiro</button>
        <button onClick={() => setClasse('Mago')}>Mago</button>
        <button onClick={() => setClasse('Curandeiro')}>Curandeiro</button>

        <button onClick={() => setNivel(prev => prev + 1)}>Subir de Nível</button>
      </div>

      <CartaoDeAventureiro nome={'João'} classe={classe} nivel={nivel} />

      <Inventario />
    </div>
  )
}