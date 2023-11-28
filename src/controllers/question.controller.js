// controllers/QuestionController.js
const Question = require('../models/question');

exports.createQuestion = async (req, res) => {
    try {
        const question = new Question({ ...req.body });
        await question.save();
        res.status(201).send(question);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find({});
        res.send(questions);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).send();
        }
        res.send(question);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateQuestion = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).send();
        }
        updates.forEach(update => question[update] = req.body[update]);
        await question.save();
        res.send(question);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findByIdAndDelete(req.params.id);
        if (!question) {
            return res.status(404).send();
        }
        res.send(question);
    } catch (error) {
        res.status(500).send(error);
    }
};
