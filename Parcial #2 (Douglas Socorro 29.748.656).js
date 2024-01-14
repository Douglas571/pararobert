// Prueba parcial #2 15%
// Estudiante: Douglas Socorro 29.748.656
// ᕙ(`▽´)ᕗ

use Terminal

// -----------TERMINALES -----------
const TERMINALES = [
    {
        _id: 0,
        nombre: 'Terminal de Pasajeros de Coro',
        direccion: 'Falcón, Miranda',
        impuesto: 10,
    },
    {
        _id: 1,
        nombre: 'Terminal de Pasajeros de Mérida',
        direccion: 'Mérida, Libertador',
        impuesto: 7,
    },
    {
        _id: 2,
        nombre: 'Terminal de Pasajeros de Caracas',
        direccion: 'Caracas, Libertador',
        impuesto: 10,
    },
    {
        _id: 3,
        nombre: 'Terminal de Pasajeros de San Cristóbal',
        direccion: 'San Cristóbal, San Cristóbal',
        impuesto: 12,
    },
    {
        _id: 4,
        nombre: 'Terminal de Pasajeros de Valle de la Pascua',
        direccion: 'Valle de la Pascua, Leonardo Infante',
        impuesto: 15,
    }
]
db.terminales.drop()
db.terminales.insertMany(TERMINALES)

// ----------- RUTAS -----------
const RUTAS = [
    {
        _id: 0,
        titulo: 'Ruta Terminal de Coro - Terminal de Mérida',
        origen: 0, // ID del terminal de origen (Coro)
        destino: 1, // ID del terminal de destino (Mérida)
        distancia: 590 // Distancia desde el terminal de Coro a Mérida
    },
    {
        _id: 1,
        titulo: 'Ruta Terminal de Coro - Terminal de Caracas',
        origen: 0, // ID del terminal de origen (Coro)
        destino: 2, // ID del terminal de destino (Caracas)
        distancia: 400 // Distancia desde el terminal de Coro a Caracas
    },
    {
        _id: 2,
        titulo: 'Ruta Terminal de Coro - Terminal de San Cristóbal',
        origen: 0, // ID del terminal de origen (Coro)
        destino: 3, // ID del terminal de destino (San Cristóbal)
        distancia: 520 // Distancia desde el terminal de Coro a San Cristóbal
    },
    {
        _id: 3,
        titulo: 'Ruta Terminal de Coro - Terminal de Valle de la Pascua',
        origen: 0, // ID del terminal de origen (Coro)
        destino: 4, // ID del terminal de destino (Valle de la Pascua)
        distancia: 760 // Distancia desde el terminal de Coro a Valle de la Pascua
    }
]

db.rutas.drop()
db.rutas.insertMany(RUTAS)


