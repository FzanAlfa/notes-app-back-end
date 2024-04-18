const { nanoid } = require('nanoid'); //untuk import library
const notes = require('./notes');
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler, //handler atau event handler adalah fungsi yang digunakan untuk menangani dan merespons kejadian (event) yang terjadi di halaman web
    },
    {
        method: 'GET', //untuk menampilkan notes
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
     },
  ];
module.exports = routes;
