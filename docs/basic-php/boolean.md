---
id: boolean
title: Boolean di PHP
---

#  Boolean di PHP

**Boolean** adalah tipe data logika yang hanya memiliki dua nilai:

- `true` → benar  
- `false` → salah

Tipe data ini **sangat sering digunakan** dalam struktur kontrol seperti `if`, `while`, dan operator logika.

---

## 💡 Kapan Boolean Dipakai?

- Saat membandingkan dua nilai: `5 > 3` akan menghasilkan `true`
- Saat mengecek kondisi: `if ($login == true)`
- Saat menggunakan fungsi `var_dump()` untuk menampilkan tipe boolean

---

## 📄 Contoh Kode

```php
<?php

echo "Benar: ";
var_dump(true); // true

echo "Salah: ";
var_dump(false); // false
