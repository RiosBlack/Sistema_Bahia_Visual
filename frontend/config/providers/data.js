import React from "react";
const columns = [
  {name: "NOME", uid: "name"},
  {name: "FUNÇÃO", uid: "role"},
  {name: "STATUS", uid: "status"},
  {name: "AÇÕES", uid: "actions"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "Serralheiro",
    cpf: "000.000.000-00",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    timeSheet: "R$ 1.500,00"
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Adm",
    cpf: "000.000.000-00",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    timeSheet: "R$ 2.500,00"
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Pintura",
    cpf: "000.000.000-00",
    status: "vocation",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    timeSheet: "R$ 1.000,00"
  },
];

export {columns, users};
