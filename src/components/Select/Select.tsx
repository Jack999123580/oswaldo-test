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

import { ChevronDown } from './ChevronDown'
import { Placeholder } from './Placeholder'
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
}

export const Select = ({
    options,
    placeholder,
    value,
    defaultValue,
    onValueChange,
    disabled,
    name,
}: SelectProps) => {
    return (
        <Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            disabled={disabled}
            name={name}
        >
            <Trigger className={styles.trigger}>
                <Value
                    placeholder={value || <Placeholder>{placeholder}</Placeholder>}
                    className={styles.value}
                />
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
