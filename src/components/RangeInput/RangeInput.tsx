import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { useId, useState } from 'react'

import styles from './RangeInput.module.less'

type RangeInputProps = {
    label?: string
    min?: number
    max?: number
    step?: number
    value?: number
    defaultValue?: number
    onValueChange?: (value: number) => void
    disabled?: boolean
    name?: string
    className?: string
}

export const RangeInput = ({
    label,
    min = 0,
    max = 100,
    step = 1,
    value,
    defaultValue,
    onValueChange,
    disabled,
    name,
    className,
}: RangeInputProps) => {
    const labelId = useId()
    const [internalValue, setInternalValue] = useState(value ?? defaultValue ?? min)
    const currentValue = value ?? internalValue

    const handleValueChange = (values: number[]) => {
        const next = values[0] ?? min

        if (value === undefined) {
            setInternalValue(next)
        }

        onValueChange?.(next)
    }

    return (
        <div className={`${styles.root}${className ? ` ${className}` : ''}`}>
            {label ? (
                <span className={styles.label} id={labelId}>
                    {label}
                </span>
            ) : null}
            <div className="d-flex align-items-center gap-3">
                <div className="flex-grow-1">
                    <Root
                        className={styles.slider}
                        min={min}
                        max={max}
                        step={step}
                        value={[currentValue]}
                        onValueChange={handleValueChange}
                        disabled={disabled}
                        name={name}
                        aria-labelledby={label ? labelId : undefined}
                    >
                        <Track className={styles.track}>
                            <Range className={styles.range} />
                        </Track>
                        <Thumb className={styles.thumb} />
                    </Root>
                </div>
                <span className={`d-none d-lg-block ${styles.value}`}>{currentValue}</span>
            </div>
        </div>
    )
}
