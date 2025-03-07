# Live Board Departure Italia

Una simulazione web interattiva di un tabellone partenze ferroviario italiano.

## Caratteristiche

- Simulazione di un display ferroviario con font e colori autentici
- Inserimento dati per:
  - Numero del binario (1-99)
  - Operatore ferroviario (Trenord, Trenitalia, Italo)
  - Tipo di treno (REG, RV, RE, AV, IC, EC, ES*)
  - Numero del treno (fino a 5 cifre)
  - Destinazione
  - Orario di partenza
  - Fermate intermedie
- Orologio analogico funzionante in tempo reale
- Animazione scorrevole per le informazioni sulle fermate
- Funzionalità di reset del tabellone
- Messaggio predefinito "Vietato oltrepassare i binari"

## Struttura del Progetto

```
live-departure-board
├── src
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   ├── board.js
│   │   └── clock.js
│   ├── index.html
│   └── help.html
```

## Come Utilizzare

1. Aprire `index.html` nel browser
2. Utilizzare il pannello di controllo per inserire:
   - Numero del binario
   - Compagnia ferroviaria
   - Tipo e numero del treno
   - Destinazione
   - Orario di partenza
   - Fermate intermedie (separate da trattino)
3. Cliccare "Aggiorna Tabellone" per visualizzare le informazioni
4. Usare "Reset Tabellone" per tornare allo stato iniziale

## Note Tecniche

- Font principale: Futura
- Design responsive
- Animazioni CSS per le informazioni scorrevoli
- Orologio analogico JavaScript
- Nessuna dipendenza esterna richiesta

## Stato del Progetto

Questo progetto è in fase di sviluppo attivo e viene costantemente aggiornato con nuove funzionalità e miglioramenti.

## Disclaimer

Questo tabellone è una simulazione a scopo ricreativo e non deve essere utilizzato come fonte ufficiale per gli orari dei treni. Per informazioni accurate e aggiornate, consultare i siti ufficiali delle compagnie ferroviarie.
