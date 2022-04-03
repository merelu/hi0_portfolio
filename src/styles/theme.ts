import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#00F5FF",
        contrastText: "#1C1F28",
      },
      secondary: {
        main: "#1c1f28",
      },
      success: {
        main: "#00F5FF",
      },
      error: {
        main: "#F06292",
      },
      divider: "#707070",
    },
    typography: {
      fontFamily: "NEXON Lv1 Gothic OTF",
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h2: "h1",
            h3: "h1",
            h4: "h1",
            h5: "h1",
            h6: "h2",
            subtitle1: "h3",
            subtitle2: "h3",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        ul {
          list-style: none;
          padding-left: 0,
        }

        @font-face {
          font-family: NEXON Lv1 Gothic OTF;
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
          font-weight: nomal;
          font-style: nomal;
        }

        @font-face {
          font-family: SBAggroB;
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
          font-weight: nomal;
          font-style: nomal;
        }

        @font-face {
          font-family: 'GmarketSansBold';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'gangwonEdu';
          src: url('/font/gangwonEdu.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `,
      },
    },
  })
);

theme.typography.h1 = {
  fontSize: "6rem",
  [theme.breakpoints.only("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "2.4rem",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.6rem",
  },
};

export default theme;
