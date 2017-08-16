<?php  
	defined('BASEPATH') OR exit('No direct script access allowed');
	class User_model extends CI_Model{
		public function insert_user($name,$password){
			$arr=array(
				'name'=>$name,
				'password'=>$password,
				);
			$query=$this->db->insert('user',$arr);
			return $query;
		}
		public function get_user($uid){
			$arr=array(
				'u_id'=>$uid
			);
			$this->db->from('user');
			$this->db->where('u_id',$uid);
			$query=$this->db->get();
			return $query->row();
		}
		
	}
	
?>