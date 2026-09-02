import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const useContactsSectionAnimation = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            gsap.from(cardRef.current, {
                y: 96,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
            })
        },
        { scope: sectionRef },
    )

    return {
        sectionRef,
        cardRef,
    }
}
