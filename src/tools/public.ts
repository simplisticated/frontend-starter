export function getFileFromPublicFolder(path: string) {
    const filteredPath = path.replace(/^\/+/, "");
    return `${process.env.PUBLIC_URL}/${filteredPath}`;
}
