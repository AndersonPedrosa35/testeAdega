import { Banner, BannerImage } from '@faststore/ui'

const ImageResponsive = ({ 
  src,
  srcMobile,
  alt
}: IImage) => {

  if(!src && !srcMobile){
    return null
  }
  return (

    <Banner>
      <BannerImage>
        <img src={src} alt={alt ?? "Image"} />
      </BannerImage>
    </Banner>
  );
};

export default ImageResponsive