// 1. Agregar 20 buses, con los datos necesarios y sus rutas definidas
// ----------- BUSES -----------
const BUSES = [
  {
    _id: 0,
    rutaID: 0,
    conductor: {
      nombre: "Juan Pérez",
      cedula: 12345678,
    },
    puestos: 30,
    precio_usd: 15,
    puestos_disponibles: 30,
  },
  {
    _id: 1,
    rutaID: 1,
    conductor: {
      nombre: "María González",
      cedula: 9876543,
    },
    puestos: 25,
    precio_usd: 20,
    puestos_disponibles: 25,
  },
  {
    _id: 2,
    rutaID: 2,
    conductor: {
      nombre: "Luis Rodríguez",
      cedula: 8765432,
    },
    puestos: 30,
    precio_usd: 25,
    puestos_disponibles: 30,
  },
  {
    _id: 3,
    rutaID: 3,
    conductor: {
      nombre: "Ana Martínez",
      cedula: 7654321,
    },
    puestos: 28,
    precio_usd: 12,
    puestos_disponibles: 28,
  },
  {
    _id: 4,
    rutaID: 0,
    conductor: {
      nombre: "Laura Pérez",
      cedula: 5432109,
    },
    puestos: 32,
    precio_usd: 18,
    puestos_disponibles: 0,
  },
  {
    _id: 5,
    rutaID: 1,
    conductor: {
      nombre: "Carlos González",
      cedula: 9870123,
    },
    puestos: 26,
    precio_usd: 22,
    puestos_disponibles: 0,
  },
  {
    _id: 6,
    rutaID: 2,
    conductor: {
      nombre: "Isabel Rodríguez",
      cedula: 7650123,
    },
    puestos: 31,
    precio_usd: 28,
    puestos_disponibles: 0,
  },
  {
    _id: 7,
    rutaID: 3,
    conductor: {
      nombre: "Miguel Martínez",
      cedula: 6543210,
    },
    puestos: 29,
    precio_usd: 14,
    puestos_disponibles: 29,
  },
  {
    _id: 8,
    rutaID: 0,
    conductor: {
      nombre: "Ana Pérez",
      cedula: 1098765,
    },
    puestos: 33,
    precio_usd: 16,
    puestos_disponibles: 33,
  },
  {
    _id: 9,
    rutaID: 1,
    conductor: {
      nombre: "Javier González",
      cedula: 2109876,
    },
    puestos: 24,
    precio_usd: 19,
    puestos_disponibles: 24,
  },
  {
    _id: 10,
    rutaID: 2,
    conductor: {
      nombre: "Sofía Rodríguez",
      cedula: 3210987,
    },
    puestos: 27,
    precio_usd: 23,
    puestos_disponibles: 27,
  },
  {
    _id: 11,
    rutaID: 3,
    conductor: {
      nombre: "Laura Martínez",
      cedula: 4567890,
    },
    puestos: 30,
    precio_usd: 17,
    puestos_disponibles: 30,
  },
  {
    _id: 12,
    rutaID: 0,
    conductor: {
      nombre: "Carlos Pérez",
      cedula: 2345678,
    },
    puestos: 31,
    precio_usd: 21,
    puestos_disponibles: 31,
  },
  {
    _id: 13,
    rutaID: 1,
    conductor: {
      nombre: "Isabel González",
      cedula: 8901234,
    },
    puestos: 25,
    precio_usd: 26,
    puestos_disponibles: 25,
  },
  {
    _id: 14,
    rutaID: 2,
    conductor: {
      nombre: "Javier Rodríguez",
      cedula: 5678901,
    },
    puestos: 28,
    precio_usd: 15,
    puestos_disponibles: 28,
  },
  {
    _id: 15,
    rutaID: 3,
    conductor: {
      nombre: "Sofía Martínez",
      cedula: 6789012,
    },
    puestos: 32,
    precio_usd: 20,
    puestos_disponibles: 32,
  },
  {
    _id: 16,
    rutaID: 0,
    conductor: {
      nombre: "Mariana Pérez",
      cedula: 7890123,
    },
    puestos: 29,
    precio_usd: 18,
    puestos_disponibles: 29,
  },
  {
    _id: 17,
    rutaID: 1,
    conductor: {
      nombre: "Gabriel González",
      cedula: 8901235,
    },
    puestos: 27,
    precio_usd: 22,
    puestos_disponibles: 27,
  },
  {
    _id: 18,
    rutaID: 2,
    conductor: {
      nombre: "Valentina Rodríguez",
      cedula: 9012345,
    },
    puestos: 26,
    precio_usd: 19,
    puestos_disponibles: 26,
  },
  {
    _id: 19,
    rutaID: 3,
    conductor: {
      nombre: "Alejandro Martínez",
      cedula: 1234567,
    },
    puestos: 30,
    precio_usd: 15,
    puestos_disponibles: 30,
  },
];

db.buses.drop()
db.buses.insertMany(BUSES)

/*  2. En el terminal hay 100 personas:  
        - 25 se dirigen hacia Mérida, 
        - 25 hacia Caracas, 
        - 25 hacia San Cristóbal y 
        - 25 a Valle de la Pascua, 
    promediar en base a la distancia el costo de 
    cada viaje y determinar si hay la disponibilidad 
    de buses para el traslado a esas zonas, si no, 
    anexar un bus adicional que se dirija hacia donde 
    es requerido.
*/


