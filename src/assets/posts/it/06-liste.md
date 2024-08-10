## Lezione 3: Le liste in Python

### Introduzione

Nella programmazione, è comune lavorare con dati che possono variare nel loro numero e tipo. In questo capitolo, impareremo a lavorare con una delle strutture di dati più importanti in Python: le liste.

### Cos'è una lista?

In Python, una lista è una struttura di dati che può contenere zero o più elementi, possono essere di qualsiasi tipo (ad esempio, numeri, stringhe, oggetti). Le liste sono indicate dal simbolo `[]` e gli elementi sono separati da virgole.

Esempio:

```
my_list = [1, 2, 3, 'ciao', 4.5]
```

### Come creare una lista

Per creare una lista in Python, è sufficiente assemblare gli elementi che vuoi contenere nella struttura `[]`.

Esempio:

```
my_list = []
my_list.append(1)
my_list.append(2)
my_list.append(3)
print(my_list)  # [1, 2, 3]
```

### Come accedere agli elementi di una lista

Per accedere a un elemento specifico di una lista, puoi usare l'indice del elemento. Gli indici in Python partono da 0, quindi il primo elemento della lista è alla posizione 0.

Esempio:

```
my_list = [1, 2, 3]
print(my_list[0])  # 1
print(my_list[1])  # 2
print(my_list[2])  # 3
```

Se cerchi di accedere a un elemento fuori dalla lista, Python ti restituirà un errore.

Esempio:

```
my_list = [1, 2, 3]
print(my_list[3])  # Error: list index out of range
```

### Come modificare una lista

Le liste in Python sono mutabili, quindi puoi modificarli aggiungendo o eliminando elementi.

Esempio:

```
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)  # [1, 2, 3, 4]

my_list.remove(2)
print(my_list)  # [1, 3, 4]
```

### Come iterare su una lista

Le liste in Python supportano l'iterazione con un ciclo `for`. Questo ti consente di eseguire un codice per ogni elemento della lista.

Esempio:

```
my_list = [1, 2, 3]

for element in my_list:
    print(element)
# Output:
# 1
# 2
# 3
```

### Esercizi

1. Crea una lista di numeri e stampa la lunghezza della lista.
2. Aggiungi un elemento alla fine di una lista e stampa la lista modificata.
3. Rimuovi l'ultimo elemento di una lista e stampa la lista modificata.

### Conclusione

Nella lezione precedente, abbiamo imparato a lavorare con le liste in Python. Le liste sono struttture di dati importanti che possono contenere zero o più elementi. Siamo stati in grado di creare, accedere, modificare e iterare sulle liste. Nel prossimo capitolo, impareremo a lavorare con altre strutture di dati come i dizionari e gli insiemi.

### Riassunto

- Le liste sono struttura di dati che possono contenere zero o più elementi.
- Le liste possono essere create assemblando gli elementi nella struttura `[]`.
- Le liste sono mutabili, quindi possono essere modificate aggiungendo o eliminando elementi.
- Le liste supportano l'iterazione con un ciclo `for`.
