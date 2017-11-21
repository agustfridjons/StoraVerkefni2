
//búm til beiðni
var okkarBeidni = new XMLHttpRequest();
//þurfum að láta beiðnina okkar gera eitthvað
//browserinn mun gera ráð fyrir að við notum methodið open,
//látum svo open sækja gögn fyrir okkur með 'GET'

//næst viljum við gera eitthvað við sóttu gögnin
okkarBeidni.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var myndbondText = okkarBeidni.response;
      var myndbond = JSON.parse(myndbondText);

      prentaMynd(myndbond.videos[0]);
      prentaH3(myndbond.videos[0]);
      prentaP(myndbond.videos[0]);
  }
};

var legoDIV = document.getElementById('legoDIV');
var legoMYND = document.getElementById('legoRAMMI');

function prentaMynd(myndbond) {
  var mittIMG = document.getElementById('legoMYND');
  mittIMG.src = myndbond.poster;

  legoMYND.appendChild(mittIMG);
}
function prentaH3(myndbond) {
  var mittH3 = document.getElementById('lego');
  var legoA = document.createTextNode(myndbond.title);

  legoDIV.appendChild(mittH3);
  mittH3.appendChild(legoA);
};
function prentaP(myndbond) {
  var mittP = document.getElementById('legoTIMI');
  var legoB = document.createTextNode('Fyrir ', myndbond.created, ' síðan');

  legoDIV.appendChild(mittP);
  mittP.appendChild(legoB);
}

//erum núna búin að skrilgreina hvernig okkar beiðni virkar
//þá næst sendum við beðinia af stað
okkarBeidni.open('GET', 'videos.json', true);
okkarBeidni.send();


document.addEventListener('DOMContentLoaded', function () {
  // TODO keyra upp forrit
  container = document.querySelector('form');

});
