## Lezione 1: Le variabili in Python

Ecco la prima lezione del corso di programmazione con Python. Oggi parleremo delle variabili, una componente fondamentale della programmazione.

### Cos'è una variabile?

Una variabile è un luogo dove l'interprete Python assegna un valore. Le variabili vengono utilizzate per memorizzare valori che possono cambiare durante l'esecuzione del programma. Per esempio, potresti creare una variabile chiamata "nome" e assegnarle il valore "Gianni". Poi, nel tuo codice, potresti utilizzare la variabile "nome" per mostrarlo sullo schermo.

### Come si definiscono le variabili in Python?

In Python, le variabili vengono definite assegnando un nome a un valore. Il nome della variabile viene chiamato "identificatore" o "nome di variabile". Ecco come si scrive la definizione di una variabile:

```
nome = "Gianni"
```

Nota che il simbolo "=" è noto come operatore di assegnazione. Stabilisce il collegamento tra il nome della variabile e il valore che vuoi assegnare.

### Tipi di dati in Python

In Python, le variabili possono contenere valori di diversi tipi, come ad esempio:

- Numeri interi (int)
- Numeri reali (float)
- Stringhe (str)
- Booleani (bool)
- Liste (list)
- Dizionari (dict)

Ecco alcuni esempi di assegnazione di variabili con valori di diversi tipi:

```
età = 25  # int
nome = "Gianni"  # str
è_maschio = True  # bool
preferenze = ["python", "java"]  # list
informazioni = {"nome": "Gianni", "età": 25}  # dict
```

### Come si utilizzano le variabili in Python?

Le variabili vengono utilizzate nel codice Python per accedere ai valori memorizzati. Ecco alcuni esempi di come si utilizza una variabile:

```
nome = "Gianni"
print(nome)  # stampa il valore della variabile nome

età = 25
print("Sono nato nel " + str(età))  # stampa un messaggio che include il valore della variabile età
```

Nota che in Python, quando si utilizza una variabile all'interno di una stringa (come nella seconda esempio), è necessario convertire il valore della variabile in tipo "str" utilizzando il metodo `str()`.

### Esercizi e conclusioni

Ecco alcuni esercizi per aiutarti a comprendere meglio le variabili in Python:

1. Crea una variabile chiamata "città" e assegnale il valore "Roma".
2. Stampa il valore della variabile "città" sullo schermo.
3. Crea due variabili, "nome" e "età", e assegna loro valori di tuo interesse.

In questo corso, imparerai a gestire le variabili in Python e ad utilizzarle per creare programmi più complessi. La prossima lezione sarà sul controllo delle istruzioni e sul ciclo WHILE.
