<?php

    include('config.php');

    if(isset($_POST['action'])){   

        $action = $_POST['action'];
        
        if($action == 'SIGNUP'){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $username = $_POST['username'];
            $password = $_POST['password'];
            $result = mysqli_query($conn,"INSERT INTO users (name,email,username,password) VALUES('$name','$email','$username','$password') ");
            echo $result;
        }

        if($action == 'LOGIN'){
            $username = $_POST['username'];
            $password = $_POST['password'];

            $result = mysqli_query($conn,"SELECT * FROM users WHERE username='".$username."' AND password='".$password."'");

            if($result->num_rows != 0){
                while ($row = mysqli_fetch_assoc($result)) {
                    $response[] = $row;
                }
                echo json_encode($response);
            }else{
                echo 'null';
            }
        }
    }

?>