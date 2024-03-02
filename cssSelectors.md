# Select the first <h2> element:
Answer: h2:first-child

# Select all list items under the <ul> element with the id "fruits":
Answer: #fruits .fruit

# Select the second <span> element with the class "color" under the <div> with the id "colors"
Answer: #colors .color:nth-of-type(2)

# Select the cell with age of the student named "Alice"
Answer: //table[@id="students"]//td[preceding-sibling::td='Alice']
        or     
        //table[@id="students"]//td[preceding-sibling::td[1]='Alice']