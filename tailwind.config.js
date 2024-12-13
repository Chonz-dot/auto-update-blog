module.exports = {
  content: ["./hugo_stats.json"],
  darkMode: ['class'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      serif: ["Newsreader", "serif"],
      mono: ["Ubuntu Mono", "monospace"],
    },
  },
  safelist: [
    {
      pattern: /bg-(red|green|blue|yellow|purple|pink)-(200|300|400)/, // 保留动态背景色
    },
  ],
  content: [
    "./hugo_stats.json",                // Hugo 的动态类名
    "./layouts/**/*.html",              // 所有布局模板文件
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      {
        lit: {
          ...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
        },
      },
      {
        dim: {
          ...require("daisyui/src/theming/themes")["[data-theme=business]"],
        },
      },
    ],
    darkTheme: "dim",
  },
};
