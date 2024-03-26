import Lottie from 'lottie-react'
import OnePage from "../assets/images/one-page-lottie.json"

const LottieOnePage = () => {

    const style = {
        width: "300px",
      }

  return (

    <div style={style}>
      <Lottie  animationData={OnePage} />
    </div>

  )
}
export default LottieOnePage