/** 
Profesor: Walter Alonso Lopez Ardilla
I.E: Luis Lopez De Mesa
Programa: Carita Feliz
Estudiante: Juan David Montoya Palacio

 */
basic.showString("iHola!, ¿como estas?")
basic.showString("Boton A, Feliz; Boton B, Triste")
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
    
}
