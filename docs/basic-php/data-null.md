---
id: data-null
title: Null di PHP
---

#  Null di PHP

`null` di PHP digunakan untuk merepresentasikan **variabel tanpa nilai** atau **kosong**.  
Variabel menjadi `null` saat:

- Diberi nilai `null`
- Belum pernah diisi (tergantung konteks)
- Dihapus menggunakan `unset()`

---

## 💡 Fungsi Terkait Null

| Fungsi        | Penjelasan                                               |
|---------------|----------------------------------------------------------|
| `is_null($var)` | Mengembalikan `true` jika variabel bernilai null        |
| `isset($var)`   | Mengecek apakah variabel sudah diset dan **tidak null** |
| `unset($var)`   | Menghapus variabel                                       |

---

## 📄 Contoh Kode

```php
<?php

$name = "Chandra";
$name = null;

$age = null;

echo "Nama: ";
echo $name;
echo "\n";

echo "Umur: ";
echo $age;
echo "\n";

// is_null()
echo "Apakah \$name null?: ";
var_dump(is_null($name)); // true

// unset dan isset
$contoh = "Agus";
unset($contoh);

$contoh = "Edi";

echo "Apakah \$contoh sudah diset dan tidak null?: ";
var_dump(isset($contoh)); // true
