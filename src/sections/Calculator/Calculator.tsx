import cn from 'classnames'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

import { Button } from '../../components/Button'
import { RangeInput } from '../../components/RangeInput'
import { Select } from '../../components/Select'
import styles from './Calculator.module.less'
import { CITY_OPTIONS, PRICE_PER_GRAM, WEIGHT_OPTIONS } from './constants'
import { Dollars } from './Dollars'
import { useCalcularorSectionAnimation } from './useCalcularorSectionAnimation'

export const Calculator = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [city, setCity] = useState('')
    const [weight, setWeight] = useState('')
    const [dropsPerDay, setDropsPerDay] = useState(15)
    const [daysInMonth, setDaysInMonth] = useState(20)
    const [income, setIncome] = useState(0)
    const { sectionRef, titleLineRefs, formRef, submitRef, dollarsRef } =
        useCalcularorSectionAnimation()

    const handleCalculate = () => {
        if (!city && !weight) {
            enqueueSnackbar('Не выбран город и вес', { variant: 'error' })
            return
        }

        if (!city) {
            enqueueSnackbar('Не выбран город', { variant: 'error' })
            return
        }

        if (!weight) {
            enqueueSnackbar('Не выбран вес', { variant: 'error' })
            return
        }

        setIncome(Number(weight) * dropsPerDay * daysInMonth * PRICE_PER_GRAM)
    }

    // Возможно какая-то логика для отдельных городов
    // ...

    return (
        <section ref={sectionRef} className="container py-4 py-lg-5">
            <div className={styles.card}>
                <div className="row gx-0 gx-lg-4 gy-4">
                    <div className="col-12 col-lg-7">
                        <div className="d-flex flex-column gap-3 gap-lg-4">
                            <h2 className={cn(styles.title, 'fs-5 fs-lg-2 mb-0')}>
                                <span ref={titleLineRefs.first}>Калькулятор</span>
                                <span ref={titleLineRefs.second}>твоего заработка</span>
                            </h2>

                            <div ref={formRef} className="d-flex flex-column gap-3 gap-lg-4">
                                <div className="row g-2">
                                    <div className="col-12 col-lg-6">
                                        <Select
                                            placeholder="Город"
                                            options={CITY_OPTIONS}
                                            onValueChange={setCity}
                                        />
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <Select
                                            placeholder="Вес товара"
                                            options={WEIGHT_OPTIONS}
                                            onValueChange={setWeight}
                                        />
                                    </div>
                                </div>

                                <div className="d-flex flex-column gap-3">
                                    <RangeInput
                                        label="Кладов в день"
                                        min={1}
                                        max={50}
                                        defaultValue={30}
                                        onValueChange={setDropsPerDay}
                                    />
                                    <RangeInput
                                        label="Дней в месяц"
                                        min={1}
                                        max={31}
                                        defaultValue={30}
                                        onValueChange={setDaysInMonth}
                                    />
                                </div>
                            </div>

                            <div ref={submitRef} className="align-self-start mb-4">
                                <Button className={styles.submit} onClick={handleCalculate}>
                                    Рассчитать доход
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 mt-4">
                        <Dollars ref={dollarsRef} income={income} />
                    </div>
                </div>
            </div>
        </section>
    )
}
