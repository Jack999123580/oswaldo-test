import { AboutUs } from '../sections/AboutUs'
import { Calculator } from '../sections/Calculator'
import { InformationOfWork } from '../sections/InformationOfWork'
import { Welcome } from '../sections/Welcome'

const App = () => {
    return (
        <>
            <Welcome />
            <Calculator />
            <InformationOfWork />
            <AboutUs />
        </>
    )
}

export default App
