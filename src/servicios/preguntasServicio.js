import mssql from "mssql";
import config from "../db.js";

export const crearPregunta = async(pregunta) => {
    const conn = await mssql.connect(config);
    const query = `INSERT INTO [dbo].[Preguntas]
    ([Pregunta]
    ,[Opcion1]
    ,[Opcion2]
    ,[Opcion3]
    ,[Opcion4]
    ,[RespuestaCorrecta]
    ,[FechaCreacion])
VALUES
    (@Pregunta
    ,@Opcion1
    ,@Opcion2 
    ,@Opcion3
    ,@Opcion4
    ,@RespuestaCorrecta
    ,@FechaCreacion)`
    const results = await conn.request()
    .input ("Pregunta", mssql.VarChar, pregunta.pregunta)
    .input ("Opcion1", mssql.VarChar, pregunta.Opcion1)
    .input ("Opcion2", mssql.VarChar, pregunta.Opcion2)
    .input ("Opcion3", mssql.VarChar, pregunta.Opcion3)
    .input ("Opcion4", mssql.VarChar, pregunta.Opcion4)
    .input ("RespeustaCorrecta", mssql.VarChar, pregunta.RespuestaCorrecta)
    .input ("FechaCreacion", mssql.Date, new Date())
    .query(query);

    return results.rowsAffected[0];
} 


export const actualizasPregunta = async() => {
    const conn = await mssql.connect(config);
    const query = `UPDATE [dbo].[Preguntas]
    SET [Pregunta] = @Pregunta,
       ,[Opcion1] = @Opcion1
       ,[Opcion2] = @Opcion2
       ,[Opcion3] = @Opcion3
       ,[Opcion4] = @Opcion4
       ,[RespuestaCorrecta] = @RespuestaCorrecta
       ,[FechaCreacion] = @FechaCreacion
       ,[Id] = @Id
  WHERE <Search Conditions,,>`
}

export const eliminarPregunta = async(id) => {
    const conn =await mssql.connect(config);
    const query = `DELETE FROM [dbo].[Preguntas]
    WHERE <Search Conditions,,>`
}

export const azarPregunta = async() => {
    const conn = await mssql.connect(config);
    const query = `SELECT * FROM Preguntas
    ORDER BY NewId()`

    const resultadosAzar = await conn.request().query(query);
    return resultadosAzar.recordset[0];
}

export const todasLasPregunta = async() => {
    const conn = await mssql.connect(config);
    const query = `SELECT
    Opcion1
    ,Opcion2
    ,Opcion3
    ,Opcion4
    ,RespuestaCorrecta
    ,FechaCreacion
    ,Id
FROM [dbo].[Preguntas]`
    const resultados = await conn.request().query(query);
    return resultados.recordset;
}