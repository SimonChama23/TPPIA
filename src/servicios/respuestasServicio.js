import mssql from "mssql";
import config from "../db.js";
import { getById } from "./preguntasServicio.js";

export const crearRespuesta = async(respuesta) => {
    const pregunta = await getById(respuesta.IdPreguntas)
    const conn = await mssql.connect(config);
    const query = `INSERT INTO [dbo].[Respuestas]
    ([UserId]
    ,[RespuestaSeleccionada]
    ,[EsRespuestaCorrecta]
    ,[FechaCreacion]
    ,[IdPreguntas])
VALUES
    (@UserId
    ,@RespuestaSeleccionada
    ,@EsRespuestaCorrecta
    ,@FechaCreacion
    ,@IdPreguntas)`

    const results = await conn.request()
    .input ("UserId", mssql.Int, respuesta.userId)
    .input ("RespuestaSeleccionada", mssql.VarChar, respuesta.RespuestaSeleccionada)
    .input ("EsRespuestaCorrecta", mssql.Bit, respuesta.RespuestaSeleccionada===pregunta.RespuestaCorrecta)
    .input ("FechaCreacion", mssql.Date, new Date())
    .input ("IdPreguntas", mssql.Int, respuesta.IdPreguntas)
    .query(query);

    return results.rowsAffected[0];
}