/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  colors: {
    primary100: "#232B25",
    primary200: "#2E3830",
    primary300: "#323f36",
    primary400: "#37433a",
    primary500: "#3c483f",

    secondary100: "#fbfffc",
    secondary200: "#f4fff5",
    secondary300: "#eaffec",
    secondary400: "#ddf8df",
    secondary500: "#d6f1d8",

    accent100: "#78a103",
    accent200: "#8dbd06",
    accent300: "#b2f100",
    accent400: "#c4ff1c",
    accent500: "#daff71",
  },
};
