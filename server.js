const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

let gatos = [
  {codigo:"domestico",
  nombre: "Gato domestico", 
  imagen:"gato-domestico.jpg",  
  comida_favorita: "leche y atún", 
  edad:2, 
  duerme_en:["sobre el escritorio", "sobre la cama"]
},
  {codigo:"salvaje",
  nombre: "Gato salvaje", 
  imagen: "lince.jpg" , 
  comida_favorita: "carne", 
  edad:3, 
  duerme_en:["bajo la cama", "lugares soleados"]
},
  {codigo:"leon",
  nombre: "León", 
  imagen:"leon.jpg", 
  comida_favorita: "animales hervíboros", 
  edad:5, 
  duerme_en:["bajo la sombra", "junto a otros leones"]
}];

app.get("/gatos", (req, res) => {

    res.render("gatos", {gatos:gatos});    
  });
  

  app.get("/:codigo", (req, res) => {
    let gatoenviar;
    const codigo=req.params.codigo;

    for (let gato of gatos) {
      if(codigo==gato.codigo){
        gatoenviar=gato;
      }
   
    }
    if(gatoenviar!=undefined)
  
    res.render("detalle", {gato:gatoenviar});
    else
    res.send("vuelve a escribir bien")
  });



app.listen(port, () => console.log(`Listening on port: ${port}`));
