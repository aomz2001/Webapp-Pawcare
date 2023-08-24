const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "pawcare",
});
/*================================================================================ Signup Page*/
app.get("/signup", (req, res) => {
  db.query("SELECT * FROM signup", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const username = req.body.signup_uname;
  const fullname = req.body.signup_fullname;
  const email = req.body.signup_email;
  const phone = req.body.signup_phone;
  const password = req.body.signup_password;
  const address = req.body.signup_address;

  db.query(
    "INSERT INTO signup (signup_uname, signup_fullname, signup_email, signup_phone, signup_pwd, signup_address) VALUES(?,?,?,?,?,?)",
    [username, fullname, email, phone, password, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Insert");
      }
    }
  );
});
/*================================================================================ Signup Page*/

/*================================================================================ AdminServ Page*/

/*================================================================================ AdminServ Page*/
/*================================================================================ AdminServPet Page*/
app.get("/showservpet", (req, res) => {
  db.query("SELECT * FROM servpet", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/showservpet-add", (req, res) => {
  const pet = req.body.servpet_pet;

  db.query(
    "INSERT INTO servpet (servpet_pet) VALUES(?)",
    [pet],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Insert");
      }
    }
  );
});

app.put('/showservpet-update', (req,res) =>{
  const id = req.body.servpet_id;
  const pet = req.body.servpet_pet;

  db.query("UPDATE servpet SET servpet_pet = ? WHERE servpet_id = ?", 
  [pet, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})
app.delete('/showservpet-delete/:servpet_id', (req, res) => {
  const id = req.params.servpet_id;

  db.query("DELETE FROM servpet WHERE servpet_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})
/*================================================================================ AdminServPet Page*/
/*================================================================================ AdminServDistrict Page*/
app.get("/showservdistrict", (req, res) => {
  db.query("SELECT * FROM servdistrict", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/showservdistrict-add", (req, res) => {
  const district = req.body.servdistrict_district;

  db.query(
    "INSERT INTO servdistrict (servdistrict_district) VALUES(?)",
    [district],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Insert");
      }
    }
  );
});

app.put('/showservdistrict-update', (req,res) =>{
  const id = req.body.servdistrict_id;
  const district = req.body.servdistrict_district;

  db.query("UPDATE servdistrict SET servdistrict_district = ? WHERE servdistrict_id = ?", 
  [district, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})
app.delete('/showservdistrict-delete/:servdistrict_id', (req, res) => {
  const id = req.params.servdistrict_id;

  db.query("DELETE FROM servdistrict WHERE servdistrict_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})
/*================================================================================ AdminServDistrict Page*/
/*================================================================================ AdminServService Page*/
app.get("/showservservice", (req, res) => {
  db.query("SELECT * FROM servservice", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/showservservice-add", (req, res) => {
  const service = req.body.servservice_service;

  db.query(
    "INSERT INTO servservice (servservice_service) VALUES(?)",
    [service],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Insert");
      }
    }
  );
});

app.put('/showservservice-update', (req,res) =>{
  const id = req.body.servservice_id;
  const service = req.body.servservice_service;

  db.query("UPDATE servservice SET servservice_service = ? WHERE servservice_id = ?", 
  [service, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})
app.delete('/showservservice-delete/:servservice_id', (req, res) => {
  const id = req.params.servservice_id;

  db.query("DELETE FROM servservice WHERE servservice_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})
/*================================================================================ AdminServService Page */
/*================================================================================ AdminServPrice Page*/
app.get("/showservprice", (req, res) => {
  db.query("SELECT * FROM servprice", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/showservprice-add", (req, res) => {
  const price = req.body.servprice_price;

  db.query(
    "INSERT INTO servprice (servprice_price) VALUES(?)",
    [price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Insert");
      }
    }
  );
});

app.put('/showservprice-update', (req,res) =>{
  const id = req.body.servprice_id;
  const price = req.body.servprice_price;

  db.query("UPDATE servprice SET servprice_price = ? WHERE servprice_id = ?", 
  [price, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})
app.delete('/showservprice-delete/:servprice_id', (req, res) => {
  const id = req.params.servprice_id;

  db.query("DELETE FROM servprice WHERE servprice_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})
/*================================================================================ AdminServPrice Page */
app.listen("5050", () => {
  console.log("Server is running in port 5050");
});
