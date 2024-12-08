export const useFormatKeys = () => {
  const formatObjectKeys = <T extends Record<string, any>>(obj: T) => {
    const formattedEntries = Object.entries(obj).map(([key, value]) => {
      // Convert camelCase or regular text to UPPERCASE with spaces
      const formattedKey = key
        // Add space before capital letters
        .replace(/([A-Z])/g, ' $1')
        // Remove any existing spaces at the start
        .trim()
        // Convert the entire string to uppercase
        .toUpperCase()
      
      return {
        key: formattedKey,
        value: value
      }
    })

    return formattedEntries
  }

  return {
    formatObjectKeys
  }
}

// Usage Example:
/*
const { formatObjectKeys } = useFormatKeys()

const bankObj = {
  accountNumber: '814762503',
  bankName: 'OPay Digital Services Limited (OPay)',
  bankSortCode: '999992',
  accountName: 'MARQUIS OKPANI ABAH'
}

const formatted = formatObjectKeys(bankObj)
// Result:
// [
//   { key: 'ACCOUNT NUMBER', value: '814762503' },
//   { key: 'BANK NAME', value: 'OPay Digital Services Limited (OPay)' },
//   { key: 'BANK SORT CODE', value: '999992' },
//   { key: 'ACCOUNT NAME', value: 'MARQUIS OKPANI ABAH' }
// ]
*/