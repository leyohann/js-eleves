fetch('./etudiants.json')
    .then(res => res.json())
    .then((data) => {
        for ( let row of data) {
        champ = console.log(row);
        para = document.createElement("p");
        para.innerText = champ;
        document.body.appendChild(para);
        }
      });