import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
    static async listaLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na requisição`});
        }
    };

    static async listaLivroId (req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na requisição`});
        }
    };

    static async cadastraLivro (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Criado com sucesso!", livro: novoLivro});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    };

    static async atualizarLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Livro atualizado`});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na atualização`});
        }
    };

    static async deletaLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: `Livro Deletado`});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na exclusão`});
        }
    };

    static async listaLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({editora});
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na busca`});
        }
    }
};

export default LivroController;

