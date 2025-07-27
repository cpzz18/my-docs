---
id: arithmetic
title: Operator Aritmatika di PHP
---

# ➕ Operator Aritmatika di PHP

**Operator aritmatika** digunakan untuk melakukan operasi matematika seperti penjumlahan, pengurangan, perkalian, dan lainnya.

---

## 🧠 Daftar Operator Aritmatika

| Operator | Contoh        | Arti                      |
|----------|---------------|---------------------------|
| `+`      | `$a + $b`     | Penjumlahan               |
| `-`      | `$a - $b`     | Pengurangan               |
| `*`      | `$a * $b`     | Perkalian                 |
| `/`      | `$a / $b`     | Pembagian                 |
| `%`      | `$a % $b`     | Sisa hasil bagi (modulus) |
| `**`     | `$a ** $b`    | Pangkat (eksponensial)    |

---

## 📄 Contoh Kode

```php
<?php

$a = 10;
$b = 3;

echo "Penjumlahan: ";
var_dump($a + $b); // 13

echo "Pengurangan: ";
var_dump($a - $b); // 7

echo "Perkalian: ";
var_dump($a * $b); // 30

echo "Pembagian: ";
var_dump($a / $b); // 3.333...

echo "Modulus: ";
var_dump($a % $b); // 1

echo "Pangkat: ";
var_dump($a ** $b); // 1000
