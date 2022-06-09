<?php
    
    $username = $_REQUEST['username'];

    include('./conn.php');
  
    $sql = "select * from username where username='$username'";
    
    $res = $conn->query($sql);
  
    if($res->num_rows>0){
      echo '[{"message":"用户名已存在"},{"error":null},{"error_no":0},{"has":true},{"username":"'.$username.'"}]';
    }else{
      echo '[{"message":"不存在该用户名"},{"error":null},{"error_no":0},{"has":false},{"username":"'.$username.'"}]';
    }

?>