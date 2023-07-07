import mssql from "mssql";
import config from "../db";

export const crearRespuesta = async(respuesta) => {
    const conn = await mssql.connect(config);
    const query = `INSERT INTO [dbo].[Respuestas]
    ([UserId]
    ,[RespuestaSeleccionada]
    ,[EsRespuestaCorrecta]
    ,[FechaCreacion]
    ,[IdResp]
    ,[IdPregunta])
VALUES
    (@UserId
    ,@RespuestaSeleccionada
    ,@EsRespuestaCorrecta
    ,@FechaCreacion
    ,@IdResp
    ,@IdPregunta)`

    const results = await conn.request()
    .input ("UserId", mssql.Int, respuesta.respuesta)
    .input ("RespuestaSeleccionada", mssql.VarChar, respuesta.respuesta)
    .input ("EsRespuestaCorrecta", mssql.Bit, respuesta.respuesta)
    .input ("FechaCreacion", mssql.Date, respuesta.respuesta)
    .input ("IdResp", mssql.Int, respuesta.respuesta)
    .input ("IdPregunta", mssql.Int, respuesta.respuesta)
    .query(query);
}