import {css, Global} from '@emotion/react'

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 100;
        src: local('poppins-v20-latin-100'),
          url(/fonts/poppins-v20-latin-100.woff) format('woff'),
          url(/fonts/poppins-v20-latin-100.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 200;
        src: local('poppins-v20-latin-200'),
          url(/fonts/poppins-v20-latin-200.woff) format('woff'),
          url(/fonts/poppins-v20-latin-200.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 300;
        src: local('poppins-v20-latin-300'),
          url(/fonts/poppins-v20-latin-300.woff) format('woff'),
          url(/fonts/poppins-v20-latin-300.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 400;
        src: local('poppins-v20-latin-regular'),
          url(/fonts/poppins-v20-latin-regular.woff) format('woff'),
          url(/fonts/poppins-v20-latin-regular.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 500;
        src: local('poppins-v20-latin-500'),
          url(/fonts/poppins-v20-latin-500.woff) format('woff'),
          url(/fonts/poppins-v20-latin-500.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 600;
        src: local('poppins-v20-latin-600'),
          url(/fonts/poppins-v20-latin-600.woff) format('woff'),
          url(/fonts/poppins-v20-latin-600.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 700;
        src: local('poppins-v20-latin-700'),
          url(/fonts/poppins-v20-latin-700.woff) format('woff'),
          url(/fonts/poppins-v20-latin-700.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 800;
        src: local('poppins-v20-latin-800'),
          url(/fonts/poppins-v20-latin-800.woff) format('woff'),
          url(/fonts/poppins-v20-latin-800.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Poppins';
        font-weight: 900;
        src: local('poppins-v20-latin-900'),
          url(/fonts/poppins-v20-latin-900.woff) format('woff'),
          url(/fonts/poppins-v20-latin-900.woff2) format('woff2');
      }
      @font-face {
        font-style: normal;
        font-family: 'Red Buttery';
        font-weight: 400;
        src: local('red_buttery-webfont'),
          url(/fonts/red_buttery-webfont.woff) format('woff'),
          url(/fonts/red_buttery-webfont.woff2) format('woff2');
        font-display: swap;
      }
    `}
  />
)

export default Fonts
