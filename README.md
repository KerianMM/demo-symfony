# demo-symfony

## Introduction

PHP: ^7.1.3
Composer
Yarn

## Installation

Tout d'abord, installer le projet:
```bash
$> git clone https://github.com/KerianMM/demo-symfony
$> cd demo-symfony/
```

### Dependances

Installer les dépendances PHP et CSS/JS:
```bash
$> composer install
$> yarn install
```

### Database

Configurer la BDD dans le `.env`:
```dotenv
DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name
```

Installer la BDD:
```bash
$> php bin/console doctrine:database:create
$> php bin/console doctrine:migrations:migrate
```

Installer les fixtures