const Aluno = require('../models/Aluno');

// Listar todos os alunos
const listarAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar novo aluno
const criarAluno = async (req, res) => {
  const { nome, matricula, curso } = req.body;
  const aluno = new Aluno({ nome, matricula, curso });

  try {
    await aluno.save();
    res.status(201).json(aluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar aluno
const atualizarAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(aluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remover aluno
const removerAluno = async (req, res) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { listarAlunos, criarAluno, atualizarAluno, removerAluno };
