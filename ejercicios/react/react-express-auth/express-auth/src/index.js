const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = [
  {
    email: "pepito@gmail.com",
    password: "1234asd",
    username: "pepe el user",
    id: 1,
  },
  {
    email: "juanito@gmail.com",
    password: "1234asd",
    username: "juan el user",
    id: 2,
  },
  {
    email: "maria@gmail.com",
    password: "1234asd",
    username: "maria la user",
    id: 3,
  },
];

let authUser = null

const router = express.Router();

router.get("/", (req, res) => res.status(200).json({ data: "Server alive!" }));

router.post("/auth/login", (req, res, next) => {
  const { email, password } = req.body;

  const foundUser = users.find((user) => {
    return user.password === password && user.email === email;
  });

  if (foundUser){
    authUser= foundUser
  }

  res.status(200).json({ data: foundUser });
});

router.get('/auth/profile', (req, res, next) => {
  setTimeout(() => {
    res.status(200).json({ data: authUser });
  }, 1000);
});


router.post("/auth/register", (req, res, next) => {
  const { email, password, username } = req.body;

  const newUser = {
    email: email,
    password: password,
    username: username,
    id: users.length + 1,
  };

  users.push(newUser);

  res.status(200).json({ data: users });
});

app.use("/", router);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
