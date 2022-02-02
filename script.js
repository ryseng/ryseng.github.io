function calculateWorkingSet()
{
        num1 = document.getElementById("oneRepMax").value;
        num2 = document.getElementById("setPercent").value;
        document.getElementById("result").innerHTML = (((num1*(num2*.01))-45)/2);
}
