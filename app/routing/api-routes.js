
app.get("/api/:characters?", function (req, res) {
  var chosen = req.params.members;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < members.length; i++) {
      if (chosen === members[i].routeName) {
        res.json(members[i]);
        return;
      }
    }

    res.json(false);
  }
  else {
    res.json(members);
  }
});


app.post("/api/new", function (req, res) {
 
  var newMember = req.body;

  console.log(newMember);

  
  characters.push(newMember);


  res.json(newMember);
});