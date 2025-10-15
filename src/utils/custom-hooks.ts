import moment from "moment";

export default function formatDateParts(dateStr: any) {
		return {
			fullDate: moment(dateStr).format("ddd, DD MMM"),
			dayOnly: moment(dateStr).format("DD"),
			timeOnly: moment(dateStr).format("h:mm a"),
             longDate: moment(dateStr).format("D MMM, YYYY"),
		};
	}

	export const generateQueryParams = (args: any) => {
  let str = ''
  let replace = ''
  for (const key in args) {
    if (typeof args[key] === 'object') {
      for (const key1 in args[key]) {
        str += `&filters[${key1}]=${args[key][key1]}`
        replace = str.slice(1)
      }
    } else {
      str += `&${key}=${args[key]}`
      replace = str.slice(1)
    }
  }
  return replace
}

export const generateQueryParams2 = (args: any) => {
  const params: string[] = []

  for (const key in args) {
    const value = args[key]

    // Skip empty values
    if (value === '' || value === null || value === undefined) continue

    // Handle nested filters object
    if (key === 'filters' && typeof value === 'object') {
      for (const nestedKey in value) {
        if (value[nestedKey] !== '') {
          params.push(`filters[${nestedKey}]=${encodeURIComponent(value[nestedKey])}`)
        }
      }
    } else {
      params.push(`${key}=${encodeURIComponent(value)}`)
    }
  }

  return params.join('&')
}