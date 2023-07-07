import  Express  from "express";

const app = Express();

app.use(Express.json());

app.get("Respuestas", (req, res) => {
    //TODO EL CODIGO DEL ENDPOINT
    // llamar al servicio correspondiente
    // armar el objeto response
    // devolver response
});

app.listen(5000);


