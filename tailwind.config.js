/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prim_main: "rgb(49, 130, 206)",
        prim_light: "rgb(102, 177, 255)",
        prim_dark: "rgb(45, 55, 72)",
        sec_main: "rgb(239, 248, 250)",
        text_prim: "rgb(0, 0, 0)",
        text_sec: "rgb(255, 255, 255)",
        err_main: "rgb(221, 55, 85)",
      },
    },
  },
  important: "#root",
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
