
"""
Profesor: Walter Alonso Lopez Ardilla
I.E: Luis Lopez De Mesa
Programa: Carita Feliz
Estudiante: Juan David Montoya Palacio
"""

basic.show_string("iHola!, ¿como estas?")
basic.show_string("Boton A, Feliz; Boton B, Triste")
while True:
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.HAPPY)
    elif input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.SAD)