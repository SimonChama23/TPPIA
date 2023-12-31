ALTER DATABASE [TPPIA] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TPPIA].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TPPIA] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TPPIA] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TPPIA] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TPPIA] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TPPIA] SET ARITHABORT OFF 
GO
ALTER DATABASE [TPPIA] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TPPIA] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TPPIA] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TPPIA] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TPPIA] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TPPIA] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TPPIA] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TPPIA] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TPPIA] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TPPIA] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TPPIA] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TPPIA] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TPPIA] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TPPIA] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TPPIA] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TPPIA] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TPPIA] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TPPIA] SET RECOVERY FULL 
GO
ALTER DATABASE [TPPIA] SET  MULTI_USER 
GO
ALTER DATABASE [TPPIA] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TPPIA] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TPPIA] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TPPIA] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TPPIA] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'TPPIA', N'ON'
GO
ALTER DATABASE [TPPIA] SET QUERY_STORE = OFF
GO
USE [TPPIA]
GO
/****** Object:  User [TPPIA]    Script Date: 7/7/2023 10:22:20 ******/
CREATE USER [TPPIA] FOR LOGIN [TPPIA] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 7/7/2023 10:22:20 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [TPPIA]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 7/7/2023 10:22:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Preguntas](
	[Pregunta] [varchar](255) NULL,
	[Opcion1] [varchar](255) NULL,
	[Opcion2] [varchar](255) NULL,
	[Opcion3] [varchar](255) NULL,
	[Opcion4] [varchar](255) NULL,
	[RespuestaCorrecta] [varchar](255) NULL,
	[FechaCreacion] [date] NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY]
GO



/****** Object:  Table [dbo].[Respuestas]    Script Date: 7/7/2023 10:22:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[UserId] [int] NULL,
	[RespuestaSeleccionada] [varchar](255) NULL,
	[EsRespuestaCorrecta] [bit] NULL,
	[FechaCreacion] [date] NULL,
	[IdPreguntas] [int] NOT NULL
) ON [PRIMARY]
GO


USE [master]
GO
ALTER DATABASE [TPPIA] SET  READ_WRITE 
GO

INSERT INTO [dbo].[Preguntas] ([Pregunta], [Opcion1], [Opcion2], [Opcion3], [Opcion4], [RespuestaCorrecta], [FechaCreacion])
VALUES
    ('¿Cuál es la capital de Francia?', 'Londres', 'París', 'Berlín', 'Roma', 'París', GETDATE()),
    ('¿Cuál es el río más largo del mundo?', 'Nilo', 'Amazonas', 'Yangtsé', 'Misisipi', 'Amazonas', GETDATE()),
    ('¿Cuál es el planeta más cercano al Sol?', 'Venus', 'Mercurio', 'Marte', 'Júpiter', 'Mercurio', GETDATE()),
    ('¿Quién escribió la obra "Don Quijote de la Mancha"?', 'Miguel de Cervantes', 'Federico García Lorca', 'Gabriel García Márquez', 'William Shakespeare', 'Miguel de Cervantes', GETDATE()),
    ('¿Cuál es el principal componente del aire que respiramos?', 'Nitrógeno', 'Oxígeno', 'Dióxido de carbono', 'Argón', 'Oxígeno', GETDATE());

	INSERT INTO [dbo].[Respuestas] ([UserId], [RespuestaSeleccionada], [EsRespuestaCorrecta], [FechaCreacion], [IdPreguntas])
VALUES
    (1, 'París', 1, GETDATE(), 1),
    (1, 'Amazonas', 1, GETDATE(), 2),
    (2, 'Mercurio', 1, GETDATE(), 3),
    (2, 'Miguel de Cervantes', 1, GETDATE(), 4),
    (3, 'Oxígeno', 1, GETDATE(), 5);