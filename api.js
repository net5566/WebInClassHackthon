import { Router } from 'express';

const router = new Router();

const links = 
{ 
  lnks: [
    { site: 'https://www.goethe.de/ins/tw/cn/index.html', name: '歌德學院', comment: '自己本身還算蠻常上去歌德的免費學習論壇上面學習的，上面還會有外國人主動搭訕來聊天練習德文。有一次不小心用了英文還被對方制止了。' },
    { site: 'http://www.bbc.co.uk/languages/german/', name: 'BBC德語學習網', comment: '以前上德文課的時候，老師上課偶爾會播放上面的影片來輔助教學。' },
  ]
};

const notiz = 
{ 
  notiz: [
    { date: '161201' },
    { date: '162222' },
  ]
};

// Write your restful api here:

router.get('/notiz', (req, res) => {
	res.json(notiz);
});

router.use('/notiz/:id',(req, res, next) => {

	let id = Number(req.params.id);

	if (isNaN(id)) {
		next();
	}

	if (id > 0 && id < 2){
		console.log(notiz.notiz[id-1]);
		res.json(notiz.notiz[id-1]);
	}
	else {
		next();
	}
});


router.get('/links', (req, res) => {
	res.json(links);
});

router.use('/links/:id',(req, res, next) => {

	let id = Number(req.params.id);

	if (isNaN(id)) {
		next();
	}

	if (id > 0 && id < 3){
		console.log(links.lnks[id-1]);
		res.json(links.lnks[id-1]);
	}
	else {
		next();
	}
});




export default router;