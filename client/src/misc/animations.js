import { useSpring, animated } from 'react-spring'

export const AnimationExample = () => {
    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
      })
      // ...
      return <animated.div style={styles}>I will fade in and out</animated.div>
}

export const AnimationExample2 = () => {
    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
      })
      // ...
      return <animated.div style={styles}>I will fade in and out Example2</animated.div>
}


 