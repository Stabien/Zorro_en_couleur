/**
 * @function getCloths
 * @returns {Promise}
 */
export const getCloths = async () => {
  const response = await fetch('http://localhost:4000/api/cloth')
  const data = await response.json()

  return data
}

/**
 * @function getProducts
 * @returns {Promise}
 */
export const getProducts = async () => {
  const response = await fetch('http://localhost:4000/api/product')
  const data = await response.json()

  return data
}
