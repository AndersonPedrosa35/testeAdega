import { useState, useEffect } from 'react'

interface IProps {
  idProduct: string
  className?: string
}

const ProductFlagCollection = ({ idProduct, className }: IProps) => {
  const [flag, setFlag] = useState<string[]>([])

  const clusters = async () => {
    const data = await fetch(
      `https://testemiddleware--adegamarche.myvtex.com/_v/flagCollection/${idProduct}`
    ).then((response) => response.json())

    const cluster = data?.clusterHighlights

    if (cluster) {
      for (const property in cluster) {
        setFlag([...flag, cluster[property]])
      }
    }
  }

  useEffect(() => {
    clusters()
  }, [])

  return (
    <div className={className}>{flag.length ? <span>{flag[0]}</span> : ''}</div>
  )
}

export default ProductFlagCollection
