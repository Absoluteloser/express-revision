import express,{IncomingMessage,ServerResponse} from 'express'
import path from 'path'
const app=express()
const port=3000
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req:IncomingMessage,res:ServerResponse)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})
app.get('/first',(req:IncomingMessage,res:ServerResponse)=>{
    res.sendFile(path.join(__dirname,'public','first.html'))
})
app.listen(port,()=>{
    console.log(`the server is running at the port ${port}`)
})