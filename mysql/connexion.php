<?php
$pdo = new PDO('mysql:host=localhost;dbname=greenitaccess',
  'siteweb', '0ILQcvXhvIzQj75s',
  [PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"]);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
