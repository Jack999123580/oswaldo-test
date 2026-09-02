import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const useInformationOfWorkSectionAnimation = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const firstCardRef = useRef<HTMLDivElement>(null)
    const secondCardRef = useRef<HTMLDivElement>(null)
    const thirdCardRef = useRef<HTMLDivElement>(null)
    const cardRefs = {
        first: firstCardRef,
        second: secondCardRef,
        third: thirdCardRef,
    }

    useGSAP(
        () => {
            gsap.timeline({
                defaults: { ease: 'power3.out', duration: 0.5 },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
            }).from([firstCardRef.current, secondCardRef.current, thirdCardRef.current], {
                y: 32,
                opacity: 0,
                stagger: 0.12,
            })
        },
        { scope: sectionRef },
    )

    return {
        sectionRef,
        cardRefs,
    }
}
