In questo post spieghiamo cos'e' Internet e come funziona.

### Cos'e' Internet?

Internet e' una rete mondiale di computer connessi tra loro.

Questi computer sono collegati tramite cavi o connessioni senza file e possono comunicare tra di loro. Comunicare in questo contesto significa inviare e ricevere messaggi.

Questi computer si dividono in due gruppi, i **client** e i **server**.

- **client -** ogni dispositivo connesso ad Internet e' un Internet client. Un client puo' richiedere informazioni ad altri computer sulla rete Internet.

  Ad esempio quando usiamo Google dal nostro smartphone stiamo scaricando informazioni da Internet tramite un client.

- **server -** i server sono computer se cui vengono eseguiti dei programmi chiamati server. Questi programmi permettono di ricevere messaggi dai client e di rispondere con dei dati.

### Cosa succede quando usiamo Google?

Quando usiamo Google dal nostro smartphone, lo smartphone, ovvero il client, manda una messaggio ad un server di Google, ovvero un computer connesso a Internet.

Nel messaggio sono inclusi alcuni dati, tra cui il testo che abbiamo inserito nell barra di ricerca.

Quando riceve il nostro messaggio, il server di Google analizza i dati che ha a disposizione e cerca di trovare una risposta alla nostra domanda.

Quando ha trovato una risposta, il server invia questa risposta al nostro smartphone/client e questo ci mostra la risposta.

Quando non siamo connessi a Internet, il client prova a contattare il server ma il server non puo' rispondere, quindi il client ci mostra un messaggio di errore.

### Messaggi su Internet

Come per le persone, per comunicare i client e server collegati ad Internet devono conoscere la stessa lingua.

Nella comunicazione tra computer, una lingua viene chiamata un **protocollo di comunicazione**.

Un protocollo di comunicazione e' semplicemente una serie di regole che stabiliscono quali sono i messaggi e le risposte accettate nella comunicazione.

Ad esempio, possiamo inventarci il seguente protocollo di comunicazione:

```
1. Il client invia il messaggio: "ciao".

2. Quando il server riceve il messaggio "ciao", risponde con "ciao a te! Come va?".

3. Il client riceve la risposta "ciao a te! Come va?" e interrompe la comunicazione.
```

Ovviamente, i protocolli di comunicazione usati su Internet sono meno cordiali e piu' utili, ma in pratica ci sono una serie di messaggi e di risposte valide che sia i client che i server conoscono.

Ad esempio, per scaricare un file da Internet il client invia un messaggio simile a `GET il_mio_file.txt`.

Quando il server riceve il messaggio, se il file richiesto esiste, risponde con il contenuto del file. Se il server non trova il file richiesto potrebbe rispondere con `ERROR file non trovato`.

### Conclusioni

In questo post abbiamo spiegato semplicemente come funziona Internet, cosa sono i client e i server e come questi comunicano per scambiarsi informazioni e dati.
