export const changeThemeOnBody = (theme: string | undefined) => {
    if (!theme) return
    const body = document.querySelector('body')
    if (!body) return
    body.className = ''
    body?.classList.add(theme)
}
