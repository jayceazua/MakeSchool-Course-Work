function splitTextData (textData) {
    let tempData = []
    for (var item in textData) {
        tempData.push(textData[item].split(','));
    }
    // This pop method helps clean the last of the array that is empty
    tempData.pop();
    return tempData;
}

fetch('MOCK_DATA.csv').then(function(res) {
    return res.text()
}).then(function(text) {
    // console.log(text); // all text
    // get the first line
    let textData = text.split('\n');
    let keys = textData.shift().split(',');
    let tempData = splitTextData(textData);
    let tempObj = {};
    
    console.log(textData)

    
    console.log(tempData)

    // loop through all items in tempData
        // test the valueForKey should array of id, first, last, ...
            // log key and value  id, 1   first_name, Alec ... 
    // make an obj assign each value from the array with a key from keys
    
}).catch(function(err) {
    console.log(err.message)
});