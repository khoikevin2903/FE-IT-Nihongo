module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-0": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-1": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-2": {
          "0%": {
            opacity: "0",
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-3": {
          "0%": {
            opacity: "0",
            transform: "translateY(70px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-icon-1": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-icon-2": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-icon-3": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-icon-4": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up-icon-5": {
          "0%": {
            opacity: "0",
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        "fade-in-up": "fade-in-up-0 0.4s ease-in",
        "fade-in-up-0": "fade-in-up-0 0.8s ease-in",
        "fade-in-up-1": "fade-in-up-1 0.82s ease-in",
        "fade-in-up-2": "fade-in-up-2 0.84s ease-in",
        "fade-in-up-3": "fade-in-up-2 0.86s ease-in",
        "fade-in-up-icon-1": "fade-in-up-icon-1 0.9s ease-in",
        "fade-in-up-icon-2": "fade-in-up-icon-2 1s ease-in",
		    "fade-in-up-icon-3": "fade-in-up-icon-3 1.1s ease-in",
        "fade-in-up-icon-4": "fade-in-up-icon-4 1.2s ease-in",
        "fade-in-up-icon-5": "fade-in-up-icon-5 1.3s ease-in",
      },
      backgroundImage: (theme) => ({
        bgChat: "url('./public/images/bgChat.jpg')",
        avatar: "url('./public/images/avata.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};