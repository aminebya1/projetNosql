// controllers/QuestionController.js
const Question = require('../models/question');


// Crée une questions pour le sondage
exports.createQuestion = async (req, res) => {
    try {
        const question = new Question({ ...req.body });
        await question.save();
        res.status(201).send(question);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Récuperer toutes les questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find({});
        res.send(questions);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Récuperer une question via l'iD
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

// Update une question
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

// Delete une question
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
