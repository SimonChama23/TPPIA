import  Express  from "express";
import { todasLasPregunta, azarPregunta, crearPregunta, eliminarPregunta} from './servicios/preguntasServicio.js';
import { crearRespuesta } from './servicios/respuestasServicio.js';

const app = Express();

app.use(Express.json());

app.get("/preguntas", async (req, res) => {
    const allPreguntas = await todasLasPregunta();
    res.status(200).json(allPreguntas);
});

app.get("/preguntasAzar", async (req, res) => {
    const randomPreguntas = await azarPregunta();
    res.status(200).json(randomPreguntas);
});

app.delete('/preguntas', async (req, res) => {
    const id = req.body.id
    const preguntaEliminada = await eliminarPregunta(id);
    return res.status(200).json(preguntaEliminada)
})

app.post("/respuestas", async (req, res) => {
    const respuestaCreada = await crearRespuesta(req.body);
    if (respuestaCreada === 1) {
        res.status(200).json(respuestaCreada);
    } else {
        res.status(400).json({error: "Hubo un problema"});
    }
})

app.post("/preguntas", async (req, res) => {
    const preguntaCreada = await crearPregunta(req.body);
    if (preguntaCreada === 1) {
        res.status(200).json(preguntaCreada);
    } else {
        res.status(400).json({error: "Hubo un problema"});
    }
})

app.listen(5000);           


