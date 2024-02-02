# Middlewares
Middleware are functions that can be used for handling request and response objects.


Middleware is a function that receives three parameters:
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
Middleware used like this:
app.use(requestLogger)