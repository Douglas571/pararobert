// 1. Agregar 100 productos con la estructura que definieron.
db.Productos.drop();
db.Productos.insertMany([
  {
    _id: 1,
    nombre: "Cohetes espaciales",
    precio: 12.99,
    tipo: "Cohetes",
  },
  {
    _id: 2,
    nombre: "Fuentes luminosas",
    precio: 9.75,
    tipo: "Fuentes",
  },
  {
    _id: 3,
    nombre: "Bengalas multicolores",
    precio: 5.5,
    tipo: "Bengalas",
  },
  {
    _id: 4,
    nombre: "Candelas romanas",
    precio: 18.25,
    tipo: "Candelas",
  },
  {
    _id: 5,
    nombre: "Petardos de colores",
    precio: 7.99,
    tipo: "Petardos",
  },
  {
    _id: 6,
    nombre: "Tracas ruidosas",
    precio: 14.5,
    tipo: "Tracas",
  },
  {
    _id: 11,
    nombre: "Cohetes Titan",
    precio: 19.99,
    tipo: "Cohetes",
  },
  {
    _id: 12,
    nombre: "Chispas de la noche",
    precio: 8.5,
    tipo: "Fuentes",
  },
  {
    _id: 13,
    nombre: "Bengalas estroboscópicas",
    precio: 6.25,
    tipo: "Bengalas",
  },
  {
    _id: 14,
    nombre: "Candelas doradas",
    precio: 15.75,
    tipo: "Candelas",
  },
  {
    _id: 15,
    nombre: "Petardos estruendosos",
    precio: 11.99,
    tipo: "Petardos",
  },
  {
    _id: 16,
    nombre: "Tracas retumbantes",
    precio: 17.5,
    tipo: "Tracas",
  },
  {
    _id: 17,
    nombre: "Estrellas fugaces luminosas",
    precio: 5.75,
    tipo: "Estrellitas",
  },
  {
    _id: 18,
    nombre: "Morteros espectaculares",
    precio: 28.99,
    tipo: "Morteros",
  },
  {
    _id: 19,
    nombre: "Ruedas giratorias brillantes",
    precio: 14.75,
    tipo: "Ruedas",
  },
  {
    _id: 20,
    nombre: "Baterías pirotécnicas",
    precio: 38.5,
    tipo: "Baterías",
  },
  {
    _id: 21,
    nombre: "Cohetes Nebula",
    precio: 22.99,
    tipo: "Cohetes",
  },
  {
    _id: 22,
    nombre: "Fuente de luces mágicas",
    precio: 12.5,
    tipo: "Fuentes",
  },
  {
    _id: 23,
    nombre: "Bengalas brillantes de neón",
    precio: 7.75,
    tipo: "Bengalas",
  },
  {
    _id: 24,
    nombre: "Candelas plateadas",
    precio: 19.25,
    tipo: "Candelas",
  },
  {
    _id: 25,
    nombre: "Petardos brillantes de fiesta",
    precio: 13.99,
    tipo: "Petardos",
  },
  {
    _id: 26,
    nombre: "Tracas estridentes",
    precio: 19.5,
    tipo: "Tracas",
  },
  {
    _id: 27,
    nombre: "Estrellitas centelleantes",
    precio: 6.25,
    tipo: "Estrellitas",
  },
  {
    _id: 28,
    nombre: "Morteros luminosos",
    precio: 32.99,
    tipo: "Morteros",
  },
  {
    _id: 29,
    nombre: "Ruedas de colores vivos",
    precio: 16.75,
    tipo: "Ruedas",
  },
  {
    _id: 30,
    nombre: "Baterías de efectos especiales",
    precio: 45.5,
    tipo: "Baterías",
  },
  {
    _id: 31,
    nombre: "Cohetes Galaxy",
    precio: 24.99,
    tipo: "Cohetes",
  },
  {
    _id: 32,
    nombre: "Fuente de luces radiantes",
    precio: 15.5,
    tipo: "Fuentes",
  },
  {
    _id: 33,
    nombre: "Bengalas de destello rápido",
    precio: 8.25,
    tipo: "Bengalas",
  },
  {
    _id: 34,
    nombre: "Candelas titilantes",
    precio: 22.75,
    tipo: "Candelas",
  },
  {
    _id: 35,
    nombre: "Petardos festivos",
    precio: 16.99,
    tipo: "Petardos",
  },
  {
    _id: 36,
    nombre: "Tracas estruendosas XL",
    precio: 24.5,
    tipo: "Tracas",
  },
  {
    _id: 37,
    nombre: "Estrellas fugaces luminosas II",
    precio: 7.25,
    tipo: "Estrellitas",
  },
  {
    _id: 38,
    nombre: "Morteros nocturnos",
    precio: 36.99,
    tipo: "Morteros",
  },
  {
    _id: 39,
    nombre: "Ruedas giratorias vibrantes",
    precio: 18.75,
    tipo: "Ruedas",
  },
  {
    _id: 40,
    nombre: "Baterías multicolores",
    precio: 52.5,
    tipo: "Baterías",
  },
  {
    _id: 41,
    nombre: "Cohetes Saturno",
    precio: 29.99,
    tipo: "Cohetes",
  },
  {
    _id: 42,
    nombre: "Fuente resplandeciente",
    precio: 18.5,
    tipo: "Fuentes",
  },
  {
    _id: 43,
    nombre: "Bengalas relámpago",
    precio: 9.25,
    tipo: "Bengalas",
  },
  {
    _id: 44,
    nombre: "Candelas celestiales",
    precio: 25.75,
    tipo: "Candelas",
  },
  {
    _id: 45,
    nombre: "Petardos de la victoria",
    precio: 18.99,
    tipo: "Petardos",
  },
  {
    _id: 46,
    nombre: "Tracas gigantes",
    precio: 27.5,
    tipo: "Tracas",
  },
  {
    _id: 47,
    nombre: "Estrellitas mágicas",
    precio: 8.25,
    tipo: "Estrellitas",
  },
  {
    _id: 48,
    nombre: "Morteros brillantes",
    precio: 39.99,
    tipo: "Morteros",
  },
  {
    _id: 49,
    nombre: "Ruedas pirotécnicas",
    precio: 21.75,
    tipo: "Ruedas",
  },
  {
    _id: 50,
    nombre: "Baterías de gran impacto",
    precio: 58.5,
    tipo: "Baterías",
  },
  {
    _id: 51,
    nombre: "Cohetes lunares",
    precio: 34.99,
    tipo: "Cohetes",
  },
  {
    _id: 52,
    nombre: "Fuente de colores explosivos",
    precio: 21.5,
    tipo: "Fuentes",
  },
  {
    _id: 53,
    nombre: "Bengalas de ráfaga",
    precio: 10.25,
    tipo: "Bengalas",
  },
  {
    _id: 54,
    nombre: "Candelas de oro brillante",
    precio: 28.75,
    tipo: "Candelas",
  },
  {
    _id: 55,
    nombre: "Petardos luminosos",
    precio: 20.99,
    tipo: "Petardos",
  },
  {
    _id: 56,
    nombre: "Tracas ensordecedoras",
    precio: 30.5,
    tipo: "Tracas",
  },
  {
    _id: 57,
    nombre: "Estrellitas deslumbrantes",
    precio: 9.75,
    tipo: "Estrellitas",
  },
  {
    _id: 58,
    nombre: "Morteros espectrales",
    precio: 44.99,
    tipo: "Morteros",
  },
  {
    _id: 59,
    nombre: "Ruedas de neón",
    precio: 24.75,
    tipo: "Ruedas",
  },
  {
    _id: 60,
    nombre: "Baterías de luces intensas",
    precio: 65.5,
    tipo: "Baterías",
  },
  {
    _id: 61,
    nombre: "Cohetes supersónicos",
    precio: 39.99,
    tipo: "Cohetes",
  },
  {
    _id: 62,
    nombre: "Fuente de chispas",
    precio: 24.5,
    tipo: "Fuentes",
  },
  {
    _id: 63,
    nombre: "Bengalas de estrellas fugaces",
    precio: 11.25,
    tipo: "Bengalas",
  },
  {
    _id: 64,
    nombre: "Candelas de plata",
    precio: 32.75,
    tipo: "Candelas",
  },
  {
    _id: 65,
    nombre: "Petardos festivos XL",
    precio: 22.99,
    tipo: "Petardos",
  },
  {
    _id: 66,
    nombre: "Tracas estruendosas XXL",
    precio: 35.5,
    tipo: "Tracas",
  },
  {
    _id: 67,
    nombre: "Estrellas fugaces centelleantes",
    precio: 11.75,
    tipo: "Estrellitas",
  },
  {
    _id: 68,
    nombre: "Morteros deslumbrantes",
    precio: 48.99,
    tipo: "Morteros",
  },
  {
    _id: 69,
    nombre: "Ruedas luminosas",
    precio: 27.75,
    tipo: "Ruedas",
  },
  {
    _id: 70,
    nombre: "Baterías de alto impacto",
    precio: 72.5,
    tipo: "Baterías",
  },
  {
    _id: 71,
    nombre: "Cohetes estelares",
    precio: 44.99,
    tipo: "Cohetes",
  },
  {
    _id: 72,
    nombre: "Fuente de efectos especiales",
    precio: 28.5,
    tipo: "Fuentes",
  },
  {
    _id: 73,
    nombre: "Bengalas de iluminación",
    precio: 13.25,
    tipo: "Bengalas",
  },
  {
    _id: 74,
    nombre: "Candelas titánicas",
    precio: 38.75,
    tipo: "Candelas",
  },
  {
    _id: 75,
    nombre: "Petardos estruendosos XL",
    precio: 28.99,
    tipo: "Petardos",
  },
  {
    _id: 76,
    nombre: "Tracas ensordecedoras XXL",
    precio: 42.5,
    tipo: "Tracas",
  },
  {
    _id: 77,
    nombre: "Estrellas centelleantes de medianoche",
    precio: 13.75,
    tipo: "Estrellitas",
  },
  {
    _id: 78,
    nombre: "Morteros relucientes",
    precio: 54.99,
    tipo: "Morteros",
  },
  {
    _id: 79,
    nombre: "Ruedas de fuego",
    precio: 32.75,
    tipo: "Ruedas",
  },
  {
    _id: 80,
    nombre: "Baterías piromusicales",
    precio: 85.5,
    tipo: "Baterías",
  },
  {
    _id: 81,
    nombre: "Cohetes celestiales",
    precio: 49.99,
    tipo: "Cohetes",
  },
  {
    _id: 82,
    nombre: "Fuente de colores deslumbrantes",
    precio: 32.5,
    tipo: "Fuentes",
  },
  {
    _id: 83,
    nombre: "Bengalas resplandecientes",
    precio: 15.25,
    tipo: "Bengalas",
  },
  {
    _id: 84,
    nombre: "Candelas de brillantez extrema",
    precio: 45.75,
    tipo: "Candelas",
  },
  {
    _id: 85,
    nombre: "Petardos festivos XXL",
    precio: 32.99,
    tipo: "Petardos",
  },
  {
    _id: 86,
    nombre: "Tracas estruendosas XXXL",
    precio: 50.5,
    tipo: "Tracas",
  },
  {
    _id: 87,
    nombre: "Estrellas luminosas de alta potencia",
    precio: 15.75,
    tipo: "Estrellitas",
  },
  {
    _id: 88,
    nombre: "Morteros fulgurantes",
    precio: 62.99,
    tipo: "Morteros",
  },
  {
    _id: 89,
    nombre: "Ruedas centelleantes",
    precio: 38.75,
    tipo: "Ruedas",
  },
  {
    _id: 90,
    nombre: "Baterías pirotécnicas especiales",
    precio: 95.5,
    tipo: "Baterías",
  },
  {
    _id: 91,
    nombre: "Cohetes mágicos",
    precio: 54.99,
    tipo: "Cohetes",
  },
  {
    _id: 92,
    nombre: "Fuente de luces piromelódicas",
    precio: 36.5,
    tipo: "Fuentes",
  },
  {
    _id: 93,
    nombre: "Bengalas de brillantina",
    precio: 17.25,
    tipo: "Bengalas",
  },
  {
    _id: 94,
    nombre: "Candelas deslumbrantes",
    precio: 49.75,
    tipo: "Candelas",
  },
  {
    _id: 95,
    nombre: "Petardos espectaculares",
    precio: 35.99,
    tipo: "Petardos",
  },
  {
    _id: 96,
    nombre: "Tracas atronadoras",
    precio: 55.5,
    tipo: "Tracas",
  },
  {
    _id: 97,
    nombre: "Estrellas fulgurantes",
    precio: 18.75,
    tipo: "Estrellitas",
  },
  {
    _id: 98,
    nombre: "Morteros titánicos",
    precio: 68.99,
    tipo: "Morteros",
  },
  {
    _id: 99,
    nombre: "Ruedas pirotécnicas",
    precio: 42.75,
    tipo: "Ruedas",
  },
  {
    _id: 100,
    nombre: "Baterías piromágicas",
    precio: 105.5,
    tipo: "Baterías",
  },

  {
    _id: 116,
    nombre: "Cohetes Multicolor",
    precio: 19.99,
    tipo: "Cohetes",
  },
  {
    _id: 117,
    nombre: "Caja de Bengalas Brillantes",
    precio: 12.5,
    tipo: "Bengalas",
  },
  {
    _id: 118,
    nombre: "Traca Gigante de Éxito",
    precio: 29.75,
    tipo: "Tracas",
  },
  {
    _id: 119,
    nombre: "Traca Gigante de Mercurio",
    precio: 2.75,
    tipo: "Tracas",
  },
]);

