# Indonesia-Region-MongoDB

Repositori API ini mengumpulkan semua data berupa (Provinsi, Kabupaten/Kota, Kecamatan dan Desa) di seluruh Indonesia dalam bentuk `mongodb`

Data `csv` diperoleh dari repo [edwardsamuel/Wilayah-Administratif-Indonesia](https://github.com/edwardsamuel/Wilayah-Administratif-Indonesia)

## Quick Start

Ubah nama file .env-example menjadi .env

Kemudian Silahkan melakukan konfigurasi database dan collection name pada file .env

Lakukan impor data collection dengan menjalankan perintah berikut pada terminal anda

```
npm run setup
```

Setelah proses migrasi database selesai, anda bisa menjalankan perintah

```
npm start
```

atau jika anda belum menginstall nodemon, maka jalankan perintah berikut

```
node app.js
```

Server akan berjalan pada http://localhost:8080

## Endpoint API

Base Endpoint API

```
/region
```

Get All Province

```
/province
```

Get Regency in Province

```
/province/id
```
