import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const useCalcularorSectionAnimation = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const submitRef = useRef<HTMLDivElement>(null)
    const dollarsRef = useRef<HTMLDivElement>(null)
    const firstTitleLineRef = useRef<HTMLSpanElement>(null)
    const secondTitleLineRef = useRef<HTMLSpanElement>(null)
    const titleLineRefs = {
        first: firstTitleLineRef,
        second: secondTitleLineRef,
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
                .from([firstTitleLineRef.current, secondTitleLineRef.current], {
                    y: 24,
                    opacity: 0,
                    stagger: 0.12,
                })
                .from(formRef.current, { y: 20, opacity: 0 }, '>-0.15')
                .from(
                    submitRef.current,
                    { y: 16, opacity: 0, duration: 0.45, ease: 'power2.out' },
                    '>-0.2',
                )
                .from(dollarsRef.current, { x: 32, opacity: 0, duration: 0.55 }, '<0.08')
        },
        { scope: sectionRef },
    )

    return {
        sectionRef,
        titleLineRefs,
        formRef,
        submitRef,
        dollarsRef,
    }
}
