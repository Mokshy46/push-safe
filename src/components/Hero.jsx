import illus2 from '../assets/illus2.svg'
import illus3 from '../assets/undraw5.svg'
const Hero = () => {
  return (


    <div className=" flex m-5 relative justify-center min-h-[calc(100vh-88px)]">
      <div className=" flex-1">
        <img src={illus2} alt="" className=' w-[290px] h-auto absolute top-0 left-0' />
      </div>



      <div className=" flex-1 flex text-center items-center justify-center ">
        <h2 className=' text-6xl font-comfortaa font-extrabold m-3 '>
          Make everyone on your team a developer
        </h2>
      </div>



      <div className=' flex-1 align-top'>
        <img src={illus3} alt="" className=' w-[250px] h-auto absolute bottom-9 right-5' />
      </div>

    </div>


  )
}

export default Hero


