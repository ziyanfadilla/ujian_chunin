const removeItem = (arr) => {
  const nama = [...arr]
  return nama.filter((item,index ) => {
    return nama.indexOf(item) === index
    

  }).sort().join('')
}
console.log(removeItem("pluginsangatkerensekali"));