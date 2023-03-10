import mongoose from "mongoose";

const COLLECTION = 'cats';

// remove deprecation warning
mongoose.set('strictQuery', false);

const connect = (connStr) => {
    mongoose.connect(connStr)
        .then(() => console.log('DB [=>] ' + connStr))
        .catch((err) => {
            throw new Error(" Failed to connect :\n", { err })
        });
}

const ContactModel = mongoose.model(COLLECTION,
    new mongoose.Schema({
                _id: String,
                nom: String,
                prenom: String,
                entreprise: String,
                telephone: String,
                mobile: String,
                email: String,
                adresse: String,
                image: String
            })
);

export { connect , ContactModel };
