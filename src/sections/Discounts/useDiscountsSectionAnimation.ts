import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const useDiscountsSectionAnimation = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const percentRef = useRef<HTMLDivElement>(null)
    const discountRef = useRef<HTMLDivElement>(null)

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
                .from(discountRef.current, { y: 32, opacity: 0 })
                .from(percentRef.current, { x: -32, opacity: 0, duration: 0.55 }, '<0.12')
        },
        { scope: sectionRef },
    )

    return {
        sectionRef,
        percentRef,
        discountRef,
    }
}
