<?

// Каталог, в который мы будем принимать файл:
$uploaddir = 'upload';
$uploadfile = basename($_FILES['uploadfile']['name']);

// Копируем файл из каталога для временного хранения файлов:

if(exif_imagetype($_FILES['uploadfile']['tmp_name'])){

if (copy($_FILES['uploadfile']['tmp_name'], $uploadfile))
{
//echo "<h3>Файл успешно загружен на сервер</h3>";
$redicet = $_SERVER['HTTP_REFERER'];
@header ("Location: $redicet");
exit;
}
else { echo "<h3>Ошибка! Не удалось загрузить файл на сервер!</h3>"; exit; }
} else {echo 'Упс кажется вы выбрали не тот формат файла';}


//echo "<p><b>Тип загруженного файла: ".$_FILES['uploadfile']['type']."</b></p>";

?>
