<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));


//CHECKING, IF ID AVAILABLE ON $data
if(isset($data->id)){
    $msg['message'] = '';
    
    $people_id = $data->id;
    
    //GET people BY ID FROM DATABASE
    // YOU CAN REMOVE THIS QUERY AND PERFORM ONLY DELETE QUERY
    $check_people = "SELECT * FROM `people` WHERE id=:people_id";
    $check_people_stmt = $conn->prepare($check_people);
    $check_people_stmt->bindValue(':people_id', $people_id,PDO::PARAM_INT);
    $check_people_stmt->execute();
    
    //CHECK WHETHER THERE IS ANY people IN OUR DATABASE
    if($check_people_stmt->rowCount() > 0){
        
        //DELETE people BY ID FROM DATABASE
        $delete_people = "DELETE FROM `people` WHERE id=:people_id";
        $delete_people_stmt = $conn->prepare($delete_people);
        $delete_people_stmt->bindValue(':people_id', $people_id,PDO::PARAM_INT);
        
        if($delete_people_stmt->execute()){
            $msg['message'] = 'people Deleted Successfully';
        }else{
            $msg['message'] = 'people Not Deleted';
        }
        
    }else{
        $msg['message'] = 'Invlid ID';
    }
    // ECHO MESSAGE IN JSON FORMAT
    echo  json_encode($msg);
    
}
?>