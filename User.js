//User Array
Users = [
    {
        "UID":101,
        "PWD":"test",
        "Role":"Admin"
    }
]

//Object Literal
var AuthUser = {
    login : function login(uid,pass){
            //for Login
            filtered_Array = Users.filter((ele)=>{ return ele.UID==uid && ele.PWD==pass});
            
            if(filtered_Array.length==0) return "Invalid User";
            else return "Valid User";
        },
    registration : function Registration(uid,pass,role){
        //For Registration
        if(uid=='' || pass=='' || role==''){
            return 'Registration Failed';
        }
        Users.push({
            "UID":uid,
            "PWD":pass,
            "Role":role
        })
        return "Registration Succssfull";
    }
}
module.exports = AuthUser;
