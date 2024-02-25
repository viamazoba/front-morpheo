/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    screens: {
      xs: '480px',
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    fontFamily: {
      roboto: ["Roboto"]
    },
    fontSize: {
      6: '0.375rem', // 6px
      7: '0.4375rem', // 7px
      8: '0.5rem', // 8px
      10: '0.625rem', //10px
      11: '0.6875rem', //11px
      12: '0.75rem', // 12px
      13: '0.8125rem', //13px
      14: '0.875rem', // 14px
      15: '0.9375rem', // 15px
      base: '1rem', // 16px
      18: '1.125rem', // 18px
      20: '1.25rem', // 20px
      22: '1.375rem', // 22px
      24: '1.5rem', // 24px
      26: '1.625rem', // 26px
      28: '1.75rem', // 28px
      30: '1.875rem', // 30px
      32: '2rem', // 32px
      'xl': '3rem', // 48px
      '2xl': '3.75rem', // 60px
      '4xl': '4.5rem', // 72px
    },
    extend: {
      spacing: {
        18: "4.5rem", // 72px
        30: "7.6875rem", //123px
        33: "8.5625rem", // 137px
        37: "9.375rem", // 150px
        38: "9.6875rem", // 155px
        46: "11.5625rem", // 185px
        50:"12.625rem", // 202px
        57:"14.4375rem", // 231px
        61:"15.75rem", // 252px
        73: "18.25rem", // 292px
        85: "22.9375rem", // 367px
        98: "28.3125rem", // 453px
        "9/10": "90%",
        "1/5": "20%",
        "1/10": "10%",
      },
      borderRadius: {
        2: '0.125rem', // 2px
        3: '0.1875rem', // 3px
        4: '0.25rem', // 4px
        8: '0.5rem', // 8px
        9: '0.5625rem', // 9px
        12: '0.75rem', // 12px
        sm: '0.84375rem',// 13.5px
        base: '1rem', // 16px
        18: '1.125rem', // 18px
        20: '1.25rem', //20px
        24: '1.5rem', // 24px
        28: '1.75rem', // 28px
        32: '2rem', // 32px
      },
      lineHeight: {
        8: '0.5rem', // 8px
        11: '0.6875rem', // 11px
        12: '0.75rem', // 12px
        xs: '0.90625rem', // 14.5px 
        base: '1rem', // 16px
        18: '1.125rem', // 18px 
        lg: '1.15625rem', // 18.5px
        20: '1.25rem', // 20px
        21: '1.3125rem', // 21px
        xl: '1.40625rem', // 22.5px
        24: '1.5rem', // 24px
        28: '1.75rem', // 28px
        29: '1.8125rem', // 29px
        '2xl': '1.875rem', // 30px
        '3xl': '1.95125rem',// 31.22px
        '4xl': '2rem', // 32px
        '5xl': '2.23rem', // 35.68px
        '6xl': '3.345rem', // 53.52px
      },
      boxShadow: {
        '3xl': '0px 10px 10px 0px rgba(0, 0, 0, 0.07)',
        '4xl': '0px 10px 20px 0px rgba(0, 60, 106, 0.15)',
        '5xl': '0px 15px 10px 0px rgba(0, 61, 165, 0.07)',
        '6xl': '0px 9px 10px 0px rgba(0, 60, 106, 0.07)'
      },
      zIndex: {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
    },
    colors: {
      principal: {
        150: "#FFFFFF", //Blanco
        50: "#D8D8D8", //Gris chips
        100: "#005EAA", //Azul general
        180: "#003DA5", // Azul sidebar
        190: "#5AC3F0", // Azul principal
        200: "#F7F8FC", //Fondo pantallas
        250: "#ECECEC", //Gris tarjetas info
        300: "#E7E7E7 ", //Gris Hover
        320: "#777", // Texto gris
        330: "#979797", // Borde inputs
        350: "#333333", //Texto negro
        400: "#C7D2E6", //Gris azulado
        450: "#777777", //Gris texto pequeño
        500: "#FD536D", //red trash
        550: "#ECECEC",
        600: "#D7D7D7", //Gris separadores
        650: "#F9FAFB", // Fondo gris body
        680: "#F6F6F6", // Gris
        700: "#97D700", // Verde
        750: "#01C4AE", // IPS fondo
        800: "#313131A6" //Modal background
      },
    },
  },
};

