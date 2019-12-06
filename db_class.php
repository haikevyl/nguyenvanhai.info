<?php

class database
{
	protected $connection = null;
	protected $tableName = "";
	protected $statement = null;
	protected $limit = 15;
	protected $offset = 0;
	protected $host = ""; 
	protected $user = ""; 
	protected $pass = ""; 
	protected $name = "";

	public function __construct($config)
	{
		$this->host = $config["host"];
		$this->user = $config["user"];
		$this->pass = $config["pass"];
		$this->name = $config["name"];
		$this->connect();
	}
	
	protected function connect()
	{
		$this->connection = new mysqli(
			$this->host,
			$this->user,
			$this->pass,
			$this->name
		);
		if ($this->connection->connect_errno) {
			exit($this->connection->connect_error);
		}
	}

	public function table($tableName)
	{
		$this->table = $tableName;
		return $this;
	}

	public function limit($limit)
	{
		$this->limit = $limit;
		return $this;
	}

	public function offset($offset)
	{
		$this->offset = $offset;
		return $this;
	}

	public function ressetQuery()
	{
		$this->tableName = "";
		$this->limit = 15;
		$this->offset = 0;
	}
	public function getALL()
	{
		$sql = "SELECT * FORM $this->table LIMIT ?, ?";
		$this->statement = $this->connection->prepare($sql);
		$this->statement->bind_param("ii", $offset, $this->limit);
		$this->statement->execute();
		$this->ressetQuery();
		$result = $this->statement->get_result();
		$returnData = [];
		while ($row = $result->fetch_object()) {
			$returnData = $row;
		}
		return $returnData;
	}

	public function insert($data = [])
	{
		$fields = implode(",", array_keys($data));
		$valueStr = implode(",", array_fill(0, count($data), "?"));
		$values = array_values($data);
		$sql = "INSERT INTO $this->table($fields) VALUES ($valueStr)";
		$this->statement = $this->connection->prepare($sql);
		$this->statement->bind_param(str_repeat("s", count($data)), ...$values);
		$this->statement->execute();
		$this->ressetQuery();
		return $this->statement->affected_rows;
	}

	public function updateRow($id, $data = [])
	{
		$keyValues = [];
		foreach ($data as $key => $value) {
			$keyValues[] = $key."=?";
		}
		$setFields = implode(",", $keyValues);
		$sql = "UPDATE $this->table SET $setFields WHERE id = ?";
		$this->statement = $this->connection->prepare($sql);
		$dataType = str_repeat("s", count($data)) . "i";
		$values = array_values($data);
		$values[] = $id;
		$this->statement->bind_param($dataType, ...$values);
		$this->statement->execute();
		$this->ressetQuery();
		return $this->statement->affected_rows;
	}

	public function deleteId($id)
	{
		$sql = "DELETE FORM $this->table WHERE id = ?";
		$this->statement = $this->connection->prepare($sql);
		$this->statement->bind_param("i", $id);
		$this->statement->execute();
		$this->ressetQuery();
		return $this->statement->affected_rows;
	}
}

?>