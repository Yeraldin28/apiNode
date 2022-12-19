import app from "./app.js";
import { PORT } from "./config.js";

app.set('view engine', 'ejs');


app.listen(PORT);
console.log('Server on port http://localhost:3000');