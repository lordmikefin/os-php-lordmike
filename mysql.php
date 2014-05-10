<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Test site of Lord Mike</title>
  </head>
  <body>
    <p>Test site of Lord Mike</p>
    <p>mysql test connection.</p>
	<p>
	  mysql host: 
	  <?php
	    $testStr = "koe";
		echo $testStr . ": ";
	    echo $OPENSHIFT_MYSQL_DB_HOST . " ";
		#echo OPENSHIFT_MYSQL_DB_HOST . " ";
		echo ".. ";
		echo $OPENSHIFT_MYSQL_DB_PORT;
		#echo OPENSHIFT_MYSQL_DB_PORT;
      ?>
    </p>
	<p>
      <?php
	    // Connection URL: mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/
		
	    // connection object
        $con = mysqli_connect("localhost","adminSD1fY4U","uCr7zCtKkzpy","php");
	    
        // Check connection
        if (mysqli_connect_errno()) {
          echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
        
		$sql = "SELECT * FROM `test` LIMIT 0 , 30";
		
        $result = mysqli_query($con, $sql);
        
        while($row = mysqli_fetch_array($result)) {
          echo $row['name'];
          #echo $row;
          echo "<br>";
        }
		
		// Free result set
        mysqli_free_result($result);
        
        mysqli_close($con);
	  ?>
	</p>
  </body>
</html>
