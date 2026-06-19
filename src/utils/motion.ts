import gsap from 'gsap'

type RevealOptions = {
  trigger?: Element | null
  start?: string
  y?: number
  x?: number
  scale?: number
  rotateX?: number
  rotateY?: number
  stagger?: number
  duration?: number
  delay?: number
}

export function revealOnScroll(
  root: HTMLElement,
  selector: string,
  {
    trigger = root,
    start,
    y = 72,
    x = 0,
    scale = 0.94,
    rotateX = 0,
    rotateY = 0,
    stagger = 0.12,
    duration = 1.05,
    delay = 0,
  }: RevealOptions = {},
) {
  const targets = root.querySelectorAll(selector)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const resolvedStart = start ?? (window.innerWidth <= 760 ? 'top 92%' : 'top 82%')

  if (!targets.length) return

  if (prefersReducedMotion) {
    gsap.set(targets, { autoAlpha: 1, clearProps: 'transform,filter' })
    return
  }

  gsap.fromTo(
    targets,
    {
      autoAlpha: 0,
      x,
      y,
      scale,
      rotateX,
      rotateY,
      filter: 'blur(12px)',
      transformOrigin: '50% 60%',
    },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      filter: 'blur(0px)',
      duration,
      delay,
      stagger,
      ease: 'power4.out',
      clearProps: 'opacity,visibility,transform,filter,transformOrigin',
      scrollTrigger: {
        trigger,
        start: resolvedStart,
        toggleActions: 'play none none reverse',
      },
    },
  )
}
