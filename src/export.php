<?php
if(isset($_POST['tablestring'])) {
    $tbl=json_decode(stripslashes($_POST['tablestring']));
    $filename='export.xls';
    if(isset($_POST['filename'])) {
        $filename=stripslashes(trim($_POST['filename']));
    }
    header('Content-Type: application/vnd.ms-excel');
    header('Content-Disposition: attachment; filename="' . $filename . '";');
    echo "<table>";
    foreach ($tbl as $line) {
        echo "<tr>";
        foreach($line as $cell) {
            $val='';
            $type='text';
            if(is_array($cell)) {
                $val=$cell[0];
                $type=$cell[1];
            }else{
                $val=$cell;
            }
            $style='';
            if($type=='date') {
                $style=' style="mso-number-format:\'Short Date\';"';
            }
            if($type=='protected') {
                $val='="'.str_replace('"','""',$val).'"';
            }
            echo"<td$style>".$val."</td>";
            //echo"=\"".str_replace('"','""',$cell)."\",";
        }
        echo "</tr>";
        //echo "\n";
    }
    echo "</table>";
}
?>
