import cn from 'classnames'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

import { Button } from '../../components/Button'
import { CircleGradient } from '../../components/CircleGradient'
import { RangeInput } from '../../components/RangeInput'
import { Select } from '../../components/Select'
import { formatNumberWithSpaces } from '../../utils'
import dollarImage from './assets/dollar.svg'
import leafCenter from './assets/leafCenter.svg'
import leafFront from './assets/leafFront.svg'
import leafLeftBottom from './assets/leafLeftBottom.svg'
import leafMiddle from './assets/leafMiddle.svg'
import leafTopRight from './assets/leafTopRight.svg'
import styles from './Calculator.module.less'
import { CITY_OPTIONS, PRICE_PER_GRAM, WEIGHT_OPTIONS } from './constants'

export const Calculator = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [city, setCity] = useState('')
    const [weight, setWeight] = useState('')
    const [dropsPerDay, setDropsPerDay] = useState(15)
    const [daysInMonth, setDaysInMonth] = useState(20)
    const [income, setIncome] = useState(0)

    const handleCalculate = () => {
        if (!city) {
            enqueueSnackbar('Не выбран город', { variant: 'error' })
        }
        if (!weight) {
            enqueueSnackbar('Не выбран вес', { variant: 'error' })
        }
        if (!city || !weight) {
            return
        }

        setIncome(Number(weight) * dropsPerDay * daysInMonth * PRICE_PER_GRAM)
    }

    // Возможно какая-то логика для отдельных городов
    // ...

    return (
        <section className="container py-4 py-lg-5">
            <div className={styles.card}>
                <div className="row gx-0 gx-lg-4 gy-4">
                    <div className="col-12 col-lg-7">
                        <div className="d-flex flex-column gap-3 gap-lg-4">
                            <h2 className={cn(styles.title, 'fs-5 fs-lg-2 mb-0')}>
                                <span>Калькулятор</span>
                                <span>твоего заработка</span>
                            </h2>

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

                            <Button
                                className={cn(styles.submit, 'align-self-start  mb-4')}
                                onClick={handleCalculate}
                            >
                                Рассчитать доход
                            </Button>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 mt-4">
                        <div className={styles.result}>
                            <CircleGradient blur={80} className={styles.glowFront} />
                            <img src={leafTopRight} alt="" className={styles.leafTopRight} />
                            <img src={leafCenter} alt="" className={styles.leafCenter} />
                            <img src={leafLeftBottom} alt="" className={styles.leafLeftBottom} />
                            <img src={leafMiddle} alt="" className={styles.leafMiddle} />

                            <img src={leafFront} alt="" className={styles.leafFront} />

                            <img src={dollarImage} alt="" className={styles.dollar} />
                            <div className={styles.glowContainer}>
                                <CircleGradient blur={80} className={styles.glow} />
                            </div>
                            <p className={cn(styles.resultLabel, 'mb-0')}>Ты заработаешь</p>
                            <p className={cn(styles.resultValue, 'fs-2 fs-lg-1 mb-0')}>
                                {formatNumberWithSpaces(income)} ₽
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
