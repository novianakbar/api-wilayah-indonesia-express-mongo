# Indonesia-Region-MongoDB

Repositori API ini mengumpulkan semua data berupa (Provinsi, Kabupaten/Kota, Kecamatan dan Desa) di seluruh Indonesia dalam bentuk `mongodb`

Data `csv` diperoleh dari repo [edwardsamuel/Wilayah-Administratif-Indonesia](https://github.com/edwardsamuel/Wilayah-Administratif-Indonesia)

Akses Live API Kami Disini

[https://api-indonesia.nvapp.my.id](https://api-indonesia.nvapp.my.id)

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

Base Endpoint API adalah endpoint api dasar yang digunakan untuk mengakses data. Base Endpoint API tidak dapat berdiri sendiri dan membutuhkan route berdasarkan keperluan. ada beberapa route yang dapat digunakan. diantaranya :

- [Get All Province](#get-all-province)
- [Get Regency in Province](#get-regency-in-province)
- [Get District in Regency](#get-district-in-regency)
- [Get Village in District](#get-village-in-district)
- [Get Village Detail](#get-village-detail)

```
http://localhost:8080/region
```

#### Get All Province

Route ini digunakan untuk mendapatkan data JSON dari seluruh provinsi yang ada di Indonesia

```
/province
```

Contoh Output data seperti dibawah :

```json
{
  "status": true,
  "message": "Data All Province",
  "data": [
    {
      "id": 11,
      "name": "ACEH"
    },
    {
      "id": 12,
      "name": "SUMATERA UTARA"
    },
    {
      "id": 13,
      "name": "SUMATERA BARAT"
    },
    {
      "id": 14,
      "name": "RIAU"
    },
    {
      "id": 15,
      "name": "JAMBI"
    }
  ]
}
```

#### Get Regency in Province

Route ini digunakan untuk mendapatkan data JSON Kabupaten/Kota dari provinsi yang dipilih berdasarkan id

```
/province/:id
```

Contoh Output Data seperti dibawah :

```json
{
  "status": true,
  "message": "Data Regency in Province",
  "data": [
    {
      "name": "JAWA TENGAH",
      "id": 33,
      "regencies": [
        {
          "id": 3301,
          "name": "KABUPATEN CILACAP"
        },
        {
          "id": 3302,
          "name": "KABUPATEN BANYUMAS"
        },
        {
          "id": 3303,
          "name": "KABUPATEN PURBALINGGA"
        },
        {
          "id": 3304,
          "name": "KABUPATEN BANJARNEGARA"
        },
        {
          "id": 3305,
          "name": "KABUPATEN KEBUMEN"
        },
        {
          "id": 3306,
          "name": "KABUPATEN PURWOREJO"
        },
        {
          "id": 3307,
          "name": "KABUPATEN WONOSOBO"
        }
      ]
    }
  ]
}
```

#### Get District in Regency

Route ini digunakan untuk mendapatkan data JSON Kecamatan dari Kabupaten/Kota yang dipilih berdasarkan id

```
/regency/:id
```

Contoh Output Data seperti dibawah :

```json
{
  "status": true,
  "message": "Data Regency",
  "data": [
    {
      "name": "KABUPATEN BANYUMAS",
      "id": 3302,
      "province": {
        "id": 33,
        "name": "JAWA TENGAH"
      },
      "districts": [
        {
          "id": 3302010,
          "name": "LUMBIR"
        },
        {
          "id": 3302020,
          "name": "WANGON"
        },
        {
          "id": 3302030,
          "name": "JATILAWANG"
        },
        {
          "id": 3302040,
          "name": "RAWALO"
        }
      ]
    }
  ]
}
```

#### Get Village in District

Route ini digunakan untuk mendapatkan data JSON Kelurahan/Desa dari Kecamatan yang dipilih berdasarkan id

```
/district/:id
```

Contoh Output Data seperti dibawah :

```json
{
  "status": true,
  "message": "Data Village in District",
  "data": [
    {
      "name": "PEKALONGAN BARAT",
      "id": 3375010,
      "province": {
        "id": 33,
        "name": "JAWA TENGAH"
      },
      "regency": {
        "id": 3375,
        "name": "KOTA PEKALONGAN"
      },
      "villages": [
        {
          "id": 3375010004,
          "name": "MEDONO"
        },
        {
          "id": 3375010007,
          "name": "PODOSUGIH"
        },
        {
          "id": 3375010010,
          "name": "TIRTO"
        }
      ]
    }
  ]
}
```

#### Get Village Detail

Route ini digunakan untuk mendapatkan data JSON dari Kelurahan/Desa yang dipilih berdasarkan id

```
/village/:id
```

Contoh Output Data seperti dibawah :

```json
{
  "status": true,
  "message": "Detail Data Village",
  "data": [
    {
      "name": "TIRTO",
      "id": 3375010010,
      "province": {
        "id": 33,
        "name": "JAWA TENGAH"
      },
      "regency": {
        "id": 3375,
        "name": "KOTA PEKALONGAN"
      },
      "district": {
        "id": 3375010,
        "name": "PEKALONGAN BARAT"
      }
    }
  ]
}
```
