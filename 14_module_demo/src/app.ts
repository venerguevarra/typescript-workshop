import express from 'express';
import cors from 'cors';
import fp from 'path';

// user-defined function
// __dirname is a constant variable
function relative(path: string) {
  return fp.join(__dirname, path);
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(relative('public')));
console.log(process.env.NODE_ENV);
app.listen(8000, () => {
    console.log(`Running application!`);
});