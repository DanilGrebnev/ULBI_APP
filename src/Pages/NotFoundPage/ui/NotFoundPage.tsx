import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import cl from 'shared/lib/classnames'

import s from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
    const { t } = useTranslation('notFound')

    return <div className={cl(s.NotFoundPage)}>{t('Страница не найдена')}</div>
}
