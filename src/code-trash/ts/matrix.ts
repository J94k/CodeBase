const getRowSoldiers = (row: number[]): number => {
  return JSON.stringify(row).match(/1/g)?.length || 0
}

function kWeakestRows(mat: number[][], k: number): number[] {
  const arrOfSoldiersAmount = mat
    .map((arr, i) => {
      return {
        soldiers: getRowSoldiers(arr),
        sourceIndex: i,
      }
    })
    .sort((s1, s2) => {
      return s1.soldiers - s2.soldiers
    })

  return arrOfSoldiersAmount.slice(0, k).map(({ sourceIndex }) => sourceIndex)
}

function diagonalSum(mat: number[][]): number {
  let sum = 0
  let rowIndexL = 0
  let rowIndexR = mat[0].length - 1

  for (let row = 0; row < mat.length; row++) {
    const n1 = mat[row][rowIndexL]
    const n2 = mat[row][rowIndexR]

    if (rowIndexR && rowIndexL !== rowIndexR) {
      sum += n1 + n2
    } else {
      sum += n1
    }

    if (rowIndexL === rowIndexR || rowIndexL + 1 === rowIndexR || rowIndexR - 1 === rowIndexL) {
      rowIndexL--
      rowIndexR++
    } else {
      rowIndexL++
      rowIndexR--
    }
  }

  return sum
}
