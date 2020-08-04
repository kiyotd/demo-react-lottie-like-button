import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'

function App() {

  const container = useRef(null)

  let animObj = null
  let isLiked = false

  const loadAnimation = () => {
    animObj = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      animationData: require('./animation.json'),
    })
    stopAnimation()
  }

  const handleClick = () => {
    isLiked ? stopAnimation() : startAnimation()
    isLiked = !isLiked
  }

  const startAnimation = () => {
    animObj.goToAndPlay(0)
  }

  const stopAnimation = () => {
    animObj.goToAndStop(1100)
  }

  useEffect(() => {
    loadAnimation()
  }, [])

  return (
    <div style={{margin: '40px'}}>
      <h1>React Lottie Demo</h1>
      <p>Click the heart icon to toggle animation</p>
      <div className="container" ref={container} style={{width: '100px', height: '100px'}} onClick={handleClick}/>
      <p><a href="https://github.com/kiyotd/react-lottie-like-button"><i className="fa fa-github"/></a></p>
    </div>
  )
}

export default App;
