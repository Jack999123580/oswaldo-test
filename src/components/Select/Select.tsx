import {
    Content,
    Icon,
    Item,
    ItemText,
    Portal,
    Root,
    Trigger,
    Value,
    Viewport,
} from '@radix-ui/react-select'

import styles from './Select.module.less'

export type SelectOption = {
    label: string
    value: string
}

type SelectProps = {
    options: SelectOption[]
    placeholder?: string
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
    disabled?: boolean
    name?: string
    className?: string
}

export const Select = ({
    options,
    placeholder,
    value,
    defaultValue,
    onValueChange,
    disabled,
    name,
    className,
}: SelectProps) => {
    return (
        <Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            disabled={disabled}
            name={name}
        >
            <Trigger className={`${styles.trigger}${className ? ` ${className}` : ''}`}>
                <Value placeholder={placeholder} className={styles.value} />
                <Icon className={styles.icon}>
                    <ChevronDown />
                </Icon>
            </Trigger>
            <Portal>
                <Content className={styles.content} position="popper" sideOffset={8}>
                    <Viewport className={styles.viewport}>
                        {options.map((option) => (
                            <Item key={option.value} value={option.value} className={styles.item}>
                                <ItemText>{option.label}</ItemText>
                            </Item>
                        ))}
                    </Viewport>
                </Content>
            </Portal>
        </Root>
    )
}

const ChevronDown = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