// ----------- PASAJEROS -----------
const PASAJEROS = [
  {
    _id: 0,
    name: "Douglas Socorro",
    cedula: 29748656,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 0,
  },
  {
    _id: 1,
    name: "Génesis Blanco",
    cedula: 28477878,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 0,
  },
  {
    _id: 2,
    name: "Josmer Trompiz",
    cedula: 29748403,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 3,
    name: "Hernán Guerrero",
    cedula: 30490356,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 0,
  },
  {
    _id: 4,
    name: "Rubira Gómez",
    cedula: 14262473,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 5,
    name: "Jesús Sánchez",
    cedula: 15181326,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 0,
  },
  {
    _id: 6,
    name: "Jorge Maldonado",
    cedula: 29641202,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 7,
    name: "Benjamín Alastre",
    cedula: 29712671,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 0,
  },
  {
    _id: 8,
    name: "Guillermo López",
    cedula: 29513520,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 0,
  },
  {
    _id: 9,
    name: "Jesús Campos",
    cedula: 29641424,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 10,
    name: "Gionaiker Chirino",
    cedula: 28477177,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 0,
  },
  {
    _id: 11,
    name: "César Colina",
    cedula: 29748001,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 12,
    name: "Lidis Balcázar",
    cedula: 9925840,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 0,
  },
  {
    _id: 13,
    name: "Iván Guaipo",
    cedula: 30325602,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 0,
  },
  {
    _id: 14,
    name: "Eduardo Lugo",
    cedula: 28251362,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 15,
    name: "Fabían Vidal",
    cedula: 30258368,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 16,
    name: "Nohel Flores",
    cedula: 29461780,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 0,
  },
  {
    _id: 17,
    name: "Juan Villasmil",
    cedula: 27462189,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 0,
  },
  {
    _id: 18,
    name: "Gabriel Mármol",
    cedula: 28451772,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 0,
  },
  {
    _id: 19,
    name: "Gustavo Pérez",
    cedula: 29876543,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 20,
    name: "Isabel García",
    cedula: 28123456,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },
  {
    _id: 21,
    name: "Martín Rivas",
    cedula: 29567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 0,
  },
  {
    _id: 22,
    name: "Ana López",
    cedula: 28901234,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 0,
  },
  {
    _id: 23,
    name: "Pedro Jiménez",
    cedula: 29765432,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 0,
  },
  {
    _id: 24,
    name: "Laura Pérez",
    cedula: 29876543,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 0,
  },


  // -------------------- BUS 1 -----------------------------

  {
    _id: 25,
    name: "Luisa Morales",
    cedula: 28765432,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 1,
  },
  {
    _id: 26,
    name: "Carlos Sánchez",
    cedula: 29123456,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 27,
    name: "Rosa Pérez",
    cedula: 29678901,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 1,
  },
  {
    _id: 28,
    name: "Javier Rodríguez",
    cedula: 29801234,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 1,
  },
  {
    _id: 29,
    name: "Elena Gómez",
    cedula: 29987654,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 30,
    name: "Mónica Jiménez",
    cedula: 30123456,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 1,
  },
  {
    _id: 31,
    name: "Pedro Mendoza",
    cedula: 30567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 32,
    name: "Isabel Pérez",
    cedula: 31012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 1,
  },
  {
    _id: 33,
    name: "Jorge Ramírez",
    cedula: 31567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 1,
  },
  {
    _id: 34,
    name: "Lorena Soto",
    cedula: 32012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 35,
    name: "Ricardo González",
    cedula: 32567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 1,
  },
  {
    _id: 36,
    name: "Gabriela Mendoza",
    cedula: 33012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 37,
    name: "Héctor Ramírez",
    cedula: 33567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 1,
  },
  {
    _id: 38,
    name: "Laura Soto",
    cedula: 34012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 1,
  },
  {
    _id: 39,
    name: "Daniel González",
    cedula: 34567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 40,
    name: "Carmen Pérez",
    cedula: 35012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 41,
    name: "Carlos Rodríguez",
    cedula: 35567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 1,
  },
  {
    _id: 42,
    name: "Isabella Martínez",
    cedula: 36012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 1,
  },
  {
    _id: 43,
    name: "Eduardo Ramírez",
    cedula: 36567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 1,
  },
  {
    _id: 44,
    name: "Sofía Soto",
    cedula: 37012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 45,
    name: "Juan Torres",
    cedula: 37567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },
  {
    _id: 46,
    name: "Laura González",
    cedula: 38012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 1,
  },
  {
    _id: 47,
    name: "Miguel Sánchez",
    cedula: 38567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 1,
  },
  {
    _id: 48,
    name: "Gabriela Ramírez",
    cedula: 39012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 1,
  },
  {
    _id: 49,
    name: "Daniel Pérez",
    cedula: 39567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 1,
  },

  // -------- BusID: 2 -----------

  {
    _id: 50,
    name: "Isabella Martínez",
    cedula: 40012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 2,
  },
  {
    _id: 51,
    name: "Alejandro López",
    cedula: 40567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 2,
  },
  {
    _id: 52,
    name: "Valentina Sánchez",
    cedula: 41012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 2,
  },
  {
    _id: 53,
    name: "Sebastián Ramírez",
    cedula: 41567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 2,
  },
  {
    _id: 54,
    name: "Lucía Pérez",
    cedula: 42012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 2,
  },
  {
    _id: 55,
    name: "Elena García",
    cedula: 42567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 2,
  },
  {
    _id: 56,
    name: "Adrián Fernández",
    cedula: 43012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 2,
  },
  {
    _id: 57,
    name: "Camila González",
    cedula: 43567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 2,
  },
  {
    _id: 58,
    name: "Gabriel Mendoza",
    cedula: 44012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 2,
  },
  {
    _id: 59,
    name: "Valentino Ramos",
    cedula: 44567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 2,
  },
  {
    _id: 60,
    name: "Martina Herrera",
    cedula: 45012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      }
    ],
    busID: 2,
  },
  {
    _id: 61,
    name: "Santiago Díaz",
    cedula: 45567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 2,
  },
  {
    _id: 62,
    name: "Renata Vargas",
    cedula: 46012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 2,
  },
  {
    _id: 63,
    name: "Diego Sánchez",
    cedula: 46567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 2,
  },
  {
    _id: 64,
    name: "Amanda Martínez",
    cedula: 47012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 2,
  },
  {
    _id: 65,
    name: "Simón Guzmán",
    cedula: 47567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 2,
  },
  {
    _id: 66,
    name: "Valeria Pérez",
    cedula: 48012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 2,
  },
  {
    _id: 67,
    name: "Matías Rodríguez",
    cedula: 48567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 2,
  },
  {
    _id: 68,
    name: "Florencia Salazar",
    cedula: 49012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 2,
  },
  {
    _id: 69,
    name: "Nicolás Mendoza",
    cedula: 49567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 2,
  },
  {
    _id: 70,
    name: "Emilia Herrera",
    cedula: 50012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      }
    ],
    busID: 2,
  },
  {
    _id: 71,
    name: "Facundo Díaz",
    cedula: 50567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 2,
  },
  {
    _id: 72,
    name: "Renata Vargas",
    cedula: 51012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 2,
  },
  {
    _id: 73,
    name: "Lucas Sánchez",
    cedula: 51567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 2,
  },
  {
    _id: 74,
    name: "Marina Martínez",
    cedula: 52012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 2,
  },

  // --------- BusID: 3 -----------

  {
    _id: 75,
    name: "Diego Hernández",
    cedula: 52567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 76,
    name: "Sofía García",
    cedula: 53012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 3,
  },
  {
    _id: 77,
    name: "Alejandro Soto",
    cedula: 53567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 3,
  },
  {
    _id: 78,
    name: "Camila Torres",
    cedula: 54012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 3,
  },
  {
    _id: 79,
    name: "Joaquín Herrera",
    cedula: 54567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 80,
    name: "Valentina Ramírez",
    cedula: 55012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 81,
    name: "Sebastián López",
    cedula: 55567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 3,
  },
  {
    _id: 82,
    name: "Isabella Martínez",
    cedula: 56012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 3,
  },
  {
    _id: 83,
    name: "Juan Diego Herrera",
    cedula: 56567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 3,
  },
  {
    _id: 84,
    name: "Valentín Soto",
    cedula: 57012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 85,
    name: "Camila Ramírez",
    cedula: 57567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 3,
  },
  {
    _id: 86,
    name: "Santiago López",
    cedula: 58012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 87,
    name: "Renata Martínez",
    cedula: 58567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 3,
  },
  {
    _id: 88,
    name: "Mateo Herrera",
    cedula: 59012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 3,
  },
  {
    _id: 89,
    name: "Mariana Soto",
    cedula: 59567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 90,
    name: "Gabriel Ramírez",
    cedula: 60012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 3,
  },
  {
    _id: 91,
    name: "Fernanda López",
    cedula: 60567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 92,
    name: "Alex Martínez",
    cedula: 61012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 3,
  },
  {
    _id: 93,
    name: "Valeria Herrera",
    cedula: 61567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 94,
    name: "Emilio Soto",
    cedula: 62012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 4,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 6,
      },
    ],
    busID: 3,
  },
  {
    _id: 95,
    name: "Luciana Ramírez",
    cedula: 62567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 8,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 3,
  },
  {
    _id: 96,
    name: "Leonardo López",
    cedula: 63012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 7,
      },
      {
        type: "encomienda",
        weight_kg: 3,
      },
    ],
    busID: 3,
  },
  {
    _id: 97,
    name: "Camilo Martínez",
    cedula: 63567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 6,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 98,
    name: "Abril Herrera",
    cedula: 64012345,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 2,
      },
      {
        type: "maleta grande",
        weight_kg: 5,
      },
      {
        type: "encomienda",
        weight_kg: 4,
      },
    ],
    busID: 3,
  },
  {
    _id: 99,
    name: "Martín Soto",
    cedula: 64567890,
    equipaje: [
      {
        type: "maleta de mano",
        weight_kg: 3,
      },
      {
        type: "maleta grande",
        weight_kg: 9,
      },
      {
        type: "encomienda",
        weight_kg: 5,
      },
    ],
    busID: 3,
  },
];

