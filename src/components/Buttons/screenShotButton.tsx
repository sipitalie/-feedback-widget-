import { useState } from "react";
import html2canvas from 'html2canvas'
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading/Loading";


interface screenShotButtonProps{
  onScreenshotTook:(onScreenshot:string | null)=>void,
  screenshot:string | null
}
export function ScreenShotButton({onScreenshotTook, screenshot}:screenShotButtonProps){
  const [isTakingScreenshot, setIsTakingScreenshot]=useState(false)
  async function handleTakeScreenshot(){
    setIsTakingScreenshot(true)
    const canvas= await html2canvas(document.querySelector("html")!)
    const base64Image=canvas.toDataURL('image/png')
    onScreenshotTook(base64Image)
    setIsTakingScreenshot(false)

  }
  if(screenshot){
    return(
      <button 
      type="button"
      onClick={()=>onScreenshotTook(null)}
      className="p-1 w-10 h10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      style={{
        backgroundImage:`url(${screenshot})`,
        backgroundPosition:`right bottom`,
        backgroundSize:100,

      }}
      >
        <Trash weight="fill"/>

      </button>
    )
  }
  return(
    <button
    type="button"
    onClick={handleTakeScreenshot}
    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus: ring-offset-2 focus: ring-offset-zinc-900 focus:ring-brand-500"
  >{isTakingScreenshot?<Loading/>:<Camera className="w-6 h-6"/>}
    
  </button>
  )
}