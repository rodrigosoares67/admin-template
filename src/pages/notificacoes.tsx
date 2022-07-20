import type { NextPage } from 'next'
import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

const Notificacoes: NextPage = () => {
  const { tema, alternarTema } = useAppData()

  return (
    <Layout titulo="Notificações" subtitulo="Aqui você irá gerenciar suas notificações">
      <h3>{tema}</h3>
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  )
}

export default Notificacoes