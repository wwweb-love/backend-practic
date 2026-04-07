export const sanitizeContent = (content) => (
    content
        .replaceAll('&nbsp;', '')
        .replaceAll("<div><br></div>", "\n")
        .replaceAll("<div>", "\n")
        .replaceAll("</div>", "")
)