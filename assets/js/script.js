var subjects = [
    'HTML',
    'CSS',
    'JavaScript'
];

function uploadRatings(){
    var rating = 0;
    var total = 0;

    for(i=1; i<=3; i++){
        j=1;
        do{
            rating = parseInt(prompt("Ingrese nota "+ j + " ["+subjects[i-1]+"], entre 1 y 7"));
            if (rating > 0 && rating <8){
                total += rating;
                var cellTable = document.getElementById('rating'+i+""+j);
                cellTable.innerHTML = rating;
                j++;
            }
        }while (j <=3);
        var cellTable = document.getElementById('rating'+i+""+j);
        cellTable.innerHTML = (total/3).toFixed(2);
        total = 0;
    }
}
