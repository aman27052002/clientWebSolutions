const {z} = require('zod')

const loginSchema = z.object({

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"invalid email address"})
    .min(3,{message:"Email must be at least of 3 characters"})
    .max(255,{message:"Email must not be more then 255 characters"}) , 

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be at least of 8 characters"})
    .max(25,{message:"Password must not be more then 25 characters"})
})

const signupSchema = loginSchema.extend({

    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 characters"})
    .max(255,{message:"Name must not be more then 255 characters"}) , 

    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at least of 10 digits"})
    .max(11,{message:"Phone must not be more then 11 digits"}) , 

})

const contactSchema = z.object({

    username:z
    .string({required_error:"username is required"})
    .trim()
    .min(3,{message:"username must be at least of 3 characters"})
    .max(255,{message:"username must not be more then 255 characters"}) , 

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(8,{message:"Email must be at least of 8 characters"})
    .max(25,{message:"Email must not be more then 25 characters"}) ,

    message:z
    .string({required_error:"message is required"})
    .trim()
    .min(3,{message:"message must be at least of 3 characters"})
    .max(255,{message:"message must not be more then 255 characters"}) 
})
module.exports = {signupSchema,loginSchema,contactSchema}