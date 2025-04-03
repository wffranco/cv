/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    [...Array(181).keys()].flatMap((i) => [
      `group-[:has(#r-${i+1}:checked)]/locations:block`,
      `group-[:has(#c-${i+1}:checked)]/locations:text-indigo-600`,
    ]),
  ].flat(),
}
