import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
const PORT = 3000;


app.use(cors());


app.use(express.json());

// Connect to MongoDB
mongoose.connect(`mongodb+srv://utkarshpandey2024:utkarshpandey2024@cluster0.jw45ofx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(()=>{
    console.log('Connected to MongoDB');
  })
  .catch(
    (error) => {
      console.error('Error connecting to MongoDB:', error);
    }
  );


// Define a Mongoose schema
const subjectSchema = new mongoose.Schema({
  subject: String,
  marks: Number
});

// Create a Mongoose model
const Subject = mongoose.model('Subject', subjectSchema);

app.get('/', async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.json(subjects);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
