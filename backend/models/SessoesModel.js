import mongoose, { SchemaTypes } from "mongoose";

const Schema = mongoose.Schema;

const SessoesSchema = new Schema({
    id_usuario: {
        type: SchemaTypes.ObjectId,
        ref: 'usuarios'
    }
}, {
    timestamps: true
})

const SessoesModel = mongoose.model('sessoes', SessoesSchema);

export default SessoesModel;