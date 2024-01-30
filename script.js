const img1 = 'imgs/BCCC248E-C86B-4B42-A23F-62090F5F5667.jpeg';
const title1 = '2007';
const text1 = 'Febuary 20th 2007, a future human is born.';
const alt1 = 'A picture of the sexiest man alive.';

const img2 = 'imgs/gbay.webp';
const title2 = '2007';
const text2 = 'Washington court of appeals denies people deemed enemy combatants the ability to appeal their torture.';
const alt2 = 'Prisoners are chained up with something covering their eyes and ears in a yard.';

const img3 = 'imgs/edward6.jpg';
const title3 = '1547';
const text3 = 'King Edward the 6th is crowned.';
const alt3 = 'A picture of king Edward the 6th.';

const img4 = 'imgs/notalcohol.jpg';
const title4 = '1933';
const text4 = 'Congress ratifies the Blaine Act, sending the 21st amendment to states for approval.';
const alt4 = 'The chemical structure of alcohol.';

const img5 = 'imgs/geewillickers.jpg';
const title5 = '1962';
const text5 = '';
const alt5 = 'Picture of small the small capsule the Mercury Atlas 6.';

function button(img, title, text, alt) {
    document.getElementById('img-re').src = img;
    document.getElementById('title-re').textContent = title;
    document.getElementById('text-re').textContent = text;
    document.getElementById('img-re').alt = alt;
}

window.onload = button(img1, title1, text1, alt1);