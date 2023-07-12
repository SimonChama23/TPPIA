import mssql from "mssql";
import config from "../db.js";

export const crearRespuesta = async(respuesta) => {
    const conn = await mssql.connect(config);
    const query = `INSERT INTO [dbo].[Respuestas]
    ([UserId]
    ,[RespuestaSeleccionada]
    ,[EsRespuestaCorrecta]
    ,[FechaCreacion]
    ,[IdPregunta])
VALUES
    (@UserId
    ,@RespuestaSeleccionada
    ,@EsRespuestaCorrecta
    ,@FechaCreacion
    ,@IdPregunta)`

    const results = await conn.request()
    .input ("UserId", mssql.Int, respuesta.userId)
    .input ("RespuestaSeleccionada", mssql.VarChar, respuesta.respuesta)
    .input ("EsRespuestaCorrecta", mssql.Bit, respuesta.respuesta)
    .input ("FechaCreacion", mssql.Date, new Date())
    .input ("IdPregunta", mssql.Int, respuesta.respuesta)
    .query(query);

    return results.rowsAffected[0];
}