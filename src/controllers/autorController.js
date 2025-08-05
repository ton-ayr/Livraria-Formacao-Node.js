import {autor} from "../models/Autor.js";

class AutorController {
    static async listaAutores (req, res) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na requisição`});
        }
    };

    static async listaAutorId (req, res) {
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na requisição`});
        }
    };

    static async cadastraAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Criado com sucesso!", autor: novoAutor});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor`});
        }
    };

    static async atualizarAutor (req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Autor atualizado`});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na atualização`});
        }
    };

    static async deletaAutor (req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: `Autor Deletado`});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - erro na exclusão`});
        }
    };
};

export default AutorController;
