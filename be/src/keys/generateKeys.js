const crypto = require('crypto')
const fs = require('fs')

//  Generate pasangan kunci RSA
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Panjang kunci dalam bit
    publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
});

// Simpan kunci ke file
fs.writeFileSync('src/keys/private.pem', privateKey);
fs.writeFileSync('src/keys/public.pem', publicKey);

console.log('Kunci RSA berhasil dibuat!');
