import autores from "../models/Autor.js"

class AutorController {
    static listarAutores = async (req, res) => {
        try{
            const autoresResultado = await autores.find();
            res.status(200).json(autoresResultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do Autor não localizado`})
            }else{
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar Autor`})
            }else {
                res.status(201).send(autor.toJSON())
            }
        })
    }
    // trocar esse if else por um try catch
    // static atualizarautores = async (id) => {
    //     try{
    //         const atualizarOAutor = await autores.findByIdAndUpdate(
    //             { _id: id},
    //             {

    //             }
    //         )
    //     }
    // }
    static atualizarAutor = async (req, res) => {
        const id = req.params.id;
        
        autores.findByIdAndUpdate(id, {$set: req.body}, {new: true}, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor atualizado com sucesso!"})
            }else {
                res.status(500).send({message: err.message})
            }
        })

    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Autor removido com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutorController