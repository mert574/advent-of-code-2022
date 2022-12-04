Array.prototype.sortDesc = function() {
  return this.sort((a, b) => b - a)
}

Array.prototype.sortAsc = function() {
  return this.sort((a, b) => a - b)
}

Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc+curr, 0)
}

Array.prototype.first = function() {
  return this[0]
}

Array.prototype.last = function() {
  return this[this.length - 1]
}

Array.prototype.exceptLast = function() {
  return this.slice(0, -1)
}

Array.prototype.exceptFirst = function() {
  return this.slice(1)
}

Array.prototype.uniq = function() {
  return [...new Set(this)]
}

Array.prototype.intersection = function(arr) {
  return this.filter(item => arr.includes(item))
}

Array.prototype.log = function() {
  console.log(this)
  return this
}

Array.prototype.groupIntoChunks = function(chunkSize) {
  let chunks = []
  for (let i = 0; i < this.length; i += chunkSize) {
    chunks.push(this.slice(i, i + chunkSize))
  }

  return chunks
}