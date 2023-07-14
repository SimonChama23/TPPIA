import  Express  from "express";
import { todasLasPregunta, azarPregunta, crearPregunta, eliminarPregunta, actualizarPregunta} from './servicios/preguntasServicio.js';
import { crearRespuesta } from './servicios/respuestasServicio.js';

const app = Express();

app.use(Express.json());

app.get("/preguntas", async (req, res) => {
    const allPreguntas = await todasLasPregunta();
    return res.status(200).json(allPreguntas);
});

app.get("/preguntasAzar", async (req, res) => {
    const randomPreguntas = await azarPregunta();
    return res.status(200).json(randomPreguntas);
});

app.put("/preguntas", async (req, res) => {
    const preguntasActualizada = await actualizarPregunta(req.body);
    if (preguntasActualizada === 1) {
        return res.status(200).json(preguntasActualizada);
    } else {
        return res.status(400).json({error: "Hubo un problema"});
    }
})

app.delete('/preguntas', async (req, res) => {
    const id = req.body.id
    const preguntaEliminada = await eliminarPregunta(id);
    if (preguntaEliminada === 1) {
        return res.status(200).json(preguntaEliminada);
    } else {
       return  res.status(400).json({error: "Hubo un problema"});
    }


})

app.post("/respuestas", async (req, res) => {
    const respuestaCreada = await crearRespuesta(req.body);
    if (respuestaCreada === 1) {
        return res.status(200).json(respuestaCreada);
    } else {
        return res.status(400).json({error: "Hubo un problema"});
    }
})

app.post("/preguntas", async (req, res) => {
    const preguntaCreada = await crearPregunta(req.body);
    if (preguntaCreada === 1) {
        return res.status(200).json(preguntaCreada);
    } else {
        return res.status(400).json({error: "Hubo un problema"});
    }
})

app.listen(5000);           


