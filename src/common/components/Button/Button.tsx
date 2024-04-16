import React, {ComponentPropsWithoutRef, ElementType} from 'react';
import styles from './Button.module.css'

type Props<T extends ElementType = 'button'> = {
    as?: T
    className?: string
    variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
    const { as: Component = 'button', className, variant = 'primary', ...rest } = props

    const style = `${styles.button} ${styles[variant]}`

    return <Component className={style} {...rest} />
}