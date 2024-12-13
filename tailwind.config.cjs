const flowbite = require("flowbite-react/tailwind");
const flowbitePlugin = require("flowbite/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ...flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    flowbitePlugin({
      charts: true,
    }),
  ],
};
