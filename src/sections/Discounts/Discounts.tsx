import { Discount } from './Discount'
import { Percent } from './Percent'
import { useDiscountsSectionAnimation } from './useDiscountsSectionAnimation'

export const Discounts = () => {
    const { sectionRef, percentRef, discountRef } = useDiscountsSectionAnimation()

    return (
        <section ref={sectionRef} className="container py-4 py-lg-5">
            <div className="row g-3">
                <div ref={percentRef} className="col-12 col-lg-4 order-2 order-lg-1">
                    <Percent />
                </div>
                <div ref={discountRef} className="col-12 col-lg-8 order-1 order-lg-2">
                    <Discount />
                </div>
            </div>
        </section>
    )
}
