module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "t-color": "#030806",
        "t-color-2": "#0d9b5c",
        "b-color": "#eaeded",
        "b-color-2": "#a0bdb4",
        accent: "#105035",
        "accent-2": "#5fb495",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
