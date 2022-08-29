// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Every file inside the api folder is an endpoint. 
//You can create your own endpoint inside the NextJS framework
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
