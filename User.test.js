const AuthUser = require('./User');
var Auth = require('./User');

//Test For Login
test("Authentication user",()=>{
    expect(Auth.login(101,"test")).toBe("Valid User");
    expect(Auth.login(102,"test")).toBe("Invalid User");
})

//Test for Signup
test("SignUp Test",()=>{
    expect(Auth.registration(102,'Tesr',"Admin")).toBe("Registration Succssfull");
    expect(Auth.registration(102,'Tesr',"")).toBe("Registration Failed");
})

//Test for first Signup then Login
test("Register then Login",()=>{
    expect(Auth.registration(103,'Tesr',"Admin")).toBe("Registration Succssfull");
    expect(Auth.login(103,'Tesr')).toBe("Valid User");
})