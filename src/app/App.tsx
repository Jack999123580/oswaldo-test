import { Calculator } from '../sections/Calculator'
import { InformationOfWork } from '../sections/InformationOfWork'
import { Welcome } from '../sections/Welcome'

const App = () => {
    return (
        <>
            <Welcome />
            <Calculator />
            <InformationOfWork />
        </>
    )
}

export default App
