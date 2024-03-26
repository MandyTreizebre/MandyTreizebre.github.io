import Lottie from 'lottie-react'
import Website from "../assets/images/website-animation.json"

const LottieWebSite = () => {

    const style = {
        width: "700px",
        margin: "-60px auto",
      }

  return (

    <div style={style}>
      <Lottie  animationData={Website} />
    </div>

  )
}
export default LottieWebSite