
	<?php
	include 'connect.php';
	?>


	<?php


	$conn = getConnection();
	$param1 = (isset($_GET['id']) ? $_GET['id'] : 0); // default to 0 to include all
	$param2 =  (isset($_GET['limit']) ? $_GET['limit'] : "0,5"); //"LIMIT 0,24"; //paging support
	$param3 =  (isset($_GET['type']) ? $_GET['type'] : "inspirations"); // taxonomie parameter
	$sql = ""; //FUNKY ERROR



	//echo "Connected successfully"; 

	$sql = $sql . "SELECT DISTINCT ";
	$sql = $sql . "F.id as item_id, ";
	$sql = $sql . "F.title as item_title, ";
	$sql = $sql . "F.teaser as item_desc, ";
	$sql = $sql . "F.image as item_image, ";
	$sql = $sql . "F.video as item_video, ";
	$sql = $sql . "'" . $param3 . "' as content_type, ";
	$sql = $sql . "F.datechanged as item_updated ";
	$sql = $sql . "FROM bolt_" . $param3 . " AS F ";
	$sql = $sql . "WHERE F.status = 'published' ";
	$sql = $sql . ($param1 > 0 ? "AND F.id = $param1 " : ""); //shorthand if .. then .. else...
	$sql = $sql . "ORDER BY F.datechanged DESC ";
	$sql = $sql . "LIMIT " . $param2;


	//echo($sql);


	$stmt = $conn->prepare($sql); 
	$stmt->execute();


	/* Fetch all of the remaining rows in the result set */
	//print("Fetch all of the remaining rows in the result set:\n");
	$result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
		
		
	//echo json_encode($result);
	//print_r($result);
	print_r(json_encode($result));
	$conn = null; //close connection
		
		
	?>








