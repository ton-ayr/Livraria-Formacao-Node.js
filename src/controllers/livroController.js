import livro from "../models/livro.js";

class LivroController {
    static async listalivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na requisição`});
        }
    };

    static async listalivroId (req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na requisição`});
        }
    };

    static async cadastraLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Criado com sucesso!", livro: novoLivro});
        } catch (erro) {
            res.staus(500).json({message: `${erro.message} - falha ao cadastrar livro`});
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
};

export default LivroController;



