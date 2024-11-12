import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useParallaxEffect() {
  const init = () => {
    if (typeof window === 'undefined') return

    const animateFrom = (elem: HTMLElement, direction = 1) => {
      let x = 0,
        y = direction * 100
      if (elem.classList.contains('gs_reveal_fromLeft')) {
        x = -100
        y = 0
      } else if (elem.classList.contains('gs_reveal_fromRight')) {
        x = 100
        y = 0
      }
      gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto',
        },
      )
    }

    const hide = (elem: any) => {
      gsap.set(elem, { autoAlpha: 0 })
    }

    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.gs_reveal').forEach((elem: any) => {
      hide(elem)

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: () => animateFrom(elem, 1),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem),
      })
    })
  }

  return { init }
}
