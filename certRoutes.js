const express = require('express');
const router = express.Router();
const { Blockchain, Block } = require('../blockchain/Blockchain');

const certChain = new Blockchain();

router.post('/issueCertificate', (req, res) => {
  const certData = req.body;
  const newBlock = new Block(certChain.chain.length, Date.now(), certData);
  certChain.addBlock(newBlock);
  res.status(201).json({ message: 'Certificate issued', block: newBlock });
});

router.get('/getBlockchain', (req, res) => {
  res.json(certChain.chain);
});

router.get('/verifyCertificate/:id', (req, res) => {
  const cert = certChain.chain.find(block => block.data.studentID === req.params.id);
  if (cert) {
    res.json({ valid: true, certificate: cert });
  } else {
    res.json({ valid: false, message: 'Certificate not found' });
  }
});

module.exports = router;
