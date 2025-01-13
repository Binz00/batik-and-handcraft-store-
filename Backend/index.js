const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());

// Allow all origins (for development)
app.use(cors({ 
    origin: '*' // This will allow all origins, useful for local development
}));

// OR: To allow only a specific origin (uncomment this block and comment the above block if you want to limit CORS)
/*
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL or domain
    credentials: true, // If you are using cookies or auth headers
}));
*/

// Database connection with MongoDB
mongoose.connect("mongodb+srv://binzsilva75:aq2eP4zIJUzaASba@cluster0.zliixve.mongodb.net/?retryWrites=true&w=majority", {
    serverSelectionTimeoutMS: 50000,  // 50 seconds timeout for server selection
    socketTimeoutMS: 45000            // 45 seconds timeout for socket operations
});

app.get("/", (req, res) => {
    res.send("Express app is running");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serve static files from the 'upload/images' directory
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// Creating upload endpoint for images
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for creating products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true
    },
    p_name: {
        type: String,
        required: true
    },
    b_name: {
        type: String,
        default: "Liora"
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
});

// API to add a product
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new Product({
        id: id,
        p_name: req.body.p_name,
        b_name: req.body.b_name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    await product.save();
    res.json({
        success: true,
        p_name: req.body.p_name,
    });
});

// API to delete a product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({
        success: true,
        p_name: req.body.p_name,
    });
});

// API to get all products
app.get('/getproducts', async (req, res) => {
    let products = await Product.find({});
    res.send(products);
});

// Schema for user model
const Users = mongoose.model('Users', {
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Endpoint for registering the user
app.post('/signup', async (req, res) => {
    console.log(req.body); // Debugging: Log the request body

    // Check if email already exists
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "User already exists" });
    }

    // Create an initial empty cart
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        cartData: cart
    });

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    };

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
});

// Endpoint for user login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            };

            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: "Wrong password" });
        }
    } else {
        res.json({ success: false, errors: "Wrong email" });
    }
});

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});
