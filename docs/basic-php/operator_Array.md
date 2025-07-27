---
id: array-operator
title: Operator Array di PHP
---

# 🧮 Operator Array di PHP

**Operator array** digunakan untuk membandingkan atau menggabungkan array.  
PHP menyediakan beberapa operator khusus untuk menangani array.

---

## 🧠 Daftar Operator Array

| Operator | Nama              | Contoh              | Arti                                                                 |
|----------|-------------------|---------------------|----------------------------------------------------------------------|
| `+`      | Union             | `$a + $b`           | Gabungkan dua array (nilai dari array pertama dipakai jika ada key yang sama) |
| `==`     | Equality          | `$a == $b`          | True jika key dan value sama (urutan tidak diperhatikan)             |
| `===`    | Identity          | `$a === $b`         | True jika key, value, dan urutan sama persis                        |
| `!=`     | Not Equal         | `$a != $b`          | True jika tidak sama (key atau value berbeda)                        |
| `!==`    | Not Identical     | `$a !== $b`         | True jika key, value, atau urutan berbeda                           |

---

## 📄 Contoh Kode

```php
<?php

$a = [
    "satu" => 1,
    "dua" => 2,
];

$b = [
    "dua" => 2,
    "tiga" => 3,
];

// Union (gabungan)
$c = $a + $b;
var_dump($c);

// Perbandingan
var_dump($a == $b);  // false
var_dump($a === $b); // false
var_dump($a != $b);  // true
var_dump($a !== $b); // true
