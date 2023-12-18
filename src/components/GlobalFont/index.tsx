import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`
    /* latin */
    @font-face {
      font-family: 'GothamBold';
      src: url('./Gotham-Font/GothamBold.ttf') format('truetype');
      font-weigth: 700;
    }
    @font-face {
      font-family: 'GothamMedium';
      font-weigth: 700;
      src: url('./Gotham-Font/GothamMedium_1.ttf') format('truetype');
    }
      `}
    />
);

export default Fonts;
