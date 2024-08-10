## Lezione 4: I Commenti

Nella programmazione, i commenti sono una forma di annotare il codice sorgente, fornendo informazioni ai programmatori e ai lettori sullo scopo del codice stesso. In questo capitolo, studieremo come utilizzare i commenti in Python.

### Perché gli commenti sono importanti?

Gli commenti servono a:

- Fornire spiegazioni sullo scopo del codice
- Documentare il codice per aiutare altri programmatori a comprendere cosa fa il tuo programma
- Aiutare se stessi a ricordare cosa faceva un pezzo di codice nel futuro

### Come si scrive un commento in Python?

In Python, i commenti possono essere scritti utilizzando due tipi di sintassi:

1. **Commento singolo**: `# questo è un commento`
2. **Commento a blocco**: `"""questo è un commento multi-linea"""` o `'''questo è un commento multi-linea'''`

Il commento singolo può essere utilizzato per annotare una sola riga di codice, mentre il commento a blocco può essere utilizzato per annotare più righe di codice.

### Esempio:

```python
# Questo è un programma semplice che stampa un messaggio sulla console
print("Ciao, mondo!")

"""
Questo è un esempio di un programma Python che calcola la somma di due numeri.
Il programma chiede all'utente di inserire i due numeri e poi li soma insieme.
"""

x = int(input("Inserisci il primo numero: "))
y = int(input("Inserisci il secondo numero: "))
print(x + y)
```

### Best practice

- Utilizza i commenti per spiegare lo scopo del codice
- Utilizza i commenti per documentare le funzioni e le variabili
- Utilizza i commenti per aiutarti a ricordare cosa faceva un pezzo di codice nel futuro

### Esercizi

1. Scrivi un programma Python che chiede all'utente di inserire il suo nome e poi lo stampa sulla console con un messaggio di benvenuto.
2. Modifica il seguente programma per aggiungere commenti:

```python
x = 5
y = 3
print(x + y)
```

### Risultati attesi

- Il lettore dovrebbe essere in grado di comprendere lo scopo del codice e cosa fa il programma.
- Il lettore dovrebbe essere in grado di utilizzare i commenti per aiutarsi a ricordare cosa faceva un pezzo di codice nel futuro.
