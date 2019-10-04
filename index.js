const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json());

const courses =  [
    {id: 1, name : 'course 1'},
    {id: 2, name : 'course 2'},
    {id: 3, name : 'course 3'},
    {id: 4, name : 'course 4'},
    {id: 5, name : 'course 5'},
    {id: 6, name : 'course 6'},
    {id: 7, name : 'course 7'},
    {id: 8, name : 'course 8'},
    {id: 9, name : 'course 9'},
]
// sample 
// app.get();
// app.post();
// app.put();
// app.delete();


app.get('/', (req, res) =>{
    var dataObjesct = ['1','3','4','5'];
    res.send(dataObjesct);
})
app.get('/api/courses' , (req, res) =>{
    res.send(coursescourses);
});

app.get('/api/course/:id', (req, res) =>{
    const course = courses.find(courses => courses.id  === parseInt(req.params.id))
   
    if(!course) res.status(404).send('The course with the given id was not found');
    res.send(course);
})

app.get('/api/posts/:year/:month', (req, res) =>{

    res.send(res.params);
})


app.post('/api/courses',(req, res) =>{
    const schema = {
        name : Joi.string().min(3).required()
    };
    
    const result =  Joi.validate(req.body, schema);
    console.log(result);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }


    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course);
    res.send(course);
});



const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${port}........`);
});