import { IconeLua, IconeSol } from "../icons"

interface BotaoAlternarTemaProps {
  tema: string
  alterarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps){
  return props.tema === 'dark' ? (
    <div onClick={props.alterarTema} className={`
      hidden sm:flex items-center cursor-pointer
      bg-gradient-to-r from-yellow-300 to-yellow-600
      w-14 lg:w-24 h-8 rounded-full
    `}>
      <div className={`
        flex items-center justify-center
        bg-white text-yellow-600 w-6 h-6 rounded-full
        
      `}>
        {IconeSol}
      </div>
      <div>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div onClick={props.alterarTema} className={`

    `}>
      <div className={`

      `}>
        {IconeLua}
      </div>
      <div>
        <span>Escuro</span>
      </div>
    </div>
  )
}