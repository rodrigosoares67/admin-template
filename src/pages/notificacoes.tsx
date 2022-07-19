import type { NextPage } from 'next'
import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

const Notificacoes: NextPage = () => {
  const ctx = useAppData()

  return (
    <Layout titulo="Notificações" subtitulo="Aqui você irá gerenciar suas notificações">
      <button onClick={ctx.alternarTema}>Alternar Tema</button>
    </Layout>
  )
}

export default Notificacoes