<?

if(isset($_POST["send"])) {

$s=$_POST['sum'];
$m=$_POST['srok'];
$p=$_POST['percent'];
function sayIncome($sum, $month, $percent)
{
	$inc = (($sum*($percent/100))/12)*$month;


    return $inc;
}

echo sayIncome($s, $m, $p);
}

?>
