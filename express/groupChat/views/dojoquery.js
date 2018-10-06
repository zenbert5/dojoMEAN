
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
crossorigin="anonymous"></script>

<button id='hot'>HOT</button>


<script>
function dojo(element_id) {
    this.node = document.querySelector(element_id);
    this.click = function(x) {
        document.getElementById(element_id).addEventListener("click", function(){
            return x;
        })
    }
};

var $Dojo = function(element_id) {
    return new dojo(element_id);
};
$Dojo('#hot').click(function() { console.log("The button was clicked!") });
</script>