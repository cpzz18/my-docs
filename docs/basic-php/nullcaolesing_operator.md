---
id: nullcoalescing
title: Null Coalescing di PHP
---

# 🧩 Null Coalescing di PHP (`??`)

**Null Coalescing Operator** (`??`) digunakan untuk memeriksa apakah sebuah variabel memiliki nilai **selain `null`**, dan memberikan nilai default jika `null`.

---

## 💡 Sintaks

```php
$hasil = $variabel ?? $nilaiDefault;
```

## 💡 Contoh tanpa menggunakan Null Coalescing Operator

```php
<?php

$data = [
    "action" => "create"
];

if (isset($data["action"])) {
    $action = $data["action"];
} else {
    $action = "nothing";
}

echo $action . PHP_EOL;

```

Output: `create`

## 💡 Contoh menggunakan Null Coalescing Operator

```php
<?php

$data = [];

$action = $data["action"] ?? "nothing";

echo $action . PHP_EOL;

```

Output: `nothing`
