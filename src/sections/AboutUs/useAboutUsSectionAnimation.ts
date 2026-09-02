import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const useAboutUsSectionAnimation = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            gsap.timeline({
                defaults: { ease: 'power3.out', duration: 0.5 },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
            })
                .from(cardRef.current, { y: 32, opacity: 0 })
                .from(imageRef.current, { x: 32, opacity: 0, duration: 0.55 }, '<0.12')
        },
        { scope: sectionRef },
    )

    return {
        sectionRef,
        imageRef,
        cardRef,
    }
}
