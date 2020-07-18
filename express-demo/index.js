const Joi=require('joi'); //return a class, joi is for input validataion

const express=require('express'); //require return a function

const app=express(); //call the express function
app.use(express.json()); //add a piece of midleware

const courses=[
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
]

//get a http get request to the root
app.get('/', (req, res) => {
    res.send('Hello world!!!!');
});

// app.get('/api/course', (req,res) =>{
//     res.send([1,2,3]);
// });
// // /api/course , id is the name of the premeter
// app.get('/api/course/:id', (req, res) =>{
//     res.send(req.params.id); //http://localhost:port/api/course/1
// });
// app.get('/api/course/:year/:month', (req, res) =>{
//     //res.send(req.params); //http://localhost:port/api/course/1
//     res.send(req.query); //http://localhost:port/api/course/2018/1
// });

app.get('/api/course', (req,res) =>{
    res.send(courses);
});
app.get('/api/course/:id', (req, res) =>{
    const course=courses.find(c => c.id===parseInt(req.params.id));
    if(!course) //404
        return res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

// app.post();
app.post('/api/course', (req, res) => {
    //input validation with joi
    //defind a schema
    const schema={
        name: Joi.string().min(3).required()
    };

    const result=Joi.validate(req.body, schema); //return an object
    // console.log(result);

    if(result.error){
        //400 bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //input validation
    // if(!req.body.name || req.body.name.length<3){
    //     //400 bad request
    //     res.status(400).send('Name is required and shold be minimum 3 characters.');
    //     return;
    // }

    //connect to database instate
    const course={
        id: courses.length + 1, 
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// app.put();
app.put('api/course/:id', (req, res) =>{
    //look up the course
    const course=courses.find(c => c.id===parseInt(req.params.id));
    
    //if not existing, return 404
    if(!course) //404
        return res.status(404).send('The course with the given ID was not found');

    //if validate, then okay
    //if invalid, return 400 - Bad request
    // const schema={
    //     name: Joi.string().min(3).required()
    // };
    // const result=Joi.validate(req.body, schema); 
    const result=validateCourse(req.body);
    //const { error }=validateCourse(req.body); //error is the same as result.error
    if(result.error){
        //400 bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update course
    course.name=req.body.name;

    //return the update course
    res.send(course);
})

function validateCourse(course){
    const schema={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema); 
}

// app.delete();
app.delete('/api/course/:id', (req,res) =>{
    //Look up the course
    const course=courses.find(c => c.id===parseInt(req.params.id));
    //if not existing, return 404
    if(!course) {//404
        res.status(404).send('The course with the given ID was not found');
        return;
    }
    //delete
    const index=courses.indexOf(course);
    courses.splice(index, 1);
    //return the same course
    res.send(course);
})

//use environment variable for the hard-coded PORT
const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



