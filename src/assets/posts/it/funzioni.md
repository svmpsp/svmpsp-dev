## Lezione 1: Le Funzioni in Python

Ecco arrivato il momento di imparare uno dei concetti più importanti nella programmazione: le funzioni!

### Cos'è una funzione?

In Python, una funzione è un blocco di codice che esegue una specifica azione e può essere chiamata ripetutamente nel tuo programma. Le funzioni sono utilizzate per organizzare il codice in moduli più piccoli e facilmente gestibili, migliorando la leggibilità e la manutenibilità del codice.

### Esempio di Funzione

Ecco un esempio di funzione Python:

```python
def saluta(nome):
    print("Ciao, " + nome + "!")

saluta("Mario")  # Output: Ciao, Mario!
```

In questo esempio, la funzione `saluta` prende un argomento `nome` e stampa un messaggio di benvenuto con il nome passato come parametro. La funzione può essere chiamata più volte con diversi nomi, ottenendo output differenti.

### Parametri e Ritorno

Le funzioni possono avere parametri, che sono i valori passati alla funzione quando viene chiamata. Inoltre, le funzioni possono anche restituire un valore utilizzando la parola chiave `return`.

Ecco un esempio di funzione con parametro e ritorno:

```python
def somma(a, b):
    return a + b

risultato = somma(2, 3)
print(risultato)  # Output: 5
```

In questo esempio, la funzione `somma` prende due parametri `a` e `b`, li somma e restituisce il risultato. Il valore restituito è poi assegnato alla variabile `risultato`.

### Funzioni con Parametri di Default

In Python, le funzioni possono anche avere parametri di default, che sono i valori imposti automaticamente se non viene passato alcun valore per quel parametro.

Ecco un esempio:

```python
def saluta(nome="Mondo"):
    print("Ciao, " + nome + "!")

saluta()  # Output: Ciao, Mondo!
saluta("Mario")  # Output: Ciao, Mario!
```

In questo esempio, la funzione `saluta` ha un parametro `nome` con valore di default "Mondo". Se non viene passato alcun valore per il nome, verrà imposto automaticamente a "Mondo".

### Esercizi

1. Crea una funzione che calcola l'area di un rettangolo dato i valori della lunghezza e della larghezza.
2. Crea una funzione che prende in input il nome di un colore e lo stampa in console.
3. Crea una funzione che somma due numeri e restituisce il risultato.

### Conclusioni

In questo capitolo, abbiamo imparato a creare le prime funzioni in Python! Le funzioni sono un modo importante per organizzare il codice e rendere il tuo programma più gestibile. Spero che queste informazioni ti siano state utili e che tu possa iniziare a scrivere le tue prime funzioni Python!
