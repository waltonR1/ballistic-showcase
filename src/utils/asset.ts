const CDN_BASE_URL = import.meta.env.VITE_CDN_BASE_URL || ''

export function assetUrl(path: string) {
  if (!path) return ''

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const base = CDN_BASE_URL.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${base}${normalizedPath}`
}
