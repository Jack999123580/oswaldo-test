import { Button } from '../../components/Button'
import { RangeInput } from '../../components/RangeInput'
import { Select } from '../../components/Select'
import styles from './Calculator.module.less'

const CITY_OPTIONS = [
    { value: 'moscow', label: 'Москва' },
    { value: 'spb', label: 'Санкт-Петербург' },
]

const WEIGHT_OPTIONS = [
    { value: '100', label: '100 г' },
    { value: '200', label: '200 г' },
]

export const Calculator = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className={styles.card}>
                <div className="row gx-0 gx-lg-4 gy-4">
                    <div className="col-12 col-lg-7">
                        <div className="d-flex flex-column gap-3 gap-lg-4">
                            <h2 className={`${styles.title} fs-5 fs-lg-2 mb-0`}>
                                <span>Калькулятор</span>
                                <span>твоего заработка</span>
                            </h2>

                            <div className="row g-2">
                                <div className="col-12 col-lg-6">
                                    <Select placeholder="Город" options={CITY_OPTIONS} />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Select placeholder="Вес товара" options={WEIGHT_OPTIONS} />
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-3">
                                <RangeInput
                                    label="Кладов в день"
                                    min={1}
                                    max={50}
                                    defaultValue={30}
                                />
                                <RangeInput
                                    label="Дней в месяц"
                                    min={1}
                                    max={31}
                                    defaultValue={30}
                                />
                            </div>

                            <Button className={`${styles.submit} align-self-start`}>
                                Рассчитать доход
                            </Button>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5">
                        <div className={styles.result}>
                            <p className={`${styles.resultLabel} mb-0`}>Ты заработаешь</p>
                            <p className={`${styles.resultValue} fs-2 fs-lg-1 mb-0`}>900 000 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
