/*

Jorge Maldonado C.I: 29.641.202
Douglas Socorro   C.I: 29.748.656
Benjamín Alastre   C.I: 29.712.778

*/

// 1. Agregar 10 series.
db.Series.drop();
db.Series.insertMany([
  {
    titulo: "Breaking Bad",
    director: "Vince Gilligan",
    actores: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    costo_venta: 24.99,
    primera_emision: "2008-01-20",
    ultima_emision: "2013-09-29",
    numero_temporadas: 5,
    descripcion:
      "Un profesor de química se convierte en un fabricante de metanfetaminas después de ser diagnosticado con cáncer.",
  },
  {
    titulo: "Game of Thrones",
    director: "Varios",
    actores: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
    costo_venta: 39.99,
    primera_emision: "2011-04-17",
    ultima_emision: "2019-05-19",
    numero_temporadas: 8,
    descripcion:
      "En un mundo ficticio, familias nobles luchan por el control del Trono de Hierro y el dominio de los Siete Reinos.",
  },
  {
    titulo: "The Crown",
    director: "Peter Morgan",
    actores: ["Olivia Colman", "Tobias Menzies", "Helena Bonham Carter"],
    costo_venta: 34.5,
    primera_emision: "2016-11-04",
    ultima_emision: "2022-11-15",
    numero_temporadas: 5,
    descripcion:
      "La vida de la Reina Isabel II desde su ascenso al trono y las complejidades de su reinado.",
  },
  {
    titulo: "Black Mirror",
    director: "Varios",
    actores: ["Daniel Lapaine", "Hannah John-Kamen", "Michaela Coel"],
    costo_venta: 19.99,
    primera_emision: "2011-12-04",
    ultima_emision: "2019-06-05",
    numero_temporadas: 5,
    descripcion:
      "Una serie de historias independientes que exploran el lado oscuro y distópico de la tecnología.",
  },
  {
    titulo: "Friends",
    director: "Varios",
    actores: ["Jennifer Aniston", "Courteney Cox", "Matthew Perry"],
    costo_venta: 17.25,
    primera_emision: "1994-09-22",
    ultima_emision: "2004-05-06",
    numero_temporadas: 10,
    descripcion:
      "Un grupo de amigos vive diversas situaciones cómicas y emocionales en la ciudad de Nueva York.",
  },
  {
    titulo: "Chernobyl",
    director: "Johan Renck",
    actores: ["Jared Harris", "Stellan Skarsgård", "Emily Watson"],
    costo_venta: 12.99,
    primera_emision: "2019-05-06",
    ultima_emision: "2019-06-03",
    numero_temporadas: 1,
    descripcion:
      "La dramatización del desastre nuclear de Chernobyl y sus consecuencias.",
  },
  {
    titulo: "The Office",
    director: "Varios",
    actores: ["Steve Carell", "Rainn Wilson", "John Krasinski"],
    costo_venta: 21.5,
    primera_emision: "2005-03-24",
    ultima_emision: "2013-05-16",
    numero_temporadas: 9,
    descripcion:
      "Una mirada cómica a la vida diaria de empleados de una oficina a través del formato de falso documental.",
  },
  {
    titulo: "Narcos",
    director: "Varios",
    actores: ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"],
    costo_venta: 7.75,
    primera_emision: "2015-08-28",
    ultima_emision: "2017-09-01",
    numero_temporadas: 3,
    descripcion:
      "La historia del ascenso y caída del narcotraficante colombiano Pablo Escobar y los cárteles de la droga.",
  },
  {
    titulo: "The Witcher",
    director: "Varios",
    actores: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
    costo_venta: 28.99,
    primera_emision: "2019-12-20",
    ultima_emision: "Presente",
    numero_temporadas: 2,
    descripcion:
      "Un cazador de monstruos busca su destino en un mundo lleno de peligros y seres sobrenaturales.",
  },
  {
    titulo: "The Witcher",
    director: "Varios",
    actores: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
    costo_venta: 28.99,
    primera_emision: "2019-12-20",
    ultima_emision: "Presente",
    numero_temporadas: 2,
    descripcion:
      "Un cazador de monstruos busca su destino en un mundo lleno de peligros y seres sobrenaturales.",
  },
]);

