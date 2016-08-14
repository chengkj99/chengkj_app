/**
 * Created by MaxCheng on 2016/8/14.
 */
// export const sqrt = Math.sqrt;
export default  function square(x) {
    return x * x;
}
export default function diag(x, y) {
    return sqrt(square(x) + square(y));
}