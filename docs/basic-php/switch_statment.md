---
id: switch
title: Switch Statement di PHP
---

# 🔀 Switch Statement di PHP

`switch` adalah alternatif dari `if...elseif...else` yang digunakan untuk memilih salah satu dari banyak blok kode berdasarkan nilai suatu ekspresi.

---

## 💡 Kapan Menggunakan `switch`?

Gunakan `switch` saat kamu ingin mengecek **satu variabel terhadap banyak kemungkinan nilai** secara lebih rapi dan terstruktur.

---

## 🧱 Struktur Dasar

```php
<?php

$nilai = 80

switch(true) {  
case ($nilai >= 80):
echo "nilai anda A";
break;
case ($nilai>= 70):
echo "Nilai anda B";
break;
case ($nilai>= 60):
echo "Nilai anda c";
break;
default :
echo "nilai anda d";
break;
}
```
```
output : Nilai anda A
```
---
## ❗Penting
- Gunakan `break`; untuk menghentikan eksekusi setelah suatu case cocok.
- Jika `break` tidak ditulis, maka akan mengeksekusi semua case setelahnya **(disebut fallthrough)**.

