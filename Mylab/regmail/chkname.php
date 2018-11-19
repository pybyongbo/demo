<?php
include_once("connect.php");//连接数据库 
$username = stripslashes(trim($_POST['username']));
//检测用户名是否存在
$query = mysql_query("select id from t_user where username='$username'");
$num = mysql_num_rows($query);
if($num==1){
	//echo '<script>alert("用户名已存在，请换个其他的用户名");window.history.go(-1);</script>';
	//exit;
	echo '0';
} else{

	echo '1';
}



?>