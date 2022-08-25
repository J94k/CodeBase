const getRowSoldiers = (row: number[]): number => {
  return JSON.stringify(row).match(/1/g)?.length || 0;
};

function kWeakestRows(mat: number[][], k: number): number[] {
  const arrOfSoldiersAmount = mat
    .map((arr, i) => {
      return {
        soldiers: getRowSoldiers(arr),
        sourceIndex: i,
      };
    })
    .sort((s1, s2) => {
      return s1.soldiers - s2.soldiers;
    });

  return arrOfSoldiersAmount.slice(0, k).map(({ sourceIndex }) => sourceIndex);
}
