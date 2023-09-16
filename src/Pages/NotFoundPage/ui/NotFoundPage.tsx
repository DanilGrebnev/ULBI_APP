import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import cl from 'shared/lib/classnames'

import s from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation('notFound')

    return (
        <div className={cl(s.NotFoundPage, className)}>
            {t('Страница не найдена')}
        </div>
    )
}
