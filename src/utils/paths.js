/**
 * Get the correct path for assets when using basePath
 * @param {string} path - The asset path
 * @returns {string} - The corrected path
 */
export function getAssetPath(path) {
    // Always use basePath for consistency between dev and prod
    const basePath = "/portfolio";
    return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
