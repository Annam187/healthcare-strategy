/**
 * Healthcare Strategy Platform — Utility Helpers
 */

/**
 * Truncate a string to a max length with ellipsis
 */
export const truncate = (str, maxLen = 80) =>
  str.length > maxLen ? str.slice(0, maxLen) + '...' : str

/**
 * Get a badge CSS class based on a priority/level string
 */
export const getPriorityBadgeClass = (priority) => {
  const map = {
    Critical: 'badge-red',
    High: 'badge-orange',
    Medium: 'badge-green',
    Low: 'badge-cyan',
    'Very High': 'badge-red',
  }
  return map[priority] || 'badge-blue'
}

/**
 * Get a color hex string based on a category label
 */
export const getCategoryColor = (category, colorMap = {}) =>
  colorMap[category] || '#8b949e'

/**
 * Filter an array of objects by a search string across multiple keys
 */
export const fuzzyFilter = (items, search, keys) => {
  if (!search) return items
  const q = search.toLowerCase()
  return items.filter((item) =>
    keys.some((key) => item[key]?.toLowerCase().includes(q))
  )
}

/**
 * Calculate a percentage score
 */
export const calcScore = (correct, total) =>
  total === 0 ? 0 : Math.round((correct / total) * 100)

/**
 * Return a result label based on percentage
 */
export const scoreLabel = (pct) => {
  if (pct === 100) return { emoji: '🏆', label: 'Perfect Score! Domain Expert!' }
  if (pct >= 67) return { emoji: '👍', label: 'Good Job! Keep Learning' }
  return { emoji: '📚', label: 'Keep Studying — You Got This!' }
}
