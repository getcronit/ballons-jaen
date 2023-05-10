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
  overflow-x: hidden;
  overflow-y: ${noScroll ? 'scroll' : 'hidden'};
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
  }

  .parallax__cover {
    //background: #fff;
    display: flex;
    align-items: flex-end;
    //position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  ${parallaxMake(3)}

  #section07 a {
    position: relative;
  }
  #section07 a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid red;
    border-bottom: 1px solid red;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb07 2s infinite;
    animation: sdb07 2s infinite;
    opacity: 0;
    box-sizing: border-box;
  }
  #section07 a span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  #section07 a span:nth-of-type(2) {
    top: 16px;
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
  }
  #section07 a span:nth-of-type(3) {
    top: 32px;
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
  }
  @-webkit-keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
