<?php
    
    $username = $_REQUEST['username'];

    echo $username;
    include('./conn.php');
  
    $sql = "select * from username where username='$username'";
    
    $res = $conn->query($sql);
  
    if($res->num_rows>0){
      echo '{"message":"用户名已存在","error":null,"error_no":0,"has":true,"color":"red","username":"'.$username.'"}';
    }else{
      echo '{"message":"用户名不存在","error":null,"error_no":0,"has":false,"color":"green","username":"'.$username.'"}';
    }

?>