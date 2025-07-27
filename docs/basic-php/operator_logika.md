---
id: logical
title: Operator Logika di PHP
---

# Operator Logika di PHP

**Operator logika** digunakan untuk menggabungkan ekspresi dan mengembalikan nilai `true` atau `false` berdasarkan logika tertentu.

---

## 🧠 Daftar Operator Logika

| Operator | Nama         | Contoh               | Arti                                |
|----------|--------------|----------------------|-------------------------------------|
| `&&`     | AND          | `$a && $b`           | True jika keduanya true             |
| `and`    | AND (lemah)  | `$a and $b`          | Sama seperti `&&`, tapi prioritas lebih rendah |
| `||`     | OR           | `$a || $b`           | True jika salah satu true           |
| `or`     | OR (lemah)   | `$a or $b`           | Sama seperti `||`, tapi prioritas lebih rendah |
| `!`      | NOT          | `!$a`                | True jika $a adalah false           |
| `xor`    | XOR          | `$a xor $b`          | True jika salah satu true, tapi tidak keduanya |

---

## 📄 Contoh Kode

```php
<?php

$a = true;
$b = false;

echo "AND (&&): ";
var_dump($a && $b); // false

echo "OR (||): ";
var_dump($a || $b); // true

echo "NOT (!): ";
var_dump(!$a);      // false

echo "XOR: ";
var_dump($a xor $b); // true
