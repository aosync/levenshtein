export default function levenshtein(s: string, t: string): number {
  if (s === t) return 0;
  const sl = s.length + 1;
  const tl = t.length + 1;
  let d: number[] = new Array(sl * tl).fill(0);

  for (let i = 1; i <= s.length; i++) {
    d[tl * i] = i;
  }

  for (let i = 1; i <= t.length; i++) {
    d[i] = i;
  }

  for (let j = 1; j <= t.length; j++) {
    for (let i = 1; i <= s.length; i++) {
      let substitutionCost = 1;
      if (s[i - 1] === t[j - 1]) substitutionCost = 0;
      d[tl * i + j] = Math.min(d[tl * (i - 1) + j] + 1, d[tl * i + j - 1] + 1, d[tl * (i - 1) + j - 1] + substitutionCost);
    }
  }

  return d[sl * tl - 1];
}
