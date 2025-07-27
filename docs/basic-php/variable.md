---
id: variable
title: Variabel di PHP
---

#  Variabel di PHP

**Variabel** adalah tempat untuk menyimpan data (nilai) dalam program.  
Di PHP, variabel digunakan untuk menyimpan teks, angka, array, dan banyak lagi.

---

## 💡 Ciri-Ciri Variabel PHP

- Selalu diawali dengan tanda `$`
- Nama variabel **case-sensitive** (`$nama` ≠ `$Nama`)
- Tidak perlu dideklarasikan tipe datanya (PHP bersifat *loosely typed*)

---

## 📄 Contoh Kode

```php
<?php
$nama = "Chandra";
$age = 19;

echo "Nama : ";
echo $nama;
echo "\n";

echo "Umur : ";
echo $age;
