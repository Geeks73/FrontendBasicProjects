const tagOptions  = [
    "p", "h1", "h2","h3","h4","h5","h6", "span"
];

//get DOM elemnts
const optionsContainer = document.querySelector(".options");
const outputContainer = document.querySelector(".output");
const tagsSelect = document.getElementById("tags");
const paragraphSlider = document.getElementById("paragraphs");
const wordSlider = document.getElementById("words");
const paragraphsValue = document.getElementById("paragraphsValue");
const wordsValue = document.getElementById("wordsValue");
const generateButton = document.getElementById("generate");

//Create Options UI
function createOptionsUI(){
    //with tag options , fill the select elemnt 
    tagOptions.forEach((tag) => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = `<${tag}>`;
        tagsSelect.appendChild(option);
    });
    //Event listeners for Sliders 
    paragraphSlider.addEventListener("input",updateParagraphsValue);

    wordSlider.addEventListener("input", updateWordsValue);
    generateButton.addEventListener("click", generateLoremIpsum);



}

function updateParagraphsValue(){
    paragraphsValue.textContent = paragraphSlider.value;
}

function updateWordsValue(){
    wordsValue.textContent = wordSlider.value;
}
function generateLoremIpsum(){
    const paragraphs = parseInt(paragraphSlider.value);
    const tag = document.getElementById("tags").value;
    const includeHtml = document.getElementById("include").value;
    const wordsPerParagraph = parseInt(wordSlider.value);
    const loremIpsumText = generateText(paragraphs,tag,includeHtml,wordsPerParagraph);
    displayLoremIpsum(loremIpsumText);

}

//function to generate text
function generateText(paragraphs,tag,includeHtml,wordsPerParagraph){
    //  Use a placeholder text as an  
    //  Example for illustrating. 
    const placeholderText = 
        `Lorem ipsum dolor sit amet  
        consectetur adipiscing elit sed  
        do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua.`; 

    const loremIpsumArray = new Array(paragraphs).fill("");
    //Generate word for each paragraph
    for(let i = 0; i <paragraphs;i++){
        const words = generateWords(wordsPerParagraph);
        loremIpsumArray[i] = includeHtml === "Yes" ? `<${tag}>${words}</${tag}>`:words;
    }


    //join paragraphs into a single string
    return loremIpsumArray.join("\n");
}

function generateWords(numWords){
     // Lorem Ipsum text for demonstration purposes 
     const loremIpsumText = 
     `Lorem ipsum dolor sit amet, consectetur  
     adipiscing elit, sed do eiusmod tempor  
     incididunt ut labore et dolore magna  
     aliqua. Diam in arcu cursus euismod  
     quis viverra nibh. Nunc aliquet bibendum 
     enim facilisis gravida neque convallis  
     a cras. Sagittis purus sit amet volutpat 
     Consequat mauris. Duis ultricies lacus  
     sed turpis tincidunt id. Consequat interdum 
     varius sit amet mattis vulputate. Enim sed 
     faucibus turpis in eu. Ridiculus mus mauris 
     vitae ultricies leo integer malesuada nunc vel. 
     Nulla pharetra diam sit amet nisl suscipit. 
     Lobortis elementum nibh tellus molestie nunc 
     non blandit massa enim. Dis parturient montes 
     nascetur ridiculus mus. Justo nec ultrices dui 
     sapien eget. Enim tortor at auctor urna nunc. 
     Dictumst quisque sagittis purus sit amet volutpat 
     consequat mauris nunc.`; 

     const words = loremIpsumText.split(" ");
     // Ensure the number of words requested is  
    // within the bounds of the available words 

    if(numWords <= words){
        return words.slice(0,numWords).join(" ");
    }
    else{
       return words.join(" ");
    }
}

function displayLoremIpsum(text){
    outputContainer.innerHTML = text;
}
createOptionsUI();