import express from 'express';

router = express.Router();

// refresh access token
router.route('/refresh/access').post( async (req, res) => {

});

// refresh refresh token
router.route('/refresh/refresh').post( async (req, res) => {

}

export default router;
