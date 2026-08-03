// --- ARQUIVO 1: utils.js ---
// const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`;
// module.exports = { formatarMoeda };

// --- ARQUIVO 2: index.js ---
// const { formatarMoeda } = require('./utils');

// Simulação do funcionamento de módulos no terminal:
const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`;
console.log("Preço final formatado:", formatarMoeda(49.9));