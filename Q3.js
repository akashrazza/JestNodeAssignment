library = [
    {
        bookid:1, 
        bookname:"IKAGAI",
        author:"Michiko Kumano",
        cost:100
    },
    {
        bookid:2, 
        bookname:"Alchemist",
        author:"poulo cohneo",
        cost:100
    },
    {
        bookid:3, 
        bookname:"Fault in our starts",
        author:"TIme",
        cost:100
    },
    {
        bookid:4, 
        bookname:"IKAGAI",
        author:"Michiko Kumano",
        cost:100
    },
    {
        bookid:5, 
        bookname:"IKAGAI",
        author:"Michiko Kumano",
        cost:100
    }
]
Q3_test = {
    returnBookDataById : function returnBookDataById(num){
        filtered_array = library.filter((ele)=>{ return ele.bookid==num});
        if(filtered_array.length==0){
            return null;
        }
        else{
            return  filtered_array[0]
        }
    },
    returnarr : function returnarr(){
        // return library.
        arr = []
        library.forEach(element => {
            arr.push(element.bookid);
        });
        return arr;
    }
}
module.exports=Q3_test;
// module.exports=returnarr;