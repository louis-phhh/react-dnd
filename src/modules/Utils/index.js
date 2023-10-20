
export function swapArrayLocs(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]

  return [...arr];
}

export function moveItemToAnotherArray(src, srcIdx, dest, destIdx) {
  const newSrc = [...src];
  const newDest = [...dest];
  const itemToMove = src[srcIdx];

  newSrc.splice(srcIdx, 1);
  newDest.splice(destIdx, 0, itemToMove);

  return [newSrc, newDest];
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}