import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-green-500 to-blue-500
    `}>
      <h1>Teste</h1>
    </div>
  )
}

export default Home
