import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import cn from 'classnames'
import { useState } from 'react'

import styles from './RangeInput.module.less'

type RangeInputProps = {
    label: string
    min?: number
    max?: number
    step?: number
    value?: number
    defaultValue?: number
    onValueChange?: (value: number) => void
}

export const RangeInput = ({
    label,
    min = 0,
    max = 100,
    step = 1,
    value,
    defaultValue,
    onValueChange,
}: RangeInputProps) => {
    const [internalValue, setInternalValue] = useState(value ?? defaultValue ?? min)

    const handleValueChange = ([value]: number[]) => {
        setInternalValue(value)
        onValueChange?.(value)
    }

    return (
        <div className={styles.root}>
            <span className={styles.label}>{label}</span>
            <div className="d-flex align-items-center gap-3">
                <div className="flex-grow-1">
                    <Root
                        className={styles.slider}
                        min={min}
                        max={max}
                        step={step}
                        value={[internalValue]}
                        onValueChange={handleValueChange}
                    >
                        <Track className={styles.track}>
                            <Range className={styles.range} />
                        </Track>
                        <Thumb className={styles.thumb} />
                    </Root>
                </div>
                <span className={cn(styles.value, 'd-none d-lg-block')}>{internalValue}</span>
            </div>
        </div>
    )
}
