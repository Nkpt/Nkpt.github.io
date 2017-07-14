<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<form action="upload/index.php" method="post" enctype="multipart/form-data">
<input type="file" name="uploadfile">
<input type="submit" value="Загрузить">
</form>

<?

if ($imgDir = opendir('upload')) {

    while (false !== ($file = readdir($imgDir)) ) { 
		if( exif_imagetype('upload/'.$file)){
			//echo "$file\n";
			echo '<div style="width: 30%; height: 250px; display: inline-block; margin: 1.5%; text-align:center;"><img src="upload/'.$file.'" style="max-width: 100%; max-height: 100%;"/></div>';}
    }

    closedir($imgDir); 
}

?>

</body>
</html>
