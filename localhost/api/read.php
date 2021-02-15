<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// CHECK GET ID PARAMETER OR NOT
if(isset($_GET['id']))
{
    //IF HAS ID PARAMETER
    $people_id = filter_var($_GET['id'], FILTER_VALIDATE_INT,[
        'options' => [
            'default' => 'all_peoples',
            'min_range' => 1
        ]
    ]);
}
else{
    $people_id = 'all_peoples';
}

// MAKE SQL QUERY
// IF GET peopleS ID, THEN SHOW peopleS BY ID OTHERWISE SHOW ALL peopleS
$sql = is_numeric($people_id) ? "SELECT * FROM `people` WHERE id='$people_id'" : "SELECT * FROM `people`"; 

$stmt = $conn->prepare($sql);

$stmt->execute();

//CHECK WHETHER THERE IS ANY people IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE peopleS ARRAY
    $peoples_array = [];
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
        $people_data = [
            'id' => $row['id'],
            'number' => $row['number'],
            'name' => $row['name'],
            'service' => $row['service'],
            'date' => $row['date']
        ];
        // PUSH people DATA IN OUR $peoples_array ARRAY
        array_push($peoples_array, $people_data);
    }
    //SHOW people/peopleS IN JSON FORMAT
    echo json_encode($peoples_array);
 

}
else{
    //IF THER IS NO people IN OUR DATABASE
    echo json_encode(['message'=>'No people found']);
}
?>