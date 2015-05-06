(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['isLittleEndian'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.isLittleEndian = factory();
    }
}(this, function () {
    return ((new Uint32Array((new Uint8Array([1,2,3,4])).buffer))[0] === 0x04030201);
}));
