export const estimateFormat = (estimate: string) => {
    const date = Number(estimate.match(/\d/g))
  
    if (estimate.includes('h')) {
      return `Até ${date > 1 ? `${date} horas` : `${date} hora`}`
    }
  
    return `Até ${date > 1 ? `${date} dias` : `${date} dia`}`
  }
  