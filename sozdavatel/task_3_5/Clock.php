<?
if(isset($_POST["send"])) {

$h=$_POST['hours'];
$m=$_POST['minutes'];
function getArrange($hours, $minutes)
{
	//24 часовой вариант
	$grad = abs(($hours%12)*30-($minutes)*6);
    return $grad;
}

echo getArrange($h,$m).'град';}

?>
