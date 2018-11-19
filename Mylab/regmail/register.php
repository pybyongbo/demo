<?php

include_once("connect.php");//连接数据库 

$username = stripslashes(trim($_POST['username']));


$password = md5(trim($_POST['password']));
$email = trim($_POST['email']);
$content = trim($_POST['content']);
$regtime = time();

$token = md5($username.$password.$regtime); //创建用于激活识别码
$token_exptime = time()+60*60*24;//过期时间为24小时后
//var_dump($_POST);
$sql = "insert into `wp_tuser` (`username`,`password`,`email`,`content`,`token`,`token_exptime`,`regtime`) values ('$username','$password','$email','$content','$token','$token_exptime','$regtime')";

mysql_query($sql);


// var_dump(mysql_insert_id());
// exit();

if(mysql_insert_id()){//写入成功，发邮件
	

		require_once('class.phpmailer.php');

				$mail = new PHPMailer(); //实例化
				$mail->IsSMTP(); // 启用SMTP
				$mail->Host = "smtp.qq.com"; //SMTP服务器 以163邮箱为例子
				$mail->Port = 25;  //邮件发送端口
				$mail->SMTPAuth   = true;  //启用SMTP认证

				$mail->CharSet  = "UTF-8"; //字符集
				$mail->Encoding = "base64"; //编码方式

				$mail->Username = "1774318147@qq.com";  //你的邮箱
				$mail->Password = "pyb19901214";  //你的密码
				$mail->Subject = "账号激活邮件"; //邮件标题

				$mail->From = "1774318147@qq.com";  //发件人地址（也就是你的邮箱）
				$mail->FromName = "admin";  //发件人姓名

				$address = $email;//收件人email
				$mail->AddAddress($address, "美华");//添加收件人（地址，昵称）

				$mail->IsHTML(true); //支持html格式内容


				$mail->Body = "亲爱的<b>".$username."</b>!<br/>感谢您在我站注册了新帐号。<br/>请点击下面的链接激活您的帐号。<br/> 
    					<a href='".$_SERVER['SERVER_NAME']."/active.php?verify=".$token."' target= 
					'_blank'>".$_SERVER['SERVER_NAME']."/active.php?verify=".$token."</a><br/> 
				   	 如果以上链接无法点击，请将它复制到你的浏览器地址栏中进入访问，该链接24小时内有效"; //邮件主体内容



				//发送
				if(!$mail->Send()) {
				  echo "发送失败: " . $mail->ErrorInfo;
				} else {
				  $_SESSION['time'] = time();
				 echo  '恭喜您，注册成功！<br/>请登录到您的邮箱及时激活您的帐号!进行登录网站^^^';
				 
				 //echo "success";
				}
		} else {

			echo 'fail';
		}
	



?>
