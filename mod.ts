function init(m: number, n: number): number[][] {
  let d: number[][] = [];
  for (let i = 0; i <= m; i++) {
    let arr: number[] = [];
    for (let j = 0; j <= n; j++) {
      arr.push(0);
    }
    d.push(arr);
  }
  return d;
}

function minimum(numbers: number[]): number {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}

export default function levenshtein(s: string, t: string): number {
  let d: number[][] = init(s.length, t.length);

  for (let i = 1; i <= s.length; i++) {
    d[i][0] = i;
  }

  for (let i = 1; i <= t.length; i++) {
    d[0][i] = i;
  }

  for (let j = 1; j <= t.length; j++) {
    for (let i = 1; i <= s.length; i++) {
      let substitutionCost = 1;
      if (s[i - 1] === t[j - 1]) substitutionCost = 0;
      d[i][j] = minimum(
        [d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + substitutionCost],
      );
    }
  }

  return d[s.length][t.length];
}
