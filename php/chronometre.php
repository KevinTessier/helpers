<?php
$debut = microtime(true);
$str1 = '';
for($i=0; $i<200000; ++$i) {
    $str1 .= $i;
}
$fin = microtime(true);
echo 'durée : ' . ($fin - $debut) . ' seconde(s)';
