import { ArrowArcLeft, ArrowLeft } from "phosphor-react";
import { feedbackTypes, FeedbackTypes } from "..";
import { CloseButton } from "../../Button/closeButton";

interface FeedbackContentProps{
  feedbackType:FeedbackTypes
  onFeedbackRestartRequested:()=>void
}
export function FeedbackContent({feedbackType,onFeedbackRestartRequested}:FeedbackContentProps){
  const feedbackTypeInfo=feedbackTypes[feedbackType];
  return(
    <>
      <header>
        <button 
          onClick={onFeedbackRestartRequested}
          type="button" 
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 ">
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img 
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
            />
          {feedbackTypeInfo.title}
          </span>
        <CloseButton/>
      </header>
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

      </form>
      
    </>
  )
}