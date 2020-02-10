export default function transpose2D(array: any[][]) {
  let arrTranspose: any[][] = []

  let xPos = array.length
  let yPos = array[0].length

  for (let i = 0; i < yPos; i++) {
    arrTranspose[i] = []
    for (let j = 0; j < xPos; j++) {
      arrTranspose[i][j] = []
    }
  }

  for (let i = 0; i < array.length; i++) {
    let subArr = array[i]
    for (let j = 0; j < subArr.length; j++) {
      let item = subArr[j]
      arrTranspose[j][i] = item
    }
  }

  return arrTranspose
}
