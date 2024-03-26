import Lottie from 'lottie-react'
import Laptop from "../assets/images/lottie-animation.json"

const LottieLaptop = () => {
  
  const style = {
    width: "700px",
    margin: "-60px auto",
  }

  return (

    <div style={style}>
      <Lottie  animationData={Laptop} />
    </div>
    

  )
}

export default LottieLaptop