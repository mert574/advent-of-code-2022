Array.prototype.sortDesc = function() {
  return this.slice().sort((a, b) => b - a)
}

Array.prototype.sortAsc = function() {
  return this.slice().sort((a, b) => a - b)
}

Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc + curr, 0)
}

Array.prototype.first = function() {
  return this[0]
}

Array.prototype.last = function() {
  return this[this.length - 1]
}

Array.prototype.exceptLastN = function(n = 1) {
  return this.slice(0, -n)
}

Array.prototype.exceptFirstN = function(n = 1) {
  return this.slice(n)
}

Array.prototype.uniq = function() {
  return [...new Set(this)]
}

Array.prototype.intersection = function(arr) {
  return this.filter(it => arr.includes(it))
}

Array.prototype.subtract = function(arr) {
  return this.filter(it => !arr.includes(it))
}

Array.prototype.add = function(arr) {
  return [].concat(this, arr)
}

Array.prototype.compact = function() {
  return this.filter(it => !!it)
}

Array.prototype.tap = function(callback) {
  callback.call(this)
  return this
}

Array.prototype.log = function() {
  console.log(this)
  return this
}

Array.prototype.splitIntoChunks = function(chunkSize) {
  const chunks = []
  for (let i = 0; i < this.length; i += chunkSize) {
    chunks.push(this.slice(i, i + chunkSize))
  }
  return chunks
}