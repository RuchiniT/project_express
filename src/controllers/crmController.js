import mongoose from 'mongoose';
import {ContactSchema} from '../models/crmModel.js';

const items = mongoose.model('items', ContactSchema);

export const addNewContact = (req, res) => {
    const newContact = new Contact(req.body);

    newContact.save()
    .then((items) => res.json(items))
    .catch((err) => res.status(500).send(err));
};

export const getContacts = (req, res) => {
    Contact.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(500).send(err));
};

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId)
        .then((items) => res.json(items))
        .catch((err) => res.status(500).send(err));
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true})
        .then((contact) => res.json(contact))
        .catch((err) => res.status(500).send(err));
};

export const deleteContact = (req, res) => {
    Contact.findByIdAndDelete({_id: req.params.contactId})
        .then(res.json({message: 'Successfully deleted contact'}))
        .catch((err) => res.status(500).send(err));
};