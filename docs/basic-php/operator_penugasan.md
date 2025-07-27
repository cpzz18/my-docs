---
id: assignment
title: Operator Penugasan di PHP
---

# Operator Penugasan di PHP

**Operator penugasan** digunakan untuk memberikan atau memperbarui nilai dari suatu variabel.

Contoh paling dasar adalah `=`, yang berarti “menugaskan nilai ke variabel”.

---

## 🧠 Daftar Operator Penugasan

| Operator | Contoh        | Arti                              |
|----------|---------------|-----------------------------------|
| `=`      | `$a = 10`      | Menugaskan nilai                  |
| `+=`     | `$a += 5`      | Sama dengan `$a = $a + 5`         |
| `-=`     | `$a -= 3`      | Sama dengan `$a = $a - 3`         |
| `*=`     | `$a *= 2`      | Sama dengan `$a = $a * 2`         |
| `/=`     | `$a /= 4`      | Sama dengan `$a = $a / 4`         |
| `%=`     | `$a %= 2`      | Sama dengan `$a = $a % 2`         |

---

## 📄 Contoh Kode

```php
<?php

$a = 10;
$b = 5;

$a += $b; // $a = $a + $b
var_dump($a); // 15

$a -= 3; // $a = $a - 3
var_dump($a); // 12

$a *= 2; // $a = $a * 2
var_dump($a); // 24

$a /= 4; // $a = $a / 4
var_dump($a); // 6

$a %= 4; // $a = $a % 4
var_dump($a); // 2
