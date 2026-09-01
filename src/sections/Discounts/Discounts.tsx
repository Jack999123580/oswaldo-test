import { Discount } from './Discount'
import { Percent } from './Percent'

export const Discounts = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className="row g-3">
                <div className="col-12 col-lg-4 order-2 order-lg-1">
                    <Percent />
                </div>
                <div className="col-12 col-lg-8 order-1 order-lg-2">
                    <Discount />
                </div>
            </div>
        </section>
    )
}
