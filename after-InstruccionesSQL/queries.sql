-- tabla 1 Ciudades
-- tabla 2 Personas
-- hacer esto es el workbrench

CREATE_TABLE ciudades(
    id INT UNSIGNED NOT NULL AUTOINCREMENT,
    nombre VARCHAR(255) NOT NULL DEFAULT 'N/A', -- si no se pasa un nombre aplicará a la tabla N/A 
    PRIMARY KEY (id),
);
CREATE_TABLE personas(
    id INT UNSIGNED NOT NULL AUTOINCREMENT,
    nombre VARCHAR(255) NOT NULL ,
    apellido VARCHAR(255) NOT NULL,
    ciudad INT UNSIGNED NOT NULL,
    --CONSTRAINTS
    PRIMARY KEY (id),
    FOREIGN KEY (ciudad) REFERENCES ciudades(id)
);

-- relaciones: uno a uno, uno a muchos y muchos a muchos
-- la foreign key debe ser igual a como se asigno en la tabla de la que viene


--para inserción de datos para la tabla
INSERT INTO ciudades(nombre) VALUES ('Tucuman'); --un dato

INSERT INTO ciudades (nombre)
VALUES
("new york"),
("Bogota"),
("Buenos Aires"); --para varios datos


--para ver las tablas SELECT * FROM <nombre-de-la-tabla>  El * significa buscar todos los datos de la tabla, sino se le asigna el nombre de la columna.

-- SELECT * FROM <nombre-tabla> ORDER BY nombre de la columna a ordenar.

-- SELECT * FROM <nombre-tabla> ORDER BY nombre de la columna a ordenar y por una segunda columna, se separan las columnas con una ',' orddena de forma ascendente por defecto. para ordenar descendiente le agregamos DESC 

-- SELECT * FROM <nombre-tabla> ORDER   BY  Nombre DESC , id DESC;

-- para hacer consultas refinadas, se hace con la cláusula WHERE:
-- EJ: SELECT * FROM <nombre-tabla> WHERE <nombre-columna> = 'algo';

-- tambien podemos usar una expresion que seria como boolean  para filtrar resultados: los operadores mas usados son el AND y el OR. EJ: SELECT * FROM <nombre-tabla> WHERE <nombre-columna> = 'algo' AND <nombre-otra-columna> = 'algo mas';
--EJ: SELECT * FROM <nombre-tabla> WHERE <nombre-columna> = 'algo' OR <nombre-otra-columna> = 'algo mas';

-- Operadores a nivel de expresiones como = pero hay muchas mas, dentro de los cuales están: Igualdad =, Diferente <>, mayor que >, menor que <,  'entre' BETWEEN, comodín Strings LIKE, 'en' IN (dentro de campor de valores), IS (si un campo es null) IS NOT (si no es null);

-- EJEMPLOS
 -- Diferente <>  SELECT * FROM <nombre-tabla> WHERE <nombre-columna> <> 'algo';

-- mayor que -- SELECT * FROM <nombre-tabla> WHERE <nombre-columna> > 'numero';

-- menor que--SELECT * FROM <nombre-tabla> WHERE <nombre-columna> < 'numero';

-- mayor o igual  que--SELECT * FROM <nombre-tabla> WHERE <nombre-columna> >= 'numero';

-- menor o igual que--SELECT * FROM <nombre-tabla> WHERE <nombre-columna> <= 'numero' AND <nombre-columna> > 'numero';

-- BETWEEN --SELECT * FROM <nombre-tabla> WHERE <nombre-columna> BETWEEN 'numero' AND 'numero'; generalmente para buscar entre fechas o precios, etc. Se le pueden concatenar mas expresiones de filtrado.


-- comodin de strings LIKE -- SELECT * FROM <nombre-tabla> WHERE <nombre-columna> LIKE 'palabra a buscar'; se pueden agregar comodines, ej ... LIKE ' T%' todo lo que inicia con T, '%t' trae todo lo que termina en T. '%T%' todo lo que contiene T. 

--IN-- SELECT * FROM <nombre-tabla> WHERE <nombre-columna> IN (parametro1,parametro2,parametro3);(2001,2002,2003) trae la info que contengan esos años, por ejemplo, en la tabla.

-- IS --SELECT * FROM <nombre-tabla> WHERE <nombre-columna> IS NULL;

-- IS NOT --SELECT * FROM <nombre-tabla> WHERE <nombre-columna> IS NOT NULL;

-- UPDATE: actualizar tabla
-- UPDATE <nombre-tabla> SET <nombre-columna> = 'nuevo dato'; asi reasigna el dato a todos los datos de toda la columna, entonces...
--UPDATE <nombre-tabla> SET <nombre-columna> = 'nuevo dato' WHERE <nombre-columna> ='algo'--> ej: nombre ='Tatiana' WHERE id = 2

--DELETE  
--DELETE FROM <nombre-tabla> WHERE <nombre-columna> id= <numero de id>

-- COUNT (*) <nombre-tabla> WHERE <nombre-columna> = 'algo'; hace el conteo de los datos que contienen ese 'algo' que buscamos.

-- QUERYS complejas:
--busca los 10 nombres y apellidos mas populares entre los actores, cuantos actores tienen cada uno de esos nombres y apellidos 
-- SELECT *, COUNT(*) as total FROM actors
--GROUP BY first_name, last_name (agrupa por nombre y apellido)
--ORDER BY total DESC LIMIT 10; (agrupa por el total de nombres y apellidos mas populares con LIMIT le decimos el total a buscar o limitamos la busqueda)

--investigar más metodos como join. para realizar los ejecicios de la carpeta del drive