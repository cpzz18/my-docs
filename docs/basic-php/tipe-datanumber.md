---
id: tipe-datanumber
title: Number di PHP
---

# 🔢 Number di PHP

**Number** (angka) adalah salah satu tipe data penting di PHP.  
PHP mendukung beberapa jenis bilangan seperti:

- Bilangan bulat (integer)
- Bilangan desimal (float)
- Notasi ilmiah (exponential/E notation)
- Bilangan dalam bentuk biner, oktal, dan heksadesimal
- Format angka dengan underscore (untuk keterbacaan)

---

## 💡 Penjelasan

PHP akan secara otomatis mengenali jenis angka berdasarkan format penulisannya:

| Jenis Angka     | Contoh         | Penjelasan                       |
|------------------|------------------|----------------------------------|
| Desimal          | `1234`           | Bilangan biasa                   |
| Oktal            | `01234`          | Angka dengan awalan `0`          |
| Heksadesimal     | `0x1A`           | Awalan `0x`, basis 16            |
| Biner            | `0b1111`         | Awalan `0b`, basis 2             |
| Float            | `1.234`          | Bilangan pecahan                 |
| E Notation       | `1.7e3`, `1.7e-3`| Notasi ilmiah                    |
| Underscore       | `1_000_000`      | Agar lebih mudah dibaca         |

---

## 📄 Contoh Kode

```php
<?php

echo "Desimal: ";
var_dump(1234);

echo "Octal: ";
var_dump(01234); // oktal, sama dengan desimal 668

echo "Hexadecimal: ";
var_dump(0x1A); // sama dengan 26

echo "Binary: ";
var_dump(0b11111111111111111111); // biner

echo "Underscore di Number: ";
var_dump(1_222_220_030); // hanya visual

echo "Floating point: ";
var_dump(1.234);

echo "Floating point dengan E notation (1.7 x 1000): ";
var_dump(1.7e3);

echo "Floating point dengan E notation minus (1.7 x 0.001): ";
var_dump(1.7e-3);

echo "Floating point dengan underscore: ";
var_dump(1_123.90);
