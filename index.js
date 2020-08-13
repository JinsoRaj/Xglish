const express = require('express');
const app = express();
const Transliterator = require('libindic-transliteration');
const t = new Transliterator();
 
app.use(express.json());
 
const obj = [{
    input: 'This',
    output: 'is'
},
{
    input: 'just',
    output: 'a simple'
},
{
    input: 'API by',
    output: '@JinsoRaj'
}
];

// get all obj
app.get('/convert', (req, res) => {
res.send(obj);
});

// get obj by input
app.get('/convert/:input', (req, res) => {
var p = req.params.input;
var mlen = t.transliterate_ml_en(p);
var hien = t.transliterate_hi_en(p);
var knen = t.transliterate_kn_en(p);
j = [{
    input: p,
    output: mlen
},
{
    input: p,
    output: hien
},
{
    input: p,
    output: knen
}
];
res.send(j);
});

 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));