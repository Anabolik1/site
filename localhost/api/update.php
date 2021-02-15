<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, serviceization, X-Requested-With");

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
    $get_people = "SELECT * FROM `people` WHERE id=:people_id";
    $get_stmt = $conn->prepare($get_people);
    $get_stmt->bindValue(':people_id', $people_id,PDO::PARAM_INT);
    $get_stmt->execute();
    
    
    //CHECK WHETHER THERE IS ANY people IN OUR DATABASE
    if($get_stmt->rowCount() > 0){
        
        // FETCH people FROM DATBASE 
        $row = $get_stmt->fetch(PDO::FETCH_ASSOC);
        
        // CHECK, IF NEW UPDATE REQUEST DATA IS AVAILABLE THEN SET IT OTHERWISE SET OLD DATA
        $people_number = isset($data->number) ? $data->number : $row['number'];
        $people_name = isset($data->name) ? $data->name : $row['name'];
        $people_service = isset($data->service) ? $data->service : $row['service'];
        $people_date = isset($data->date) ? $data->date : $row['date'];
        
        $update_query = "UPDATE `people` SET number = :number, name = :name, service = :service, date =:date 
        WHERE id = :id";
        
        $update_stmt = $conn->prepare($update_query);
        
        // DATA BINDING AND REMOVE SPECIAL CHARS AND REMOVE TAGS
        $update_stmt->bindValue(':number', htmlspecialchars(strip_tags($people_number)),PDO::PARAM_STR);
        $update_stmt->bindValue(':name', htmlspecialchars(strip_tags($people_name)),PDO::PARAM_STR);
        $update_stmt->bindValue(':service', htmlspecialchars(strip_tags($people_service)),PDO::PARAM_STR);
        $update_stmt->bindValue(':date', htmlspecialchars(strip_tags($people_date)),PDO::PARAM_STR);
        $update_stmt->bindValue(':id', $people_id,PDO::PARAM_INT);
        
        
        if($update_stmt->execute()){
            $msg['message'] = 'Data updated successfully';
        }else{
            $msg['message'] = 'data not updated';
        }   
        
    }
    else{
        $msg['message'] = 'Invlid ID';
    }  
    
    echo  json_encode($msg);
    
}
?>