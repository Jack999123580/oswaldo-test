import { Deposit } from './Deposit'
import { Documents } from './Documents'
import { Title } from './Title'

export const Jobs = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className="d-flex flex-column gap-3">
                <Title />
                <Deposit />
                <Documents />
            </div>
        </section>
    )
}
