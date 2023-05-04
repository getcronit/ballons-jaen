import {css, CSSObject} from '@emotion/react'

const parallaxMake = (parallax__layers: number) => {
  let styles: CSSObject = {}
  for (let i = 0; i <= parallax__layers; i++) {
    let x = (parallax__layers - i) / 2

    styles['.parallax__layer__' + i] = {
      transform: `translateZ(${-100 * x}px) scale(${x + 1})`
    }
  }
  return styles
}

export const Section = (noScroll?: boolean) => css`
  perspective: 100px;
  height: 210vh;
  overflow-x: hidden;
  overflow-y: ${noScroll ? 'scroll' : 'hidden'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //margin-left: -1500px;

  .parallax__layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    img {
      display: block;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
  }

  .parallax__cover {
    //background: blue;
    display: block;
    position: absolute;
    top: 90%;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 2;
  }

  ${parallaxMake(3)}
`
