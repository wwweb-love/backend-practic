export const getLastPageFromLinks = (links) => {
    // const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>;\srel="last"/)
    const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>;\srel="last"/)

    return Number(result[1])
}