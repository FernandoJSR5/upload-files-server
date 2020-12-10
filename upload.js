module.exports = function upload(req, res) {
  var form = new IncomingForm()

  form.on('file', (field, file) => {
  })
  form.on('end', () => {
    console.log(res.json());
    res.json()
  })
  form.parse(req)
}