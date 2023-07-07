import mssql from "mssql";
import config from "../db";

const crearPregunta = () => {
    const conn = mssql.connect(config);
    const query = `INSERT INTO [dbo].[Preguntas]
    ([Pregunta]
    ,[Opcion1]
    ,[Opcion2]
    ,[Opcion3]
    ,[Opcion4]
    ,[RespuestaCorrecta]
    ,[FechaCreacion]
    ,[Id])
VALUES
    (@Pregunta
    ,@Opcion1
    ,@Opcion2 
    ,@Opcion3
    ,@Opcion4
    ,@RespuestaCorrecta
    ,@FechaCreacion
    ,@Id)`
}

const actualizasPregunta = () => {
    const conn = mssql.connect(config);
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

const eliminarPregunta = () => {
    const conn = mssql.connect(config);
    const query = `DELETE FROM [dbo].[Preguntas]
    WHERE <Search Conditions,,>`
}

const azarPregunta = () => {
    const conn = mssql.connect(config);
    const query = `SELECT * FROM Preguntas
    ORDER BY NewId()`
}

const todasLasPregunta = () => {
    const conn = mssql.connect(config);
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