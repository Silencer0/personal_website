const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'];
const prepositions = ['in', 'on', 'at', 'to', 'for', 'with', 'by', 'from', 'of', 'about'];
const articles = ['a', 'an'];

function analyzeText() {
    const text = document.getElementById('textInput').value;
    
    
    const stats = {
        letters: text.match(/[a-zA-Z]/g)?.length || 0,
        words: text.trim().split(/\s+/).length,
        spaces: text.match(/\s/g)?.length || 0,
        newlines: text.match(/\n/g)?.length || 0,
        specialSymbols: text.match(/[^a-zA-Z0-9\s]/g)?.length || 0
    };

    
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    
    // Count analyses
    const pronounCount = words.reduce((acc, word) => {
        if (pronouns.includes(word)) acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    const prepositionCount = words.reduce((acc, word) => {
        if (prepositions.includes(word)) acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    const articleCount = words.reduce((acc, word) => {
        if (articles.includes(word)) acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    displayResults(stats, pronounCount, prepositionCount, articleCount);
}

function displayResults(stats, pronouns, prepositions, articles) {
    document.getElementById('analysisResults').innerHTML = `
        <h3>Basic Statistics:</h3>
        <p>Letters: ${stats.letters}</p>
        <p>Words: ${stats.words}</p>
        <p>Spaces: ${stats.spaces}</p>
        <p>Newlines: ${stats.newlines}</p>
        <p>Special Symbols: ${stats.specialSymbols}</p>

        <h3>Pronouns:</h3>
        <pre>${JSON.stringify(pronouns, null, 2)}</pre>

        <h3>Prepositions:</h3>
        <pre>${JSON.stringify(prepositions, null, 2)}</pre>

        <h3>Indefinite Articles:</h3>
        <pre>${JSON.stringify(articles, null, 2)}</pre>
    `;
}
