let APIKEY = "ig08wyIT5uKizBqf7K47KiU1ReIIjatx";
document.addEventListener('DOMContentLoaded', init);
function init(){
    document.getElementById('generate').addEventListener('click', ev => {
        ev.preventDefault();


        if (document.getElementById('gif').hasChildNodes()){
            var e = document.getElementById('gif')
            while(e.lastElementChild){
                e.removeChild(e.lastElementChild)
            }
        }
        if (document.getElementById('gif').childNodes.length == 0){
        let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data);
            console.log('META',content.meta);
            let image = document.createElement('img')
            image.src = content.data.images.downsized.url
            document.querySelector('.gifplayer').insertAdjacentElement('afterbegin',image);
        
            
        })
        .catch(err => {console.log(err);});
        }


        
        
        
        
    });

    
    
}