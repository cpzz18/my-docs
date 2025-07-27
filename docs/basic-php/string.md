---
id: string
title: String di PHP
---

# String di PHP

**String** adalah tipe data di PHP yang digunakan untuk menyimpan teks.  
Umumnya, kita menggunakan string untuk menampilkan informasi, menyimpan input, atau memproses data berbentuk teks.

---

## 💡 Penjelasan Singkat

PHP mendukung beberapa cara untuk membuat string, yaitu:

- Menggunakan **single quote** `'...'`
- Menggunakan **double quote** `"..."` (bisa interpolasi variabel dan karakter khusus)
- Menggunakan **Heredoc**
- (Ada juga Nowdoc — mirip single quote, tapi tidak diproses)

---

## 📄 Contoh Kode

```php
<?php

// Single Quote (tidak memproses karakter spesial)
echo 'Nama : ';
echo 'Chandra Falla';
echo "\n";

// Double Quote (memproses karakter \n, \t, variabel)
echo "Nama : ";
echo "Chandra Falla Arya";
echo "\n";

echo "Nama : ";
echo "Chandra\tFalla\tArya\n";

// Heredoc (cara ketiga menulis string panjang)
echo <<<Chandra
Selamat belajar PHP!
Sekarang kita belajar tipe data string.
Ini adalah cara ke-3 membuat string,
menggunakan heredoc.
Chandra;
