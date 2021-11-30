var Q3 = require('./Q3')

//Test to get book object by its id
test("Return Book by id TEST",()=>{
    book = {
        bookid:2, 
        bookname:"Alchemist",
        author:"poulo cohneo",
        cost:100
    }
    expect(Q3.returnBookDataById(2)).toBeTruthy();
    expect(Q3.returnBookDataById(2)).not.toBeNull();
    expect(Q3.returnBookDataById(2)).toEqual(book);
    expect(Q3.returnBookDataById(19)).toBeNull();
})

//Test To find book id in library array
test("Check id in an array",()=>{
    expect(Q3.returnarr()).toContain(3)
    expect(Q3.returnarr()).not.toContain(34)
    expect(Q3.returnarr()).not.toContain(323)
})