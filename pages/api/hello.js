export default function handler(req, res) {
  res.status(200).json({ message: 'Bhai, API bhi kaam kar rahi hai!', time: new Date().toISOString() });
}
