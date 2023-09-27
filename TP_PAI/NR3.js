function test()
{
    let a = prompt();
    let b = prompt();
    let wynik = (a*b)? a*b: a*b;
    let metoda = (isNaN(wynik))?
    "Wprowadź tylko liczby tej":
    "Iloczyn liczb wynosi" + wynik;
    alert(metoda)
}