db.pasajeros.drop()
db.pasajeros.insertMany(PASAJEROS)

// 2.2 Promediar en base a la distancia el costo de cada viaje 
db.rutas.aggregate([
  {
    $project: {
      costoTotal: {
        $multiply: ["$distancia", 0.1] // Multiplica la distancia por el costo por kilómetro
      }
    }
  },
  {
    $group: {
      _id: null,
      sumaCostos: { $sum: "$costoTotal" },
      cantidadRutas: { $sum: 1 } // Cuenta la cantidad de rutas
    }
  },
  {
    $project: {
      costoPromedio: { $divide: ["$sumaCostos", "$cantidadRutas"] }
    }
  }
])

// 2.3 Determinar si hay la disponibilidad de buses para el traslado a esas zonas, 
// si no, anexar un bus adicional que se dirija hacia donde es requerido.
db.pasajeros.aggregate([
  {
    $group: {
      _id: "$busID",
      totalPasajeros: { $sum: 1 }
    }
  }
]);
// ٩( ๑╹ ꇴ╹)۶ Si hay suficientes pasajeros, por lo que no hace falta agregar más buses.

// 3. Editar las rutas de 3 buses.
let updateOperations = db.buses.find().map( bus => (
    {
        filter: { _id: bus._id }, 
        update: { 
            $set: { rutaID: 3 }
        }
    })).toArray()

console.log(updateOperations)
updateOperations.forEach( op => db.buses.updateOne(op.filter, op.update))

db.buses.find()


// 4. Consultar las tarifas de 5 buses con sus rutas.
db.buses.aggregate([
  {
    $match: { _id: { $lt: 5}}  
  },
  {
    $lookup: {
      from: "rutas",
      localField: "rutaID",
      foreignField: "_id",
      as: "ruta_info",
    },
  },
  {
    $unwind: "$ruta_info",
  },
  {
    $project: {
        _id: 1,
        rutaID: 1, // ID de la ruta.
        conductor: 1,
        puestos: 1,
        puestos_disponibles: 1,
        precio_usd: 1, // minimo 5$, maximo 30$.
        ruta: "$ruta_info",
    },
  },
]);


// 5. Mostrar todos los datos que contenga la base de datos 
// (Tener en cuenta que los datos ingresados deben ser coherentes).
db.terminals.aggregate(
    { $unionWith: "terminales" },
    { $unionWith: "rutas" },
    { $unionWith: "buses" },
    { $unionWith: "pasajeros" },)


// ٩(^‿^)۶