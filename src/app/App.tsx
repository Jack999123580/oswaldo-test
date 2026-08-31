import { AboutUs } from '../sections/AboutUs'
import { Calculator } from '../sections/Calculator'
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
        </>
    )
}

export default App
