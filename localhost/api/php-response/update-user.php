<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id) 
	&& isset($data->number) 
	&& isset($data->name) 
    && isset($data->service) 
	&& isset($data->date) 
	&& is_numeric($data->id) 
	&& !empty(trim($data->number)) 
	&& !empty(trim($data->name))
    && !empty(trim($data->service)) 
	&& !empty(trim($data->date))
	){
    $peoplenumber = mysqli_real_escape_string($db_conn, trim($data->number));
    $peoplename = mysqli_real_escape_string($db_conn, trim($data->name));
    $peopleservice = mysqli_real_escape_string($db_conn, trim($data->service));
    $peopledate = mysqli_real_escape_string($db_conn, trim($data->date));
    
    $updatePeople = mysqli_query($db_conn,"UPDATE `people` SET `number`='$peoplenumber', `name`='$peoplename', `service`='$peopleservice', `date`='$peopledate' WHERE `id`='$data->id'");
        if($updatePeople){
            echo json_encode(["success"=>1,"msg"=>"User Updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Updated!"]);
        }
    
    
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}