export default function two_crystal_balls(breaks: boolean[]): number {
  const length = breaks.length, sqrt = Math.floor(Math.sqrt(length));
  let i = 0;

  for (; i <= length; i += sqrt)
    if (breaks[i]) break;
  
  for (let j = i - sqrt; j < i; j++)
    if (breaks[j]) return j;

  return -1;
}