---
id: for
title: For Loop di PHP
---

# 🔁 Perulangan `for` di PHP

`for` adalah salah satu struktur perulangan di PHP yang digunakan saat kamu tahu berapa kali perulangan harus dilakukan.  
Umumnya digunakan untuk melakukan aksi tertentu sebanyak jumlah yang ditentukan.

---

## 💡 Sintaks Dasar

```php
for (inisialisasi; kondisi; increment/decrement) {
    // kode yang dijalankan selama kondisi true
}
```

- `inisialisasi`: variabel yang akan digunakan untuk menghitung jumlah perulangan.
- `kondisi`: kondisi yang harus dipenuhi untuk melanjutkan perulangan
- `increment/decrement`: variabel yang digunakan untuk menghitung jumlah perulangan.
- `kode yang dijalankan selama kondisi true`: kode yang akan dijalankan selama kondisi masih true.

---

### Perulangan tanpa berhenti

```php
<?php
for (;;) {
echo "haloo saya chandra";
}
```

### Perulangan dengan kondisi

```php
<?php
counter = 1;

for (; $counter <= 10;) {
echo "hello for loop ke : " . $counter . PHP_EOL;
$counter++;
}
```

### Perulangan dengan inisiasi

```php
<?php
for($counter = 1; $counter <= 10;){
echo "hello for loop ke-$counter" . PHP_EOL;
$counter++;
}
```

### Perulangan dengan Increment/Decrement

```php
<?php
for ($counter = 1; $counter <= 10; $counter++){
echo "hello for loop ke-$counter" . PHP_EOL;
}
```

---
