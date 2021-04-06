export function pigIt(p:string):string {
    const toArr:string[] = p.split(' ')
    const mapping:string[]  = toArr.map((item:string, index:number):string => {
      const spliting:string[] = item.split('')
      const [ head, ...rest] = item
      const joinedrest:string= rest.join('')
      const plusAy:string = head.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/) ? head : head + 'ay'
      const together:string = joinedrest.concat(plusAy) 
      return together
    })
  const joinedmap:string = mapping.join(' ')
  console.log(joinedmap)
  return joinedmap
  }

  pigIt('uisQay ustodietcay psosiay ustodescay !')