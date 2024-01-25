const img1 = '';
const title1 = '2007';
const text1 = '';
const alt1 = 'A picture of the sexiest man alive.';

const img2 = '';
const title2 = '';
const text2 = '';
const alt2 = '';

const img3 = '';
const title3 = '';
const text3 = '';
const alt3 = '';

const img4 = '';
const title4 = '';
const text4 = '';
const alt4 = '';

const img5 = '';
const title5 = '';
const text5 = '';
const alt5 = '';

function button(img, title, text, alt) {
    document.getElementById('img-re').src = img;
    document.getElementById('title-re').textContent = title;
    document.getElementById('text-re').textContent = text;
    document.getElementById('img-re').alt = alt;
}

window.onload(button(img1, title1, text1, alt1));