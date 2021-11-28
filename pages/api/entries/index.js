import Entry from '../../../models/entry.js';
export default async function handler(req, res) {
    let entries = await Entry.find()
    res.json(entries)
};
