## Introduzione al Logging con Python

**Obiettivo:** In questo capitolo, vorremmo introdurre il concetto di logging nella programmazione con Python. Il logging è una pratica importante nella programmazione che consiste nell'aggiungere informazioni dettagliate sulle azioni eseguite dal tuo codice. Questo può aiutare a risolvere problemi, a identificare bug e a migliorare la gestione degli errori.

### Cos'è il Logging?

Il logging è un processo che consiste nell'aggiungere informazioni dettagliate sulle azioni eseguite dal tuo codice. Questo può includere messaggi di stato, eventi critici, errori e altre informazioni utili per la gestione del tuo programma.

### Perché il Logging è Importante?

Il logging è importante perché:

- Aiuta a risolvere problemi: con informazioni dettagliate sulle azioni eseguite, puoi più facilmente identificare i punti in cui il tuo codice va storto.
- Aiuta a identificare bug: se un errore si verifichi, il logging ti aiuterà a comprendere cosa è successo e come ripararlo.
- Aiuta a migliorare la gestione degli errori: con informazioni dettagliate sulle azioni eseguite, puoi creare strategie per prevenire gli errori e migliorare la stabilità del tuo programma.

### Come Usare il Logging in Python

Python ha una libreria dedicata al logging chiamata `logging`. Questa libreria ti consente di configurare il tuo logging e di scrivere messaggi di stato nel file di log.

Ecco un esempio semplice di come utilizzare il logging in Python:

```python
import logging

# Configurazione del logging
logging.basicConfig(filename='log.txt', level=logging.INFO)

# Esecuzione di un'azione
def my_function():
    # Aggiungo un messaggio di stato al file di log
    logging.info('Sto eseguendo la funzione')

my_function()
```

In questo esempio, stiamo configurando il logging per scrivere i messaggi di stato nel file `log.txt` con livello `INFO`. Quindi, dentro la funzione `my_function`, aggiungiamo un messaggio di stato al file di log utilizzando la funzione `logging.info`.

### Conclusioni

In questo capitolo, abbiamo introdotto il concetto di logging nella programmazione con Python. Il logging è una pratica importante che aiuta a risolvere problemi, a identificare bug e a migliorare la gestione degli errori. Speriamo che questo capitolo ti abbia aiutato a comprendere l'importanza del logging e come utilizzarlo in Python.

### Esercizi

1. Creare un programma Python che esegue diverse operazioni e registra i risultati nel file di log.
2. Configurare il livello di logging per registrare solo gli errori critici.
3. Creare un programma Python che utilizza il logging per gestire gli errori durante l'esecuzione.