db.Proveedores.drop();
db.Proveedores.insertMany([
  {
    _id: 1,
    nombre: "Pirotecnia Venezuela",
    direccion: "Avenida Bolívar, Caracas, Venezuela",
  },
  {
    _id: 2,
    nombre: "Fuegos Artificiales Carabobo",
    direccion: "Calle Montaña, Valencia, Venezuela",
  },
  {
    _id: 3,
    nombre: "PiroShow Maracaibo",
    direccion: "Carrera 15, Maracaibo, Venezuela",
  },
]);

db.Clientes.drop();
db.Clientes.insertMany([
  {
    _id: 1,
    nombre: "Ana Pérez",
    direccion: "Calle Libertad, Caracas, Venezuela",
  },
  {
    _id: 2,
    nombre: "Juan Gutiérrez",
    direccion: "Avenida Miranda, Valencia, Venezuela",
  },
  {
    _id: 3,
    nombre: "María Rodríguez",
    direccion: "Calle del Sol, Maracaibo, Venezuela",
  },
  {
    _id: 4,
    nombre: "Luisa Martínez",
    direccion: "Carrera 10, Barquisimeto, Venezuela",
  },
  {
    _id: 5,
    nombre: "Pedro González",
    direccion: "Avenida Bolívar, Mérida, Venezuela",
  },
]);

