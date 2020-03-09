<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      $furniture = $_POST["furniture"];
      $material = $_POST["material"];
      $count = $_POST["count"];
     ?>
     <h3>Ваш заказ принят</h3>
     <h5>Заказано изделие - <?php echo "$furniture"; ?></h5>
     <h5>Материал         - <?php echo "$material"; ?></h5>
     <h5>Количество       - <?php echo "$count"; ?></h5>
  </body>
</html>
