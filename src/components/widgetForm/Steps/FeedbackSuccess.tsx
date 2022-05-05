import { CloseButton } from "../../Buttons/closeButton";
import successImage from '../../../assets/success.svg'


interface  FeedbackSuccessProps{
  onFeedbackRestartRequested:()=>void
}
export function FeedbackSuccess({onFeedbackRestartRequested}:FeedbackSuccessProps){
  return(
    <>
    <header>
      <CloseButton/>
    </header>
    <div className="flex flex-col items-center py-10 w-[304px]">
      <img src={successImage} alt={"image-success"}/>
      <span className="text-xl mt-2">Agradecemos o feedback!</span>
      <button 
      onClick={onFeedbackRestartRequested}
      className="py-2 px-6 mt-6 bg-zing-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus: ring-offset-2 focus: ring-offset-zinc-900 focus:ring-brand-500">
        Quero enviar outro
      </button>
    </div>
    </>
  )
}