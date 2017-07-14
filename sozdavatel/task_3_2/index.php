<?
if(isset($_POST["send"])) {

$d=$_POST['date'];
$m=$_POST['month'];


function sayDate($date, $month)
{
	$sayMonth = array(1=>"января", 2=>"фераля",3=>"марта",4=>"апреля",5=>"мая",6=>"июня",7=>"июля",8=>"августа",9=>"сентября",10=>"октября",11=>"ноября",12=>"декабря");
    return $date." ".$sayMonth[$month];
}

echo sayDate($d, $m);
}

?>
