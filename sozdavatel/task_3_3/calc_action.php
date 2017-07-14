<?
if(isset($_POST["send"])) {

$op=$_POST['operator'];



switch ($op) {
case 1:
    echo $_POST['num_1']+$_POST['num_2'];
    break;
case 2:
    echo $_POST['num_1']-$_POST['num_2'];
    break;
case 3:
	echo $_POST['num_1']/$_POST['num_2'];
    break;
case 4:
    echo $_POST['num_1']*$_POST['num_2'];
    break;
}



	//echo $_POST['operator'], $_POST['num_1'], $_POST['num_2'];
    }
?>
