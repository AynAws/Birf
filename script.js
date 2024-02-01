const img1 = 'imgs/BCCC248E-C86B-4B42-A23F-62090F5F5667.jpeg';
const title1 = '2007';
const text1 = 'Febuary 20th 2007, a future human is born.';
const alt1 = 'A picture of the sexiest man alive.';
const but1 = 'but-re1';
const href1 = '';

const img2 = 'imgs/gbay.webp';
const title2 = '2007';
const text2 = 'Washington court of appeals denies people deemed enemy combatants the ability to appeal their torture.';
const alt2 = 'Prisoners are chained up with something covering their eyes and ears in a yard.';
const but2 = 'but-re2';
const href2 = 'https://www.justice.gov/osg/brief/paracha-v-bush-response';

const img5 = 'imgs/geewillickers.jpg';
const title5 = '1962';
const text5 = 'First orbital flight wth humans on board.';
const alt5 = 'Picture of the small capsule of the Mercury Atlas 6.';
const but5 = 'but-re5';
const href5 = 'https://www.nasa.gov/missions/project-mercury/mercury-atlas-6/'

const img4 = 'imgs/notalcohol.jpg';
const title4 = '1933';
const text4 = 'Congress ratifies the Blaine Act, sending the 21st amendment to states for approval.';
const alt4 = 'The chemical structure of alcohol.';
const but4 = 'but-re4';
const href4 = 'https://en.wikipedia.org/wiki/Blaine_Act'

const img3 = 'imgs/edward6.jpg';
const title3 = '1547';
const text3 = 'King Edward the 6th is crowned at nine years old.';
const alt3 = 'A picture of King Edward the 6th.';
const but3 = 'but-re3';
const href3 = 'https://en.wikipedia.org/wiki/Edward_VI';

let click = 4;

// I ran out of time, ignore this
function clicks() {
$('button').mousedown(function(event) {
    switch (event.which) {
        case 1:
            click = 1;
            break;
        case 2:
            click = 2;
            break;
        case 3:
            click = 3;
            break;
        default:
            alert('You have a strange mouse!');
    }
});
if (click === 1) {
}
}

function button(img, title, text, alt, but, butt1, butt2, butt3, butt4) {
    document.getElementById('img-re').src = img;
    document.getElementById('title-re').textContent = title;
    document.getElementById('text-re').textContent = text;
    document.getElementById('img-re').alt = alt;
    document.getElementById(but).classList.remove('btn-secondary');
    document.getElementById(but).classList.add('btn-primary');
    document.getElementById(butt1).classList.remove('btn-primary', 'btn-success');
    document.getElementById(butt2).classList.remove('btn-primary', 'btn-success');
    document.getElementById(butt3).classList.remove('btn-primary', 'btn-success');
    document.getElementById(butt4).classList.remove('btn-primary', 'btn-success');
    document.getElementById(butt1).classList.add('btn-secondary');
    document.getElementById(butt2).classList.add('btn-secondary');
    document.getElementById(butt3).classList.add('btn-secondary');
    document.getElementById(butt4).classList.add('btn-secondary');
    document.getElementById(but1).textContent = 'The more important 2007';
}

function source(but, href) {
    //document.getElementById(but).href = href;
    document.getElementById(but).classList.add('btn-success');
    if (but === 'but-re1') {
        document.getElementById(but).textContent = 'I am the source.';
    }
    document.getElementById(but).src = href;
}

window.onload = button(img1, title1, text1, alt1, but1, but2, but3, but4, but5);