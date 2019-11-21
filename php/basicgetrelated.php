
	<?php
	include 'connect.php';
	?>


	<?php


	$conn = getConnection();
	$param1 = (isset($_GET['id']) ? $_GET['id'] : 0); // default to 0 to include all
	$param2 =  (isset($_GET['limit']) ? $_GET['limit'] : "0,5"); //"LIMIT 0,24"; //paging support
	$param3 =  (isset($_GET['type']) ? $_GET['type'] : "inspirations"); //"LIMIT 0,24"; //paging support
	$sql = ""; //FUNKY ERROR
	


	//echo "Connected successfully"; 



	$sql = $sql . "SELECT DISTINCT BR.to_id as item_id, BR.to_contenttype as content_type ";
	$sql = $sql . "FROM bolt_relations BR ";
	$sql = $sql . "WHERE BR.from_contenttype = '" . $param3 . "' ";
	$sql = $sql . ($param1 > 0 ? "AND BR.from_id = $param1 " : ""); //shorthand if .. then .. else..


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








