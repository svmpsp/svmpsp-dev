## Lezione 1.4: Dizionari in Python

Nella programmazione, è importante gestire e manipolare dati in modo efficace. Uno strumento fondamentale per questo scopo sono i dizionari (in inglese, "dictionaries" o "maps"). In questo capitolo, esploreremo le caratteristiche e le possibili applicazioni dei dizionari in Python.

### Definizione di un dizionario

Un dizionario in Python è un tipo di dati che consente di memorizzare e accedere a valori associati a chiavi. Una chiave (key) può essere un valore di qualsiasi tipo, incluso un numero, una stringa o un oggetto complesso. Il valore associato a quella chiave è chiamato valore (value).

Ad esempio, potremmo definire un dizionario `studenti` con le seguenti informazioni:

```
studenti = {"Mario": 20, "Luca": 22, "Giovanni": 21}
```

In questo esempio, la chiave è il nome del studente e il valore è l'età.

### Accedere ai valori

Per accedere a un valore associato a una chiave specifica, possiamo utilizzare il simbolo dei punti (`.`) seguito dal nome della chiave. Ad esempio:

```
print(studenti["Mario"])  # stampa il valore associato alla chiave "Mario", cioè 20
```

Se la chiave non è presente nel dizionario, Python solleverà un errore `KeyError`.

### Aggiungere e modificare elementi

Possiamo anche aggiungere o modificare elementi in un dizionario utilizzando le seguenti operazioni:

- `studenti["Francesca"] = 19` : aggiunge una nuova chiave-valore alla fine del dizionario.
- `studenti["Luca"] = 23` : modifica il valore associato alla chiave "Luca".

### Iterare sui dizionari

Possiamo iterare sui valori di un dizionario utilizzando un loop `for`:

```
for nome, età in studenti.items():
    print(f"{nome} ha {età} anni")
```

In questo esempio, il loop `for` itera sui valori del dizionario e stampa il nome e l'età di ogni studente.

### Conclusione

In questa lezione, abbiamo imparato a definire, accedere e manipolare i dizionari in Python. I dizionari sono un tipo di dati fondamentale per la programmazione, poiché consentono di memorizzare e accedere a valori associati a chiavi. Speriamo che questa lezione ti abbia aiutato a comprendere meglio il ruolo dei dizionari nella programmazione in Python.

### Esercizi

1. Definisci un dizionario `automobili` con le seguenti informazioni: {"Alfa Romeo": 1990, "Ferrari": 1985, "Lamborghini": 1973}.
2. Accedi al valore associato alla chiave "Ferrari" e stampa il risultato.
3. Aggiungi una nuova chiave-valore all'elenco `automobili`.
4. Itera sui valori del dizionario `studenti` e stampa il nome e l'età di ogni studente.

### Risorse

- [Documentazione ufficiale Python: Dizionari](https://docs.python.org/3/library/stdtypes.html#dict-views)
- [Esperienze con i dizionari in Python](https://realpython.com/python-dicts/) (articolo sul sito web RealPython)
