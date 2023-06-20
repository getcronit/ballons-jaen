import {Settings} from 'react-slick'
import NextArrow from '../components/CustomSlider/NextArrow'
import PrevArrow from '../components/CustomSlider/PrevArrow'

export const settings: Settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
export const blogSliderSettings: Settings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,

  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 4,
        rows: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  // responsive: [
  //   {
  //     breakpoint: 700,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
}

export const partnerSliderSettings = {
  ...blogSliderSettings
}

export const brandSettings: Settings = {
  ...blogSliderSettings,
  slidesToShow: 4,
  slidesToScroll: 1
}

export const sliderDummyData = [
  {
    image: '/images/home/slides/slide1.png',
    date: '08. Februar 2022',
    title: 'Frauenlauf Dekoration',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper'
  },
  {
    image: '/images/home/slides/slide2.png',

    date: '08. Februar 2022',
    title: 'Frauenlauf Dekoration',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper'
  },
  {
    image: '/images/home/slides/slide1.png',

    date: '08. Februar 2022',
    title: 'Frauenlauf Dekoration',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper'
  },
  {
    image: '/images/home/slides/slide2.png',

    date: '08. Februar 2022',
    title: 'Frauenlauf Dekoration',
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper'
  }
]

export const customerSliderSettings: Settings = {
  dots: true,
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
        dots: true
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