// 2. Agregar 10 películas.
db.Peliculas.drop();
db.Peliculas.insertMany([
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    actores: ["Leonardo DiCaprio", "Elliot Page", "Tom Hardy"],
    costo_venta: 25.99,
    estreno: "2010-07-16",
    descripcion:
      "Un ladrón experimentado se embarca en la última misión: implantar una idea en el subconsciente de alguien.",
  },
  {
    titulo: "The Shawshank Redemption",
    director: "Frank Darabont",
    actores: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    costo_venta: 12.49,
    estreno: "1994-09-23",
    descripcion:
      "Un hombre inocente es condenado a cadena perpetua y forja una amistad duradera en la cárcel.",
  },
  {
    titulo: "The Godfather",
    director: "Francis Ford Coppola",
    actores: ["Marlon Brando", "Al Pacino", "James Caan"],
    costo_venta: 28.75,
    estreno: "1972-03-24",
    descripcion:
      "Un poderoso patriarca de una familia de mafiosos transfiere el control a su hijo más joven.",
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    actores: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    costo_venta: 14.99,
    estreno: "1994-10-14",
    descripcion:
      "Historias entrelazadas sobre gángsters, boxeadores, drogas y traición en Los Ángeles.",
  },
  {
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    actores: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    costo_venta: 57.25,
    estreno: "2008-07-18",
    descripcion:
      "Batman lucha contra el caos desatado por un genio criminal conocido como Joker.",
  },
  {
    titulo: "The Matrix",
    director: "The Wachowskis",
    actores: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    costo_venta: 13.99,
    estreno: "1999-03-31",
    descripcion:
      "Un hacker descubre que el mundo tal como lo conoce es una simulación de realidad virtual.",
  },
  {
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    actores: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    costo_venta: 36.5,
    estreno: "1994-07-06",
    descripcion:
      "La vida de un hombre que sin darse cuenta fue testigo de algunos de los momentos más importantes de la historia.",
  },
  {
    titulo: "The Silence of the Lambs",
    director: "Jonathan Demme",
    actores: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    costo_venta: 21.99,
    estreno: "1991-02-14",
    descripcion:
      "Una agente del FBI busca la ayuda de un asesino en serie encarcelado para atrapar a otro criminal.",
  },
  {
    titulo: "Goodfellas",
    director: "Martin Scorsese",
    actores: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    costo_venta: 14.75,
    estreno: "1990-09-19",
    descripcion:
      "La historia de un hombre que entra en el mundo de la mafia y su ascenso y caída dentro de ella.",
  },
  {
    titulo: "Fight Club",
    director: "David Fincher",
    actores: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    costo_venta: 12.99,
    estreno: "1999-10-15",
    descripcion:
      "Un insomne y un carismático vendedor de jabón crean un club clandestino de lucha que toma un giro oscuro.",
  },
]);

// 3. Eliminar 5 películas.
let PeliculasIDs = db.Peliculas.find()
  .limit(5)
  .map((doc) => ({ _id: doc._id }))
  .toArray();
db.Peliculas.deleteMany({ $or: PeliculasIDs });

// 4. Editar 5 series.
let SeriesIDs = db.Series.find({ costo_venta: { $lt: 20 } })
  .limit(5)
  .map((doc) => ({ _id: doc._id }))
  .toArray();
db.Series.updateMany({ $or: SeriesIDs }, { $set: { disponible: true } });
db.Series.find({ disponible: true });

// 5. Promediar el valor de todas las películas y series que contenga la página.
db.Series.aggregate([
  { $unionWith: "Peliculas" },
  {
    $group: {
      _id: 0,
      costeDeVentaPromedio: { $avg: "$costo_venta" },
    },
  },
]);
