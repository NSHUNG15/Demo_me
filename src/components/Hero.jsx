import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.jpg"

const Hero = () => {
  return (
    <div className="pb-4 bottom-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg;text-8xl">
            Nguyễn Sinh Hùng
            </h1>
            <span className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text ">Full Stack Developer</span>
            <p className="py-6 my-2 tracking-tight max-w-wl forn-light">
              {HERO_CONTENT}
            </p>
            
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-2">
          <div className="flex justify-center ">
            <img className="w-[30rem] boder border-spacing-y-5 rounded-lg " src={profile} alt="Nguyễn Sinh Hùng" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

