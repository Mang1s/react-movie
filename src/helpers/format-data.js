export const formatData = (data) => {
   return data.map(obj => {
      const newObj = {}
      for (const [key, val] of Object.entries(obj)) {
         newObj[key.replace('#', '')] = val
      }
      return newObj
   })
}
