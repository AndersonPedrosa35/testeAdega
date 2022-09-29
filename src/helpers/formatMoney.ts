const FormatMoney = (value: string | number) => {
    if (!value) { 
        return 0
    }

    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

export default FormatMoney
  