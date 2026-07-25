export function getFileFromPublicFolder(relativePath: string) {
    const filteredPath = relativePath.replace(/^\/+/, "");
    return `${process.env.PUBLIC_URL}/${filteredPath}`;
}
