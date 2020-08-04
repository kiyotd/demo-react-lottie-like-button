import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'

function App() {

  const container = useRef(null)
  let animItem = null
  let isLiked = false

  const loadAnimation = () => {
    animItem = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      animationData: require('./animation.json')
    })
    stopAnimation()
  }

  const handleClick = () => {
    console.log('click')
    isLiked ? stopAnimation() : startAnimation()
    isLiked = !isLiked
  }

  const startAnimation = () => {
    console.log('animation start')
    animItem.goToAndPlay(0)
  }

  const stopAnimation = () => {
    console.log('animation stop')
    animItem.goToAndStop(1100)
  }

  useEffect(() => {
    console.log('useEffect')
    loadAnimation()
  })

  return (
    <div style={{margin: '40px'}}>
      <h1>React Lottie Demo</h1>
      <p>Click the heart icon to toggle animation</p>
      <div className="container" ref={container} style={{width: '100px', height: '100px'}} onClick={handleClick}/>
      <p><a href="https://github.com/kiyotd/react-lottie-like-button"><i className="fa fa-github"/></a></p>
    </div>
  )
}

export default App
