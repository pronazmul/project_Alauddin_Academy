export const filterTable = (
  search = '',
  page = 1,
  entities = 10,
  array = []
) => {
  let searchedData = search
    ? searchInJsonArray(search, array, ['avatar'])
    : array

  let {
    page: p,
    pages,
    startAt,
    endAt,
    paginatedArray,
  } = paginateAnArray(page, entities, searchedData)

  return {
    pages,
    page: p,
    totalData: searchedData,
    startAt,
    endAt,
    filteredData: paginatedArray,
  }
}

/**
 * @description - This function is used to make Pagination Object using Array
 * @param {number}  Number of  page
 * @param {number}  Number of Entities to be shown in one Page
 * @param {array}  Array to make Pagination
 * @returns {object}  Pagination Object {currentPageNumeber, numberOfPages, startAtEntities, endAtEntities, paginatedData}
 */
const paginateAnArray = (page = 1, entities, array) => {
  let pages = Math.ceil(array.length / entities)
  let skipData = entities * (page - 1)
  let paginatedArray = array.slice(skipData, skipData + entities)
  return {
    page,
    pages,
    paginatedArray,
    startAt: skipData,
    endAt: paginatedArray.length + skipData,
    total: array.length,
  }
}

/**
 * @description - This function is used to search by regular expression inside json array
 * @param {String}  Search string
 * @param {array}  Array to be searched
 * @param {array}  Array values to be skipped while search (Optional)
 * @returns {array}  Filtered array
 */
export const searchInJsonArray = (search, array, skipValues = []) => {
  let regex = new RegExp(search, 'i')
  return array.filter((i) =>
    Object.keys(i).some((j) =>
      skipValues.length && skipValues.includes(j) ? false : i[j].match(regex)
    )
  )
}

/**
 * @description - This function is used Toggle a boolean value in json array and all other values of same propety will be false
 * @param {id}  find by id of the json array
 * @param {property}  object property to be toggled
 * @param {array}  Json Array which will be toggled by a specific obejct property
 * @returns {array}  Filtered array
 */
export const booleanTogollerInJsonArray = (id, property, array) => {
  return array.map((item) =>
    item.id === id
      ? { ...item, [property]: !item[property] }
      : { ...item, [property]: false }
  )
}
/**
 * @description - This function takes an object filter by truthy values and return an object of truthy values
 * @param {object}  Main Object with all truthy and falsy values
 * @returns {object}  Object with all truthy values
 */
export const truthyValuesFromObject = (object) => {
  return Object.keys(object)
    .filter((key) => Boolean(object[key]))
    .reduce((state, value) => {
      return { ...state, [value]: object[value] }
    }, {})
}
