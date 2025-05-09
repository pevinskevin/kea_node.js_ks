import { Router } from 'express';
const router = Router();

const employees = ['Ilmer', 'Homer'];

// // If you want to enable CORS for a specific endpoint
// import cors from 'cors';

// router.get('/employees', cors(), (req, res)=>{
//     res.send({data: employees})
// })

router.get('/employees', (req, res) => {
	res.send({ data: employees });
});

export default router;
