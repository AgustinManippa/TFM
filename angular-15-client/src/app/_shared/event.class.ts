export class EventData {
  name: string; // Nombre del evento
  value: any; // Valor asociado al evento

  constructor(name: string, value: any) {
    this.name = name; // Asignar el nombre proporcionado al nombre del evento
    this.value = value; // Asignar el valor proporcionado al valor del evento
  }
}