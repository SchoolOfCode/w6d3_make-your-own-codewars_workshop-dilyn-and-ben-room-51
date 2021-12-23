//👉 Write your tests below here:
import main from "./main.js"
import members from "./members.js"


    
const name = ['Ben','Charlotte','Dilyn', 'Eddie','Ivan','Kat','Max','Richard','Scott','Ted']
const age  = [ 20, 37, 22, 31, 37, 21, 28, 19, 26, 23]
const id   = [1, 2, 3, 4,  5,6, 7, 8, 9, 10]

const actualName = main(members)[0]
const actualAge  = main(members)[1]
const actualID   = main(members)[2]

test("compares name array to expected", function (){
    expect(name).toStrictEqual(actualName)
})
test("compares name array to expected", function (){
    expect(age).toStrictEqual(actualAge)
})
test("compares name array to expected", function (){
    expect(id).toStrictEqual(actualID)
})
