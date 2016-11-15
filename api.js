import { Router } from 'express';

const router = new Router();

const users = 
{ 
  users: [
    { avatar: 'http://xxx.com', name: 'John', age: 23 },
    { avatar: 'http://xxx.com', name: 'Amy', age: 18 },
  ]
};

// Write your restful api here:
router.get('/users', (req, res) => {
	res.json(users);
});

router.use('/users/:id',(req, res, next) => {

	let id = Number(req.params.id);

	if (isNaN(id)) {
		next();
	}

	if (id > 0 && id < 3){
		console.log(users.users[id-1]);
		res.json(users.users[id-1]);
	}
	else {
		next();
	}
});


export default router;
