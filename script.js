const URL = 'https://api.punkapi.com/v2/beers/';
//const URL = 'https://ghibliapi.herokuapp.com/films';

const app = document.getElementById('root');
const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

let request = new XMLHttpRequest();

request.open('GET', URL, true);

request.onload = function(){
  console.log(request);
  let data = JSON.parse(this.response);
 
  if(request.status >=200 && request.status <400){
    data.forEach(beer => {
      container.appendChild(createBeerCard(beer));
    })
  }
  else{
    const errorMessage =  document.createElement('marquee');
    errorMessage.textContent = 'It is not working';
    app.appendChild(errorMessage);
  }
}

request.send();

function createBeerCard(beer){
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const h1 = document.createElement('h1');
  h1.textContent = beer.name;

  const p = document.createElement('p');
  p.textContent = beer.description;

  card.appendChild(h1);
  card.appendChild(p);

  return card;
}