export function descendingOrder(n: number):number {
    const newNumber = n.toString().split('')
    const mapped = newNumber.map(Number).sort((n1,n2) => n2 - n1).join('');
    const mappedToNumber = Number(mapped)
    return mappedToNumber
  }

  descendingOrder(1234)