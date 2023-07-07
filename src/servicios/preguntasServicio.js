import mssql from "mssql";
import config from "../db";

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
    .input ("Opcion1", mssql.VarChar, pregunta.pregunta)
    .input ("Opcion2", mssql.VarChar, pregunta.pregunta)
    .input ("Opcion3", mssql.VarChar, pregunta.pregunta)
    .input ("Opcion4", mssql.VarChar, pregunta.pregunta)
    .input ("RespeustaCorrecta", mssql.VarChar, pregunta.pregunta)
    .input ("FechaCreacion", mssql.Date, pregunta.pregunta)
    .query(query);
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
}

export const todasLasPregunta = async() => {
    const conn = await mssql.connect(config);
    const query = `SELECT [Pregunta]
    ,@Opcion1
    ,@Opcion2
    ,@Opcion3
    ,@Opcion4
    ,@RespuestaCorrecta
    ,@FechaCreacion
    ,@Id
FROM [dbo].[Preguntas]`

}