---
id: increment-decrement
title: Operator Increment & Decrement di PHP
---

# Operator Increment & Decrement di PHP

**Operator increment dan decrement** digunakan untuk menambah atau mengurangi nilai variabel secara langsung.

---

## 🧠 Jenis Operator

| Operator | Contoh       | Arti                                |
|----------|--------------|-------------------------------------|
| `++$a`   | Pre-increment | Tambah 1 sebelum digunakan          |
| `$a++`   | Post-increment| Tambah 1 setelah digunakan          |
| `--$a`   | Pre-decrement | Kurangi 1 sebelum digunakan         |
| `$a--`   | Post-decrement| Kurangi 1 setelah digunakan         |

---

## 📄 Contoh Kode

```php
<?php

$a = 5;

echo "Post-increment (a++): ";
echo $a++; // 5
echo "\n";

echo "Setelah post-increment: ";
echo $a;   // 6
echo "\n";

$b = 5;

echo "Pre-increment (++b): ";
echo ++$b; // 6
echo "\n";

$c = 5;

echo "Post-decrement (c--): ";
echo $c--; // 5
echo "\n";

echo "Setelah post-decrement: ";
echo $c;   // 4
echo "\n";

$d = 5;

echo "Pre-decrement (--d): ";
echo --$d; // 4
