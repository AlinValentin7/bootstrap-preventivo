

    
    const preventivoElement = document.getElementById('preventivo');
    // Ottiene il preventivoElement con l'ID 'preventivo'
    const unitsElement = document.getElementById('units');
    // Ottiene l'elemento che mostra il prezzo finale
    const validFeedbackElement = document.querySelector('.valid-feedback');
    // Ottiene l'elemento che mostra il feedback per un codice promozionale valido
    const invalidFeedbackElement = document.querySelector('.invalid-feedback');
    // Ottiene l'elemento che mostra il feedback per un codice promozionale non valido
    const lavoroElement = document.getElementById('lavoro').value;
    // Ottiene il valore selezionato nel campo di selezione del tipo di lavoroElement
     const promoCodeElement = document.getElementById('promo').value.trim();
    // Ottiene il valore del codice promozionale, eliminando eventuali spazi bianchi
    
    const prezzo = {
        backend: 20.50,
        frontend: 15.30,
        project: 33.60
    };
    // Oggetto che memorizza i prezzi orari per ciascun tipo di lavoroElement

    const promoCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
    // Array di codici promozionali validi
    const discount = 0.25;
    // Percentuale di sconto applicabile se il codice promozionale è valido

    preventivoElement.addEventListener('submit', function(event) {
        event.preventDefault();
        // Previene l'invio del preventivo che causerebbe un ricaricamento della pagina

        if (!lavoroElement) {
            alert('Per favore, seleziona un tipo di lavoroElement.');
            // Se nessun tipo di lavoro è stato selezionato, mostra un messaggio di avviso e interrompe l'esecuzione della funzione
            return;
        }

        let prezzoOrario = prezzo[lavoroElement];
        // Ottiene il prezzo orario corrispondente al tipo di lavoro selezionato
        let prezzoFinale = 10 * prezzoOrario;
        // Calcola il prezzo finale supponendo che ogni progetto richieda 10 ore di lavoro

        if (promoCode.includes(promoCodeElement)) {
            prezzoFinale *= (1 - discount);
            // Se il codice promozionale è valido, applica lo sconto del 25% al prezzo finale
            validFeedback.style.display = 'block';
            invalidFeedback.style.display = 'none';
            // Mostra il feedback per il codice promozionale valido e nasconde quello per il codice non valido
        } else if (promoCodeElement) {
            validFeedback.style.display = 'none';
            invalidFeedback.style.display = 'block';
            // Se il codice promozionale è stato inserito ma non è valido, mostra il feedback per il codice non valido e nasconde quello per il codice valido
        } else {
            validFeedback.style.display = 'none';
            invalidFeedback.style.display = 'none';
            // Se non è stato inserito alcun codice promozionale, nasconde entrambi i feedback
        }

        finalPriceContainer.textContent = `€ ${prezzoFinale.toFixed(2)}`;
        // Aggiorna il contenuto dell'elemento che mostra il prezzo finale, preventivo con due decimali e il simbolo dell'euro
    });
