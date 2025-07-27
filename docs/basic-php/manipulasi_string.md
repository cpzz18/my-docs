---
id: string-manipulasi
title: Manipulasi String di PHP
---

# 🛠️ Manipulasi String di PHP

PHP menyediakan berbagai cara untuk memanipulasi string, seperti menggabungkan, mengakses karakter, parsing variabel, dan konversi tipe.

---

## 🔡 Dasar Manipulasi String

### 🧷 Menggabungkan String

```php
<?php

$name = "Chandra Falla";
echo "Name : " . $name . PHP_EOL; // Output: Name : Chandra Falla
echo "Value : " . 100 . PHP_EOL; // Output: Value : 100

//konversi tipe data	
$valuestring = (string)11; //konversi integer ke string
var_dump($valuestring) . PHP_EOL;

$valueint = (int)"11"; //konversi string ke integer
var_dump($valueint) . PHP_EOL;

$valuefloat = (float)"11.3"; // konversi string ke float
var_dump($valuefloat) . PHP_EOL;

//mengakses karakter
echo $name[0] . PHP_EOL; 
echo $name[1] . PHP_EOL;

//variable parsing
echo "Halo $name, Selamat Belajar PHP". PHP_EOL; // Halo Chandra Falla, Selamat Belajar PHP

//curly brace
echo "Halo {$name} arya, Selamat Belajar PHP"; //Halo Chandra Falla arya, Selamat Belajar PHP

