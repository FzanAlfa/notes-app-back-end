npm init --y  (untuk generate package jhonson)
npm install nodemon --save-dev (berguna untuk menjalankan ulang server ketika terjadi perubahan pada berkas JavaScript)
npm install eslint --save-dev (ESLint dapat mengevaluasi kode yang dituliskan berdasarkan aturan yang Anda terapkan)
    npx eslint --init (konfigurasi eslint)
npm run start (berfungsi untuk mengeksekusi perintah)

berkas
server.js: Memuat kode untuk membuat, mengonfigurasi, dan menjalankan HTTP server menggunakan Hapi.
routes.js: Memuat kode konfigurasi routing server, seperti menentukan path, method, dan handler yang digunakan.
handler.js: Memuat seluruh fungsi-fungsi handler yang digunakan pada berkas routes.
notes.js: Memuat data notes yang disimpan dalam bentuk array objek.

mulai 
npm install @hapi/hapi (untuk menginstall hapi)
npm install nanoid@3.x.x (Kriteria menyebutkan bahwa properti id merupakan string dan harus unik.)

git
git add . digunakan untuk memasukkan semua berkas ke stash, terkecuali berkas node_modules.
git commit -m “initial commit” digunakan untuk menyimpan perubahan pada local repository. Setiap perubahan pada sistem git dapat ditelusuri berdasarkan commit history.