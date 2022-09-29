import Slider from 'react-slick'

import Title from '../Title'
import Card from 'src/components/sections/ListCardsBlog/CardBlog'
import { ICardsBlog, ICardBlog } from './typings'

import './list-cards-blog.scss'

function ListCardsBlog({ title, cards }: ICardsBlog) {
    const settingsSlide = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 959,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
    }

    if (!cards.length) {
        return null
    }

    return (
        <>
            {title && <Title text={title} />}

            <Slider {...settingsSlide}>
                {cards.map(({ content, image, link }: ICardBlog, idx: number) => {
                    return (
                        <Card
                            key={idx}
                            title={content.title}
                            link={link}
                            alt={image.alt}
                            image={image.image}
                            text={content.description}
                        />
                    )
                })}
            </Slider>
        </>
    )
}

export default ListCardsBlog