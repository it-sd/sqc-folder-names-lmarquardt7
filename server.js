const newFolderName = function (folders) {
  let result = ''
  if (folders.includes('New Folder')) {
    let i = 2
    while (i <= (folders.length + 1)) {
      if (folders.includes('New Folder (' + i + ')')) {
        i++
      } else {
        result = 'New Folder (' + (i) + ')'
        break
      }
    }
  } else {
    result = 'New Folder'
  }
  return result
}

console.log(newFolderName([]))
console.log(newFolderName(['test']))
console.log(newFolderName(['New Folder (2)']))

console.log(newFolderName(['New Folder']))
console.log(newFolderName(['New Folder', 'New Folder (2)']))
console.log(newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)']))
console.log(newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)', 'New Folder (4)']))

module.exports = { newFolderName }
