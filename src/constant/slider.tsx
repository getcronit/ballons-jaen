import { Settings } from "react-slick"
import NextArrow from "../components/CustomSlider/NextArrow"
import PrevArrow from "../components/CustomSlider/PrevArrow"

export const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
export const blogSliderSettings: Settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow out isBlack />,
  prevArrow: <PrevArrow out isBlack />,

  // responsive: [
  //   {
  //     breakpoint: 4000,
  //     settings: {
  //       slidesToShow: 4,
  //       rows: 1,
  //       slidesToScroll: 1,
  //       infinite: false,
  //       dots: false,
  //       arrows: true,
  //       nextArrow: <NextArrow out isBlack />,
  //       prevArrow: <PrevArrow out isBlack />,
  //     },
  //   },

  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],

  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
export const brandSettings: Settings = {
  infinite: true,
  speed: 100,

  responsive: [
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}

export const sliderDummyData = [
  {
    image: "/images/home/slides/slide1.png",
    date: "08. Februar 2022",
    title: "Frauenlauf Dekoration",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper",
  },
  {
    image: "/images/home/slides/slide2.png",

    date: "08. Februar 2022",
    title: "Frauenlauf Dekoration",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper",
  },
  {
    image: "/images/home/slides/slide1.png",

    date: "08. Februar 2022",
    title: "Frauenlauf Dekoration",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper",
  },
  {
    image: "/images/home/slides/slide2.png",

    date: "08. Februar 2022",
    title: "Frauenlauf Dekoration",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper",
  },
]

export const customerSliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
