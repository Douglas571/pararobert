// 1. Anexar 5 planes brindados por la compañía.
db.Planes.drop();
db.Planes.insertMany([
  {
    nombre: "Plan Básico",
    ancho_de_banda: "50 Mbps",
    precio: 29.99,
    disponible: true,
  },
  {
    nombre: "Plan Estándar",
    ancho_de_banda: "100 Mbps",
    precio: 39.99,
    disponible: true,
  },
  {
    nombre: "Plan Premium",
    ancho_de_banda: "200 Mbps",
    precio: 49.99,
    disponible: true,
  },
  {
    nombre: "Plan Ultra",
    ancho_de_banda: "500 Mbps",
    precio: 59.99,
    disponible: true,
  },
  {
    nombre: "Plan Máximo",
    ancho_de_banda: "1 Gbps",
    precio: 79.99,
    disponible: true,
  },
]);

// 2. Editar 2 de los planes anexados.
let IDs = db.Planes.find({ precio: { $lt: 40 } })
  .map((doc) => ({ _id: doc._id }))
  .toArray();
db.Planes.updateMany({ $or: IDs }, { $set: { disponible: false } });

// 3. Anexar 20 clientes con diferentes planes dentro de la compañía.
db.Clientes.drop();
db.Clientes.insertMany([
  {
    nombre: "María Rodríguez",
    plan_contratado: "Plan Estándar",
    localidad: "Caracas",
  },
  {
    nombre: "Javier Gómez",
    plan_contratado: "Plan Básico",
    localidad: "Maracaibo",
  },
  {
    nombre: "Sofía Martínez",
    plan_contratado: "Plan Premium",
    localidad: "Valencia",
  },
  {
    nombre: "Carlos Pérez",
    plan_contratado: "Plan Ultra",
    localidad: "Barquisimeto",
  },
  {
    nombre: "Ana Ramírez",
    plan_contratado: "Plan Estándar",
    localidad: "Maracay",
  },
  {
    nombre: "Luisa Suárez",
    plan_contratado: "Plan Máximo",
    localidad: "Ciudad Guayana",
  },
  {
    nombre: "Pedro González",
    plan_contratado: "Plan Básico",
    localidad: "San Cristóbal",
  },
  {
    nombre: "Miguel Fernández",
    plan_contratado: "Plan Ultra",
    localidad: "Puerto La Cruz",
  },
  {
    nombre: "Gabriela Díaz",
    plan_contratado: "Plan Premium",
    localidad: "Barcelona",
  },
  {
    nombre: "Daniel López",
    plan_contratado: "Plan Máximo",
    localidad: "Mérida",
  },
  {
    nombre: "Valentina Torres",
    plan_contratado: "Plan Básico",
    localidad: "San Antonio del Táchira",
  },
  {
    nombre: "Ricardo Herrera",
    plan_contratado: "Plan Ultra",
    localidad: "Los Teques",
  },
  {
    nombre: "Verónica Castillo",
    plan_contratado: "Plan Premium",
    localidad: "Guarenas",
  },
  {
    nombre: "Jorge Vargas",
    plan_contratado: "Plan Estándar",
    localidad: "Punto Fijo",
  },
  {
    nombre: "Laura Rivas",
    plan_contratado: "Plan Máximo",
    localidad: "Ocumare del Tuy",
  },
  {
    nombre: "Eduardo Ramírez",
    plan_contratado: "Plan Estándar",
    localidad: "Carúpano",
  },
  {
    nombre: "Isabella Hernández",
    plan_contratado: "Plan Premium",
    localidad: "Upata",
  },
  {
    nombre: "Fernando Silva",
    plan_contratado: "Plan Básico",
    localidad: "El Tigre",
  },
  {
    nombre: "Alejandra Gutiérrez",
    plan_contratado: "Plan Máximo",
    localidad: "Ciudad Bolívar",
  },
  {
    nombre: "Oscar Mendoza",
    plan_contratado: "Plan Ultra",
    localidad: "Santa Teresa del Tuy",
  },
]);

// 4. Obtener las locaciones de los 20 clientes y enlistarlas en un objeto JSON.
let localidades = db.Clientes.distinct("localidad");
console.log({ localidades });

// 5. Mostrar todos los datos que contenga la base de datos (Tener en cuenta que los datos ingresados deben ser coherentes).
db.Clientes.aggregate({ $unionWith: "Planes" });
