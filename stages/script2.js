const button = document.getElementById('myButton');


button.addEventListener('click', function() {
   
    document.body.innerHTML=`<div style="
                display: grid;
                grid-template-rows: repeat(2,400px);
        " >
            <a id='eslam' href='https://www.facebook.com' style='
                display:block;
                text-decoration:none;
                text-align:center;
                vertical-align:middle;
                background-color: rgba(255, 255, 255, 0.3);
                -webkit-backdrop-filter: blur(3px);
                backdrop-filter: blur(3px);
                border:none ;
                font-family: "Playwrite PL", cursive;
                font-size: 32px;
                font-weight: bold;
                color:rgb(1, 82, 1);
        '>
               mr eslam
            </a>
            <div>
                miss whatever
            </div>
    
    </div>
    
    
    `;
});


