const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var jwt = require("jsonwebtoken");
const secret = "pawcare-Login-2023";
var cookieParser = require('cookie-parser')


app.use(cors());
app.use(express.json());
 

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "pawcare",
});
/*================================================================================ Register Page*/
  

app.post("/signup", function (req, res, next) {
  bcrypt.hash(req.body.signup_pwd, saltRounds, function (err, hash) {
    db.query(
      "INSERT INTO signup (signup_uname, signup_fullname, signup_email, signup_phone, signup_pwd, signup_address) VALUES(?,?,?,?,?,?)",
      [req.body.signup_uname, req.body.signup_fullname, req.body.signup_email, req.body.signup_phone, hash, req.body.signup_address],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok" });
        
      }
    );
  });
});


app.post("/signin", jsonParser, function (req, res, next) {
  db.query(
    "SELECT * FROM signup WHERE signup_uname=?",
    [req.body.signup_uname],
    function (err, signup, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (signup.length == 0) {
        res.json({ status: "error", message: "no users found" });
        return;
      }
      bcrypt.compare(
        req.body.signup_pwd,
        signup[0].signup_pwd,
        function (err, isLogin) {
          if (isLogin) {
            var token = jwt.sign({ signup_uname: signup[0].signup_uname }, secret, {
              expiresIn: '1h',
            });
            res.json({ status: "ok", message: "login success" , token});
          } else {
            res.json({ status: "err", message: "login failed" });
          }
        }
      );
    }
  );
});


app.post("/authen", jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, secret);
    res.json({ status: "ok", decoded });
  } catch (err) {  
    res.json({ status: "error", message: err.message });
  }
});


/*================================================================================ Register Page*/
/*================================================================================ ProfileUser Page*/

app.get("/profile", (req, res) => {
  db.query("SELECT * FROM signup", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.put('/update-username', jsonParser, (req, res) => {
  const { newUsername } = req.body;
  const token = req.headers.authorization.split(" ")[1]; // ดึง Token จาก Header

  try {
    const decoded = jwt.verify(token, secret);
    const currentUsername = decoded.signup_uname;

    // เรียกใช้งานคำสั่ง SQL หรือ ORM ของคุณเพื่ออัปเดต Username
    db.query(
      "UPDATE signup SET signup_uname = ? WHERE signup_uname = ?",
      [newUsername, currentUsername],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ status: 'error', message: 'เกิดข้อผิดพลาดในการอัปเดต Username' });
        } else {
          // สำเร็จ
          res.json({ status: 'ok', message: 'อัปเดต Username สำเร็จ' });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(401).json({ status: 'error', message: 'ไม่สามารถตรวจสอบ Token หรืออัปเดต Username ได้' });
  }
});


/*================================================================================ ProfileUser Page*/
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
