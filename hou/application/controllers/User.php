<?php  
	defined('BASEPATH') OR exit('No direct script access allowed');
	class User extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->model('user_model');
		}
		public function insert_user(){
			
			$name=$this->input->get('tel');
			$password=$this->input->get('pass');
			$result=$this->user_model->insert_user($name,$password);
			if($result){
	            echo "success";
	        }
	        else{
	            echo 'failed';
	        }
			
		}
		public function get_user(){
			$uid=$this->input->get('uid');
			$result=$this->user_model->get_user($uid);
			echo json_encode($result);
		}
		
	 }



?>