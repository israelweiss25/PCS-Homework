import express from 'express';
import pool from '../pool.js'
const router = express.Router();


router.get('/api/contacts', async (req, res, next) => {
  try {
    const [results] = await pool.execute(
      'SELECT * FROM contacts2'
    );
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.send(results)
  } catch (err) {
    return next(err);
  }
});

router.get('/api/contacts/:id', async(req, res, next) => {
      let id = Number(req.params.id);
  try{
    const [result] = await pool.execute(
      `SELECT id, first, last, email, phone FROM contacts2 WHERE id = ?`, [Number(req.params.id)]
    );
    if (!result.length){
      res.writeHead(404, 'contact was not found in database', {
            'Content-Type': 'application/json',
      })
      res.end('404 - contact was not found in database')
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.send(result)
  }catch(e){
    return next(e)
  }
});
export default router;
