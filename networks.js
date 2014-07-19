var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('faf2efb4'),
  addressVersion: 63,
  privKeyVersion: 191
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('c4873c989047eb6bdad13bab1bff7dd2e6822902b6587b1e096bc43d5dffa326'),
    merkle_root: hex('26a3ff5d3dc46b091e7b58b6022982e6d27dff1bab3bd1da6beb4790983c87c4'),
    height: 0,
    nonce: 261836,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405769613,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    'seed.sdcoin.co'
  ],
  defaultClientPort: 51737
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0711050b'),
  addressVersion: 0x7f,
  privKeyVersion: 255,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('726fad846b2d5101883f0d5fea8f732d8a49ec0828c8ed475238c1870a910000'),
    merkle_root: hex('26a3ff5d3dc46b091e7b58b6022982e6d27dff1bab3bd1da6beb4790983c87c4'),
    height: 0,
    nonce: 55887,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405769613,
    bits: 0x1f00ffff,
  },
  dnsSeeds: [
    'testnet-seed.sdcoin.co'
  ],
  defaultClientPort: 51997
};
