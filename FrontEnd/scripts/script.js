let envoyerRequette = () => {
  let requette = new XMLHttpRequest();
  requette.open("GET", "http://localhost:3000/donnee");
  requette.send();
};
