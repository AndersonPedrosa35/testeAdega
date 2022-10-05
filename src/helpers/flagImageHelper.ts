export const flagImageHelper = (value: string) => {
    const normalizedName = value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ /g, '-')
  
    return `https://adegamarchehlg.vtexcommercestable.com.br/arquivos/${normalizedName}.png`
  }
  