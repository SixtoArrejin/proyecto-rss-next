# proyecto-ssr-next

Desarrollo de la Actividad n°2 de la materia Desarrollo de Software

Para iniciar el proyecto, inicialmente hay que clonar el repositorio. Luego se debe acceder a la carpeta del proyecto; y una vez allí acceder a la carpeta frontend.

npm install

Y luego:

npm run dev

Con estos comandos, deberia encontarse funcionando el frontend. Para el backend, se debe acceder al directorio backend y los siguientes comandos.

npm install

Y luego:

node app.js

```
CREATE DATABASE seleccion
USE seleccion

CREATE TABLE Jugadores (
    id INT PRIMARY KEY,
    nombre_apellido VARCHAR(255),
    altura FLOAT,
    numero_camiseta INT,
    posicion VARCHAR(255),
    edad INT,
    goles INT,
    descripcion VARCHAR(1500),
    imagen VARCHAR(255),
    createdAt DATE,
    updatedAt DATE
);

INSERT INTO Jugadores (id, nombre_apellido, altura, numero_camiseta, posicion, edad, goles, descripcion, imagen)
VALUES
    (1, 'Lionel Messi', 1.70, 10, 'Delantero', 34, 700, 'Lionel Andrés Messi Cuccittini (Rosario, Argentina, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia.
Messi es considerado uno de los mejores futbolistas de todos los tiempos. Ha ganado siete veces el Balón de Oro y ha sido nombrado mejor jugador del mundo por la FIFA en seis ocasiones. Además, ha ganado diez Ligas españolas, siete Copas del Rey y cuatro Ligas de Campeones de la UEFA con el Barcelona.
Es el máximo goleador histórico del Barcelona y de la Liga española. También es el máximo goleador histórico de la selección argentina.
Es conocido por su habilidad técnica excepcional, una endiablada velocidad y una inventiva inagotable.', 'https://media.discordapp.net/attachments/835592587414470702/1119163205999149056/Mi_proyecto.jpg?width=500&height=500'),
    (2, 'Sergio Agüero', 1.73, 9, 'Delantero', 33, 250, 'Sergio Leonel Agüero del Castillo (Buenos Aires, 2 de junio de 1988), conocido como Kun Agüero, es un exfutbolista argentino que jugaba como delantero. Fue internacional con la selección argentina desde 2006.
Es el máximo goleador histórico del Manchester City.
Agüero tuvo sus inicios en la cancha de futbol con solo 5 años, cuando su principal objetivo era divertirse. A los 9 años ingresó en las inferiores de Independiente y debutó en Primera División en 2003. En 2006 fue transferido al Atlético de Madrid y en 2011 al Manchester City.
En su carrera ha ganado cuatro títulos de la Premier League, una FA Cup y cinco Copas de la Liga con el Manchester City.
Es conocido por su habilidad técnica excepcional y su capacidad goleadora.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119171360095219822/Mi_proyecto_10.jpg'),
    (3, 'Paulo Dybala', 1.77, 21, 'Delantero', 28, 100, 'Paulo Exequiel Dybala (Laguna Larga, Córdoba, Argentina; 15 de noviembre de 1993) es un futbolista argentino que juega como delantero en la A. S. Roma de la Serie A de Italia y en la selección argentina.
Dybala nació el 15 de noviembre de 1993 en Laguna Larga, Córdoba, Argentina. Es hijo de Alicia Suárez y Adolfo Dybala y tiene dos hermanos mayores, Gustavo y Mariano.
En su carrera ha jugado en equipos como Instituto Atlético Central Córdoba, Palermo y Juventus.
Es conocido por su habilidad técnica excepcional y su capacidad goleadora.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119164695803347005/Mi_proyecto_1.jpg'),
    (4, 'Giovani Lo Celso', 1.78, 20, 'Mediocampista', 25, 30, 'Giovani Lo Celso (Rosario, Santa Fe, Argentina; 9 de abril de 1996) es un futbolista argentino que juega como mediocentro ofensivo en el Villarreal C. F. de la Primera División de España y en la selección argentina.
Lo Celso nació el 9 de abril de 1996 en Rosario, Santa Fe, Argentina. Es el tercero de cuatro hijos de su madre, Sandra, y de su padre, Juan Lo Celso.
En su carrera ha jugado en equipos como Rosario Central, Paris Saint-Germain F.C., Real Betis Balompié y Tottenham Hotspur.
Es conocido por su habilidad técnica excepcional y su capacidad goleadora.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119165660992372786/Mi_proyecto_2.jpg'),
    (5, 'Leandro Paredes', 1.80, 5, 'Mediocampista', 27, 15, 'Leandro Daniel Paredes Benítez (San Justo, Argentina; 29 de junio de 1994) es un futbolista argentino que juega como mediocentro en el Paris Saint-Germain F.C. de la Ligue 1 de Francia y en la selección argentina.
Paredes comenzó su carrera en el fútbol a los 3 años en un club de baby fútbol llamado "La Justina de San Justo". Ha jugado en equipos como Boca Juniors, Chievo Verona, Empoli F.C., A.S. Roma y Zenit San Petersburgo.
Es conocido por su habilidad técnica excepcional y su capacidad goleadora.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119166433688027227/Mi_proyecto_3.jpg'),
    (6, 'Rodrigo De Paul', 1.78, 16, 'Mediocampista', 27, 10, 'Rodrigo Javier de Paul (Sarandí, Buenos Aires; 24 de mayo de 1994) es un futbolista argentino que juega como centrocampista en el Atlético de Madrid, de la Primera División de España y en la selección argentina.
De Paul comenzó su carrera en el fútbol a los 3 años en Deportivo Belgrano. Ha jugado en equipos como Racing Club, Valencia C.F., Udinese Calcio y Atlético de Madrid.
Es conocido por su habilidad técnica excepcional y su capacidad goleadora.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119166802933579786/Mi_proyecto_4.jpg'),
    (7, 'Nicolás Otamendi', 1.83, 17, 'Defensor', 33, 5, 'Nicolás Hernán Gonzalo Otamendi (Buenos Aires, Argentina; 12 de febrero de 1988) es un futbolista argentino que juega como defensa central en el Benfica de la Primeira Liga de Portugal y en la selección argentina .
Otamendi comenzó su carrera en el fútbol en Vélez Sarsfield. Ha jugado en equipos como F.C. Porto, Valencia C.F., Manchester City F.C. y S.L. Benfica .
Es conocido por su habilidad técnica excepcional y su capacidad defensiva.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119168080485040148/Mi_proyecto_5.jpg'),
    (8, 'Cristian Romero', 1.85, 13, 'Defensor', 23, 3, 'Cristian Gabriel Romero (Córdoba, Argentina; 27 de abril de 1998), conocido como Cuti Romero, es un futbolista argentino que juega como defensor central en el Tottenham Hotspur F. C. de la Premier League y en la selección argentina.
Romero comenzó su carrera en el fútbol en las divisiones inferiores de Belgrano. Ha jugado en equipos como Genoa C.F.C., Atalanta B.C. y Tottenham Hotspur F. C.
Es conocido por su habilidad técnica excepcional y su capacidad defensiva.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119168460891623485/Mi_proyecto_6.jpg'),
    (9, 'Nicolás Tagliafico', 1.72, 3, 'Defensor', 29, 2, 'Nicolás Alejandro Tagliafico (Rafael Calzada, 31 de agosto de 1992) es un futbolista argentino que juega como defensor en el Olympique de Lyon de la Ligue 1.
Comenzó su carrera en las divisiones inferiores de Banfield. Ha jugado en equipos como Real Murcia, Independiente y Ajax.
Es conocido por su habilidad técnica excepcional y su capacidad defensiva.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119169020608917574/Mi_proyecto_7.jpg'),
    (10, 'Emiliano Martínez', 1.94, 23, 'Portero', 29, 0, 'Damián Emiliano Martínez (Mar del Plata, 2 de septiembre de 1992), conocido comúnmente como «Dibu» Martínez, es un futbolista argentino que se desempeña como arquero en el Aston Villa de la Premier League de Inglaterra. Es internacional absoluto con la selección argentina desde 2021.
Martínez comenzó su carrera en las divisiones inferiores de Independiente. Ha jugado en equipos como Arsenal y Reading.
Es conocido por su habilidad técnica excepcional y su capacidad defensiva.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119170805448855603/Mi_proyecto_9.jpg'),
    (11, 'Gonzalo Montiel', 1.79, 4, 'Defensor', 25, 1, 'Gonzalo Montiel (nacido el 1 de enero de 1997) es un futbolista argentino que juega como defensa en el Sevilla FC de la Primera División de España.
Comenzó su carrera en las divisiones inferiores de River Plate. Ha jugado en equipos como River Plate y Sevilla FC.
Es conocido por su habilidad técnica excepcional y su capacidad defensiva.', 'https://cdn.discordapp.com/attachments/835592587414470702/1119170270607974482/Mi_proyecto_1.png');
```
