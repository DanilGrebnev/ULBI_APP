import classNames from 'shared/lib/classnames'

describe('classNames', () => {
    test('Concat classes', () => {
        expect(classNames('class1', 'class2')).toBe('class1 class2')
    })

    test('Add class from object', () => {
        expect(classNames('class1', { class2: true })).toBe('class1 class2')
    })

    test('Not add class', () => {
        expect(classNames('class1', { class2: false })).toBe('class1')
    })

    test('Add class only object', () => {
        expect(classNames({ class1: true })).toBe('class1')
    })

    test('Concat two and more classes from object', () => {
        expect(classNames({ class1: true }, { class2: true })).toBe(
            'class1 class2',
        )
    })
})
