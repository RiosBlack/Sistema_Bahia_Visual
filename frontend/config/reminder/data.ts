import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "LEMBRETE", uid: "reminder", sortable: true},
  {name: "DATA", uid: "date", sortable: true},
  {name: "STATUS", uid: "isCheck",sortable: true},
  {name: "AÇÕES", uid: "actions"},
];

const reminders = [
  {
    id: 1,
    reminder: "Ir na biblioteca",
    date: "25/10/2022",
    user: "Teste",
    isCheck: "TRUE"
  },{
    id: 2,
    reminder: "Fazer atividade",
    date: "01/05/2023",
    user: "Teste",
    isCheck: "FALSE"
  },{
    id: 3,
    reminder: "Correr",
    date: "25/10/2024",
    user: "Teste",
    isCheck: "TRUE"
  },{
    id: 4,
    reminder: "IR NA PINTURA",
    date: "25/10/2022",
    user: "Teste",
    isCheck: "TRUE"
  },{
    id: 5,
    reminder: "Ir na biblioteca",
    date: "25/10/2022",
    user: "Teste",
    isCheck: "FALSE"
  },{
    id: 6,
    reminder: "Ir na biblioteca",
    date: "25/10/2022",
    user: "Teste",
    isCheck: "FALSE"
  },{
    id: 7,
    reminder: "Ir na biblioteca",
    date: "25/10/2022",
    user: "Teste",
    isCheck: "FALSE"
  },{
    id: 8,
    reminder: "Ir na biblioteca",
    date: "25/10/2022",
    user: "Teste",
    isCheck: "FALSE"
  },{
    id: 9,
    reminder: "Ir na biblioteca",
    date: "25/10/2022",
    user: "Teste",
    isCheck: "FALSE"
  },{
    id: 10,
    reminder: "Ir na biblioteca",
    date: "25/10/2022",
    user: "Teste",
    isCheck: "FALSE"
  }
];

export {columns, reminders};
