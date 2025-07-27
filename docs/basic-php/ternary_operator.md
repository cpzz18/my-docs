---
id: ternary
title: Ternary Operator di PHP
---

# ⚖️ Ternary Operator di PHP

**Ternary operator** adalah bentuk ringkas dari `if...else` dalam satu baris.  
Operator ini sering digunakan untuk pengambilan keputusan sederhana.

---

## Bentuk Dasar

```php
kondisi ? nilaiJikaTrue : nilaiJikaFalse;
```

- Jika kondisi bernilai true, hasilnya nilaiJikaTrue
- Jika kondisi bernilai false, hasilnya nilaiJikaFalse

---

## 💡 Contoh Penggunaan

```php
<?php

$gender = "Pria";
$hi = $gender == "Pria" ? "hi bro" : "hi nona";

echo $hi . PHP_EOL;
```

```
Output: hi bro
```

## 💡 Contoh Penggunaan Lain

```
<?php

$nilai = 85;

$hasil = $nilai >= 75 ? "Lulus" : "Tidak Lulus";

echo $hasil;
```

```
Output: Lulus
```

---
