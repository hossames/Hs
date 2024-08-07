const getcookies = async(req,res) => {
  try{
    res.status(200).json({ cookies: req.cookies });
  }catch{
    res.status(500).json({ error: 'Error getting cookies' });
  }
}

module.exports = getcookies;