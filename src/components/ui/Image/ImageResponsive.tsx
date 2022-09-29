const ImageResponsive = ({ src, srcMobile, alt }: IImage) => {

  if(!src && !srcMobile){
    return null
  }

  return (
    <picture>
      <source media="(min-width: 959px)" srcSet={src} />
      <source media="(max-width: 959px)" srcSet={srcMobile} />
      <img src={src} alt={alt ?? "Image"} />
    </picture>
  );
};

export default ImageResponsive