// 2. Editar 5 productos que ya se definieron.
let IDs = db.Productos.find({ precio: { $lt: 10 } })
  .limit(2)
  .map((doc) => ({ _id: doc._id }))
  .toArray();
db.Productos.updateMany({ $or: IDs }, { $set: { agotados: true } });
db.Productos.find({ agotados: true });

// 3. Consultar todas las rutas donde se hicieron entrega de productos.
db.Transacciones.drop();
db.Transacciones.insertMany([
  {
    _id: 1,
    producto_id: 1,
    proveedor_id: 1,
    cliente_id: 1,
    cantidad: 10,
  },
  {
    _id: 2,
    producto_id: 3,
    proveedor_id: 2,
    cliente_id: 2,
    cantidad: 5,
  },
  {
    _id: 3,
    producto_id: 5,
    proveedor_id: 3,
    cliente_id: 3,
    cantidad: 8,
  },
]);

db.Transacciones.aggregate(
  {
    $lookup: {
      from: "Clientes",
      localField: "cliente_id",
      foreignField: "_id",
      as: "direccionCliente",
    },
  },
  {
    $unwind: "$direccionCliente",
  },
  {
    $project: {
      rutaEntrega: "$direccionCliente.direccion",
    },
  }
);

// 4. Promediar el monto total de productos vendidos.
db.Transacciones.aggregate(
  {
    $lookup: {
      from: "Productos",
      localField: "producto_id",
      foreignField: "_id",
      as: "productoInfo",
    },
  },
  {
    $unwind: "$productoInfo",
  },
  {
    $project: {
      cantidad: "$cantidad",
      precio: "$productoInfo.precio",
      montoTotal: { $multiply: ["$cantidad", "$productoInfo.precio"] },
    },
  },
  {
    $group: {
      _id: null,
      promedioMontoTotal: {
        $avg: "$montoTotal",
      },
    },
  }
);

// 5. Mostrar todos los datos que contenga la base de datos (Tener en cuenta que los datos ingresados deben ser coherentes).
db.Clientes.aggregate(
  { $unionWith: "Transacciones" },
  { $unionWith: "Productos" }
);
