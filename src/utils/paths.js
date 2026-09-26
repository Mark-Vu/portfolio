/**
 * Get the correct path for assets when using basePath
 * @param {string} path - The asset path
 * @returns {string} - The corrected path
 */
export function getAssetPath(path) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
