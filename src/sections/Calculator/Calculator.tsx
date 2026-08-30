import { Button } from '../../components/Button'
import { CircleGradient } from '../../components/CircleGradient'
import { RangeInput } from '../../components/RangeInput'
import { Select } from '../../components/Select'
import dollarImage from './assets/dollar.svg'
import leafCenter from './assets/leafCenter.svg'
import leafFront from './assets/leafFront.svg'
import leafLeftBottom from './assets/leafLeftBottom.svg'
import leafMiddle from './assets/leafMiddle.svg'
import leafTopRight from './assets/leafTopRight.svg'
import styles from './Calculator.module.less'
import { CITY_OPTIONS, WEIGHT_OPTIONS } from './constants'

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

                            <Button className={`${styles.submit} align-self-start  mb-4`}>
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
                            <p className={`${styles.resultLabel} mb-0`}>Ты заработаешь</p>
                            <p className={`${styles.resultValue} fs-2 fs-lg-1 mb-0`}>900 000 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
