import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)

export const useMainScreenAnimation = () => {
    const catRef = useRef<HTMLSpanElement>(null)
    const arrowRef = useRef<HTMLSpanElement>(null)
    const bitcoinRef = useRef<HTMLDivElement>(null)
    const buttonsRef = useRef<HTMLDivElement>(null)
    const pathLineRef = useRef<HTMLSpanElement>(null)
    const highlightLineRef = useRef<HTMLSpanElement>(null)
    const startsLineRef = useRef<HTMLSpanElement>(null)
    const hereLineRef = useRef<HTMLSpanElement>(null)
    const lineRefs = {
        path: pathLineRef,
        highlight: highlightLineRef,
        starts: startsLineRef,
        here: hereLineRef,
    }

    useGSAP(() => {
        gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.5 } })
            .from(
                [
                    pathLineRef.current,
                    highlightLineRef.current,
                    startsLineRef.current,
                    hereLineRef.current,
                ],
                { y: 24, opacity: 0, stagger: 0.12 },
            )
            .fromTo(
                highlightLineRef.current,
                { rotation: -8 },
                { rotation: -2, duration: 0.55, ease: 'back.out(1.8)' },
                0.12,
            )
            .from(catRef.current, { x: -28, opacity: 0, duration: 0.55 }, '>-0.1')
            .from(bitcoinRef.current, { x: 28, opacity: 0, duration: 0.55 }, '<0.08')
            .from(arrowRef.current, { y: 20, opacity: 0 }, '<0.08')
            .from(
                buttonsRef.current,
                { y: 16, opacity: 0, duration: 0.45, ease: 'power2.out' },
                '>-0.2',
            )
    })

    return {
        catRef,
        arrowRef,
        bitcoinRef,
        buttonsRef,
        lineRefs,
    }
}
