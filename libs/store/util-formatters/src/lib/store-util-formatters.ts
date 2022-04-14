export function formatRating(rating = 1) {
  return `${Math.round(rating * 100) / 10} / 10`;
}