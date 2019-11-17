
	<?php
	include 'connect.php';
	?>


	<?php


	$conn = getConnection();
	$param1 = (isset($_GET['id']) ? $_GET['id'] : 0); // default to 0 to include all
	$param2 =  (isset($_GET['limit']) ? $_GET['limit'] : "0,5"); //"LIMIT 0,24"; //paging support
	$param3 =  (isset($_GET['type']) ? $_GET['type'] : "inspirations"); // taxonomie parameter
	$sql = ""; //FUNKY ERROR
	$in = "";
	$row = "";


	//echo "Connected successfully"; 

	$sql = $sql . "SELECT DISTINCT BI.id as item_id, BI.datechanged "; //, ";
	$sql = $sql . "FROM bolt_" . $param3 . " BI ";
	$sql = $sql . "INNER JOIN bolt_relations BR ";
	$sql = $sql . "ON BI.id = BR.from_id ";
	$sql = $sql . "WHERE BI.status = 'published' ";
	//$sql = $sql . "AND BI.image != null ";
	$sql = $sql . ($param1 > 0 ? "AND BI.id = $param1 " : ""); //shorthand if .. then .. else...
	$sql = $sql . "ORDER BY BI.datechanged DESC ";
	$sql = $sql . "LIMIT " . $param2;



	echo($sql);


	$stmt = $conn->prepare($sql); 
	$stmt->execute();


	/* Fetch all of the remaining rows in the result set */
	//print("Fetch all of the remaining rows in the result set:\n");
	$result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
	//add check for empty result set
	foreach ($result as $row) {
		//echo $row["item_id"];
		$in = $in . $row["item_id"] . "," ;
	}
	$in = rtrim($in,',');

	//echo($in);


	$sql = "SELECT DISTINCT BI.id as item_id, ";
	$sql = $sql . "BI.title as item_title, ";
	$sql = $sql . "BI.image as item_image, ";
	$sql = $sql . "BI.video as item_video, ";
	$sql = $sql . "BR.to_contenttype as item_tocontenttype, ";
	$sql = $sql . "count(BR.to_contenttype) as total_of_type ";
	$sql = $sql . "FROM bolt_" . $param3 . " BI ";
	$sql = $sql . "LEFT OUTER JOIN bolt_relations BR ";
	$sql = $sql . "ON BI.id = BR.from_id ";
	$sql = $sql . "WHERE BI.id IN (" . $in . ") ";
	//$sql = $sql . "AND BR.to_contenttype != 'pages' ";
	$sql = $sql . "GROUP BY  BI.id, BI.title, BI.image, BI.video, BR.to_contenttype";

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








