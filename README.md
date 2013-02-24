is-little-endian
================
Checks if your system is little endian or not.  Basically a short cut for:

    !!((new Uint32Array((new Uint8Array([1,0,0,0])).buffer))[0] & 1)

Usage
=====
Install using npm:
    
    npm install is-little-endian
    
And then just use it like this:

    if(require("is-little-endian")) {
      //Use little endian buffer
    } else {
      //Use big endian buffer
    }

Credits
=======
(c) 2013 Mikola Lysenko. BSD License