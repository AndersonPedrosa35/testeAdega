export interface AwardsProductProps {
  DescriptionAward: string
  ImageAward: string
  TitleAward: string
}

export const serealizeAwardsProduct = ({ DescriptionAward, ImageAward, TitleAward }: AwardsProductProps) => ({
  description: DescriptionAward,
  image: ImageAward,
  title: TitleAward
})

export default async function getAwardsProduct(id: string) {
  return fetch(`https://anderson--adegamarchehlg.myvtex.com/_v/product/awards/${id}`)
    .then((res) => res.json()).catch((err) => console.error(err))
}