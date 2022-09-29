import { Link } from 'gatsby'
import { ICardBlogAllContent } from './typings'
import { Image } from 'src/components/ui/Image'

function CardBlog({ title, link, image, text, alt, target }: ICardBlogAllContent) {
  return (
    <article className="blog__card-item">
      <Image src={image} alt={alt ?? ''} width={304} height={192} />

      <div className="blog__card-content">
        <h3 className="blog__card-title">{title}</h3>
        <p className="blog__card-text">{text}</p>
        <Link to={link} title={title} className="blog__card-link" target={target ? '_blank' : '_self'}>
          Leia Mais
        </Link>
      </div>
    </article>
  )
}

export default CardBlog
