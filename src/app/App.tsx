import { AboutUs } from '../sections/AboutUs'
import { Calculator } from '../sections/Calculator'
import { Contacts } from '../sections/Contacts'
import { Discounts } from '../sections/Discounts'
import { InformationOfWork } from '../sections/InformationOfWork'
import { Jobs } from '../sections/Jobs'
import { Welcome } from '../sections/Welcome'

const App = () => {
    return (
        <>
            <Welcome />
            <Calculator />
            <InformationOfWork />
            <AboutUs />
            <Jobs />
            <Discounts />
            <Contacts />
        </>
    )
}

export default App
