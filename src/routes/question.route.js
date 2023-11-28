// routes/questionRoutes.js
const express = require('express');
const QuestionController = require('../controllers/question.controller');
const router = express.Router();

router.post('/questions', QuestionController.createQuestion);
router.get('/questions', QuestionController.getAllQuestions);
router.get('/questions/:id', QuestionController.getQuestionById);
router.patch('/questions/:id', QuestionController.updateQuestion);
router.delete('/questions/:id', QuestionController.deleteQuestion);

module.exports = router;
