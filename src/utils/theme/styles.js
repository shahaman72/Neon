import { mode } from "@chakra-ui/theme-tools";
// import "@fontsource/inter";
// import "@fontsource/anaheim";
// import "@fontsource/nunito-sans";
// import "@fontsource/el-messiri";

export const globalStyles = {
  colors: {
    brandGradient: "linear-gradient(135deg, #00A7B1 0%, #347175 100%)",
    brand: {
      100: "#e6f6f7",
      200: "#cceef0",
      300: "#99dce1",
      400: "#4dc2ca",
      500: "#00767d",
      600: "#0097a1",
      700: "#00767d",
      800: "#00545a",
      900: "#003236",
    },
    brandScheme: {
      100: "#e6f6f7",
      200: "#cceef0",
      300: "#99dce1",
      400: "#4dc2ca",
      500: "#00767d",
      600: "#0097a1",
      700: "#00767d",
      800: "#00545a",
      900: "#003236",
    },
    brandTabs: {
      100: "#e6f6f7",
      200: "#cceef0",
      300: "#99dce1",
      400: "#4dc2ca",
      500: "#00a8b3",
      600: "#0097a1",
      700: "#00767d",
      800: "#00545a",
      900: "#003236",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#003236",
      800: "#1B262C",
      900: "#161616",
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        // fontFamily: "DM Sans",
        // fontFamily: `"Inter", sans-serif`,
        // fontFamily: `"Anaheim", sans-serif`,
        fontFamily: `"Nunito Sans", sans-serif`,

        // fontFamily: `"El Messiri", sans-serif`,
        // letterSpacing: "0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        // fontFamily: "DM Sans",
        // fontFamily: `"Inter", sans-serif`,
        // fontFamily: `"El Messiri", sans-serif`,
        fontFamily: `"DM Sans", sans-serif`,

        // fontFamily: `"Anaheim", sans-serif`,
      },
    }),
  },
};
