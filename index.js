module.exports = !!((new Uint32Array((new Uint8Array([1,0,0,0])).buffer))[0] & 1)
