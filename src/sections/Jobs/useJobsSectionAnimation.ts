import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const useJobsSectionAnimation = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const depositRef = useRef<HTMLDivElement>(null)
    const documentsRef = useRef<HTMLDivElement>(null)
    const titleRefs = {
        subtitle: subtitleRef,
        title: titleRef,
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
            })
                .from([subtitleRef.current, titleRef.current], {
                    y: 24,
                    opacity: 0,
                    stagger: 0.12,
                })
                .from(
                    [depositRef.current, documentsRef.current],
                    { y: 32, opacity: 0, stagger: 0.12 },
                    '>-0.15',
                )
        },
        { scope: sectionRef },
    )

    return {
        sectionRef,
        titleRefs,
        depositRef,
        documentsRef,
    }
}
