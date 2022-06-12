<?php
    
    $username = $_REQUEST['username'];
    $phone = $_REQUEST['phone'];
    include('./conn.php');
  
    $selectUserName = "select * from username where username='$username'";

    $res = $conn->query($selectUserName);
    
    if($res->num_rows>0){
       echo '[{"message":"用户名已存在"},{"error":1},{"username":"'.$username.'"}]';
      die();
    }
    $insertData = "insert into username (username,password,email,phone,address,sex) values ('$username','123456','zxc@qq.com','$phone','....',1)";
    $inserted = $conn->query($insertData);
  
   
  if($res){
    echo '[{"message":"注册成功"},{"error":0},{"username":"'.$username.'"}]';
   
  }

?>
