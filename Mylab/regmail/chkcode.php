<?php
session_start();
$code = trim($_POST['verify']);
if($code == $_SESSION["code_math"]) {
	echo '1';
} else {
	echo '0';
}
?>