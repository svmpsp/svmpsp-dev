## Lezione 8: Introduzione alle classi e oggetti in Python

Nella programmazione, le classi sono un concetto fondamentale per creare oggetti che possano rappresentare entità reali o astratte. In questo corso di programmazione con Python, impareremo a utilizzare le classi per creare oggetti personalizzati e complessi.

### Cosa sono le classi?

Una classe è un template che definisce il comportamento e la struttura di un oggetto. Una volta definita una classe, possiamo istanziarne molte copie (oggetti) con proprietà diverse.

In Python, le classi vengono definite utilizzando la parola chiave `class`, seguita dal nome della classe e dalle sue caratteristiche. Ad esempio:

```python
class Automobile:
    def __init__(self, marca, modello):
        self.marca = marca
        self.modello = modello

    def descrivi_sesteso(self):
        return f"{self.marca} {self.modello}"
```

In questo esempio, abbiamo definito una classe `Automobile` con due attributi (`marca` e `modello`) e un metodo (`descrizione`). Il metodo `__init__` è chiamato quando creiamo un oggetto della classe (chiamato istanza) e serve a inizializzare gli attributi.

### Come si utilizzano le classi?

Una volta definita una classe, possiamo crearne oggetti istanziandola con i valori appropriati per gli attributi. Ad esempio:

```python
my_car = Automobile("Toyota", "Corolla")
print(my_car.descrizione())  # Output: "Toyota Corolla"
```

Possiamo anche utilizzare le classi per ereditare comportamento da altre classi (chiamato eredità) e creare relazioni tra oggetti.

### Eredità

L'eredità è il processo di creare una nuova classe che estende o modifica la funzionalità di un'altra classe esistente. In Python, l'eredità viene definita utilizzando la parola chiave `class` seguita dal nome della classe ereditata e dalle sue caratteristiche.

Ad esempio:

```python
class ElectricCar(Automobile):
    def __init__(self, marca, modello, batteria_capacita):
        super().__init__(marca, modello)
        self.batteria_capacita = batteria_capacita

    def descrivi_elettrica(self):
        return f"{super().descrizione()} con batteria {self.batteria_capacita}"
```

In questo esempio, abbiamo definito una classe `ElectricCar` che eredita da `Automobile` e aggiunge un nuovo attributo (`batteria_capacita`) e un metodo (`descrizione_elettrica`).

### Conclusioni

In questa lezione, abbiamo imparato a definire classi in Python e a utilizzarle per creare oggetti personalizzati. Abbiamo anche visto come l'eredità possa essere utilizzata per estendere o modificare la funzionalità di una classe esistente.

Nella prossima lezione, impareremo a lavorare con gli attributi e i metodi delle classi, così come a utilizzare operatori e funzioni speciali. **Fai pratica!** Creare un oggetto della classe `Automobile` e chiamare il metodo `descrizione`. Poi, creare una nuova classe ereditata da `Automobile` e aggiungere nuovi attributi e metodi. **Ecco i tuoi compiti per la prossima lezione!**
