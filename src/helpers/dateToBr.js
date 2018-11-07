

const months = {
    1: 'janeiro',
    2: 'fevereiro',
    3: 'março',
    4: 'abril',
    5: 'maio',
    6: 'junho',
    7: 'julho',
    8: 'agosto',
    9: 'setembro',
    10: 'outubro',
    11: 'novembro',
    12: 'dezembro'
}

const formatMonthDateInExtensive = date => {    
    const splitDate = date.replace('/', '-').split('-');   
    const month =  months[parseInt(splitDate[1], 10)] || splitDate[1]; 
    const dateInExtensive = splitDate[0]+' de '+month+' '+splitDate[2];
   return dateInExtensive;
}

export { formatMonthDateInExtensive };