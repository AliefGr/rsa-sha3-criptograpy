const crypto = require('crypto');
const fs = require('fs');

// Load kunci dari file
const privateKey = fs.readFileSync('src/keys/private.pem', 'utf8');
const publicKey = fs.readFileSync('src/keys/public.pem', 'utf8');

// Fungsi untuk membuat tanda tangan digital
function createSignature(data) {
    const signer = crypto.createSign('sha3-256'); // Menggunakan SHA-3
    signer.update(data);
    signer.end();
    const signature = signer.sign(privateKey, 'hex'); // Tanda tangan dalam format hex
    return signature;
}

// Fungsi untuk memverifikasi tanda tangan digital
function verifySignature(data, signature) {
    const verifier = crypto.createVerify('sha3-256'); // Menggunakan SHA-3
    verifier.update(data);
    verifier.end();
    return verifier.verify(publicKey, signature, 'hex'); // True jika valid
}

module.exports = { createSignature, verifySignature };
