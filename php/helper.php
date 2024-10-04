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

    // PAGINATION
    /**
     * Undocumented function
     *
     * @param [type] $limit
     * @return void
     * @param
     * @return
     * @version 1.0.0
     * @see url context
     * @author Kevin Tessier <kevin-tessier@protonmail.com>
     */
    function findStart($limit) { 
        if ((!isset($_GET['page'])) || ($_GET['page'] == "1")) { 
            $start = 0; 
            $_GET['page'] = 1; 
        } else { 
            $start = ($_GET['page']-1) * $limit; 
        } 
        return $start; 
    }
    /**
     * Undocumented function
     *
     * @param [type] $count
     * @param [type] $limit
     * @return void
     * @param
     * @return
     * @version 1.0.0
     * @see url context
     * @author Kevin Tessier <kevin-tessier@protonmail.com>
     */
    function findPages($count, $limit) { 
        $pages = (($count % $limit) == 0) ? $count / $limit : floor($count / $limit) + 1; 
        return $pages; 
    } 
    
    /**
     * Undocumented function
     *
     * @param [type] $curpage
     * @param [type] $pages
     * @return void
     * @param
     * @return
     * @version 1.0.0
     * @see url context
     * @author Kevin Tessier <kevin-tessier@protonmail.com>
     */
    function nextPrev($curpage, $pages) { 
        $next_prev  = ""; 

        if (($curpage-1) <= 0) { 
            $next_prev .= "Previous"; 
        } else { 
            $next_prev .= "<a href=\"".$_SERVER['PHP_SELF']."?page=".($curpage-1)."\">Previous</a>"; 
        } 

            $next_prev .= " | "; 

        if (($curpage+1) > $pages) { 
            $next_prev .= "Next"; 
        } else { 
            $next_prev .= "<a href=\"".$_SERVER['PHP_SELF']."?page=".($curpage+1)."\">Next</a>"; 
        } 
        return $next_prev; 
    }
}                           
?>
