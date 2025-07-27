---
id: if
title: If Statement di PHP
---

# 🧩 If Statement di PHP

`if` adalah pernyataan kondisional di PHP yang digunakan untuk mengeksekusi blok kode jika suatu kondisi bernilai **true**.  
Struktur ini penting untuk membuat keputusan dalam program.

---

## 💡 Bentuk Dasar

### 🔸 If...Else
```php
if (kondisi) {
    // jika kondisi true
} else {
    // jika kondisi false
}
```
### 🔸 If...Else..If
```php
if (kondisi1) {
    // jika kondisi1 true
} elseif (kondisi2) {
    // jika kondisi2 true
} else {
    // jika semua kondisi di atas false
}
```
## Contoh Code
```php
$nilai = 70;
$absen = 90;

if ($nilai >= 80 && $absen >= 80) 
echo "Nilai anda A"; 
else if ($nilai >=70 && $absen >= 70) 
echo "Nilai anda B";
else if ($nilai >=60 && $absen >=60)
echo "Nilai anda C";
else "Nilai anda D"; 
```
```
output : Nilai anda A