export function isTriangle(a: number, b: number, c: number): boolean {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a >= b + c || b >= a + c || c >= a + b) return false;
  return true;
}
