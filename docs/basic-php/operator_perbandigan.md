---
id: comparison
title: Operator Perbandingan di PHP
---

# ⚖️ Operator Perbandingan di PHP

**Operator perbandingan** digunakan untuk membandingkan dua nilai.  
Hasilnya adalah **`true`** atau **`false`**, tergantung dari kondisi yang diuji.

---

## 🧠 Daftar Operator Perbandingan

| Operator | Contoh           | Arti                                |
|----------|------------------|-------------------------------------|
| `==`     | `$a == $b`       | Sama nilai                          |
| `===`    | `$a === $b`      | Sama nilai dan tipe data            |
| `!=`     | `$a != $b`       | Tidak sama nilai                    |
| `!==`    | `$a !== $b`      | Tidak sama nilai atau tipe data     |
| `<`      | `$a < $b`        | Kurang dari                         |
| `>`      | `$a > $b`        | Lebih dari                          |
| `<=`     | `$a <= $b`       | Kurang dari atau sama dengan        |
| `>=`     | `$a >= $b`       | Lebih dari atau sama dengan         |

---

## 📄 Contoh Kode

```php
<?php

// Sama nilai
var_dump("10" == 10);    // true
var_dump("10" === 10);   // false

// Tidak sama
var_dump(1 != "1");      // false
var_dump(1 !== "1");     // true

// Kurang dan lebih
var_dump(5 < 10);        // true
var_dump(10 > 5);        // true
var_dump(5 <= 5);        // true
var_dump(10 >= 20);      // false
