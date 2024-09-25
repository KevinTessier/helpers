<?php

namespace Helper;

class Helper
{
    /**
     * Permet de créer un tableau flat à partir d'un tableau multidimensionnel
     * 
     * @param [type] $array
     * @return array
     * @version 1.0.0
     * @see url context
     * @author Kevin Tessier <kevin-tessier@protonmail.com>
    */
    public function arrayFlatten(Array $array) : array
    {
        $result = [];
    
        foreach ($array as $key => $element) {
            if (is_array($element)) {
                $result = array_merge($result, $this->arrayFlatten($element));
            } else {
                $result[$key] = $element;
            }
        }
    
        return $result;
    }

}

?>