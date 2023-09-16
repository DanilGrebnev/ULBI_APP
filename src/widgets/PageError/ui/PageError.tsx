import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import s from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { t } = useTranslation('pageError')

    const reloadPage = (): void => {
        window.location.reload()
    }

    return (
        <div className={s.PageError}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <button
                onClick={reloadPage}
                type="button"
            >
                {t('Обновить страницу')}
            </button>
        </div>
    )
}
