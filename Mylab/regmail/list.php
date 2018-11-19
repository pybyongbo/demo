<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>注册用户列表!</title>
<style type="text/css">  
  table {
  	width:80%;
   border: 1px solid #B1CDE3;
   padding:0; 
   margin:0 auto;
   border-collapse: collapse;
  }
  table tr th{border:1px solid #B1CDE3;}
   table tr{height:32px;line-height: 32px;}
   table tr td {
   border: 1px solid #B1CDE3;
   background: #fff;
   font-size:12px;
   padding: 3px 3px 3px 8px;
   color: #4f6b72;
   text-align:center;
   margin-bottom:20px;
  }
  #page_num{margin-top:20px;}
  #page_num ul{overflow: hidden;}
#page_num ul li{float:left;margin-right:15px;height: 38px;line-height: 38px;border: 1px solid #dddddd;padding: 0 10px;
margin: 0 4px;font-size: 14px;display: inline-block;vertical-align: middle;font-size: 12px;font-weight: bold;}
#page_num ul li a{padding:2px 5px;}
</style>

</head>
<body>

<?php
require_once('connect.php'); 

$pagesize=4; //每页显示的记录数
//确定当前页数 $p 参数
$page = @$_GET['page']?$_GET['page']:1;

//数据指针
$offset = ($page-1)*$pagesize;

$result=mysql_query("select * from wp_tuser order by id desc limit $offset , $pagesize");


//计算新闻总数
$count_result = mysql_query("SELECT count(*) as count FROM wp_tuser");
$count_array = mysql_fetch_array($count_result);

//计算总的页数
$pagenum=ceil($count_array['count']/$pagesize);

?>
<h3 class="pagetitle">注册用户列表</h3>
<div class="box-163css">
<div id="more">


    	<table>
			<tr>
				<th>用户名</th>
				<th>邮箱</th>
				<th>内容</th>
				<th>注册时间</th>
				<th>状态</th>
			</tr>
			<?php

	     	while ($row=mysql_fetch_array($result)) 

	     	{

     		?>
			<tr>
				<td><?php echo $row['username'];?></td>
				<td><?php echo $row['email'];?></td>
				<td><?php echo $row['content'] ;?></td>
				<td><?php echo date('Y-m-d H:i:s',$row['regtime']);?></td>

				<td>
				<?php 

				if($row['status'] == 0) {
					echo '<font color="red">未激活</font>';
				} else {
					echo '<font color="blue">已激活</font>';
				}

				?>

				</td>
			</tr>


		<?php

			}

		?>	
	</table>

     			
   


	<?php

		echo '<div id="page_num">';
		echo '<div class="info"><strong>共 '.$count_array['count'].' 条数据</strong><em>每页显示<font color="red">'.$pagesize.'</font>条,</em><span>当前第'.$page.'页/共'.$pagenum.'页</span></div>';
			echo '<ul>';

		

			if($page ==1) {

				echo '<li>首页</li>';
				echo '<li>&lt</li>';
			} else{ 
				echo '<li><a href="list.php">首页</a></li>';
				echo '<li><a href="list.php?page='.($page-1).'">&lt</a></li>';
			  
			}


			 if ($pagenum > 1) {

				   for($i=1;$i<=$pagenum;$i++) {
				        if($i==$page) {
				            echo ' <li style="color:red">[',$i,']</li>';
				        } else {
				            echo '<li> <a href="list.php?page='.$i.'">',$i,'</a></li>';
				        }
				    }
			}


			if($page ==$pagenum ) {

				echo '<li>&gt</li>';
				echo '<li>尾页</li>';

			} else {
				  echo '<li><a href="list.php?page='.($page+1).'">&gt</a></li>';
				     echo "\n";
				     echo '<li><a href="list.php?page='.$pagenum.'">尾页</a></li>';
			}

			echo '<ul>';
		echo '</div>';
	?>
	

	<a href="/index.html">返回注册页面</a>
</div>
  
</div>
<a class="top" href="#top"></a>
</body>
</html>
